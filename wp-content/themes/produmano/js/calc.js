var editing_model = null;





/* Представление цены */
var PriceView = Backbone.View.extend({
    tagName: 'div',
    className: 'input',
    template: $('#price-block').html(),

    initialize: function() {
        Backbone.on('recalculate', this.recalculate, this);
        this.model.on('change:price', this.render, this);
        this.recalculate();
    },
    render: function() {
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    },
    recalculate: function() {
		
		
		var area = prepare_number(jQuery('#area').val());
		var count_rooms = prepare_number(jQuery('#rooms').val());
        var area_bathrooms = prepare_number(jQuery('#area_bathrooms').val());
        var san = jQuery('#bathrooms_type').val();
        var type = jQuery('input[name="design_type"]:checked').attr('id');
		
		console.log(san);
		
		
		//запись значений в куки
		if(area == '35'){}
		else{jQuery.cookie('cookie_area', area);}

		if(count_rooms == '1'){}
		else{jQuery.cookie('cookie_count_rooms', count_rooms); }	

		if(area_bathrooms == '3.5'){}
		else{jQuery.cookie('cookie_area_bathrooms', area_bathrooms);}	

		if(san == 'common'){  }
		else{jQuery.cookie('cookie_san', san); }	

		if(type == 'basic'){}
		else{jQuery.cookie('cookie_type', type);}			
		
	
		
		//console.log(jQuery.cookie('cookie_area'));
	
		
		
		
         
        var t_formulas =  _.sortBy( formulas[type], 'max');
        var forumula = false;
         

        for(var i in t_formulas) {
            var f = t_formulas[i];
            if(f['max'] > area) {
                formula = f.formula;
                break;
            }
        }
        if(!formula) {
            throw "Ошибка! Нет формулы под данную площадь.";
        }

        var is_common = false;
        var is_separate = false;
        if(san == 'common') {
            is_common = true;
        } else if(san == 'separate') {
            is_separate = true;
        }
        //((площадь_квартиры-площадь_санузлов)*2470,02705464716 + площадь_санузлов * ((выбран_общий_санузел*21134,2599705666) + (выбран_раздельный_санузел*31441,7646242646)) + 6000 + площадь_квартиры)*1,15
        var replacements = {
            ',': '.',
            'площадь_квартиры': area,
            'площадь_санузлов': area_bathrooms,
            'выбран_общий_санузел': is_common,
            'выбран_раздельный_санузел': is_separate,
        }

        for(var i in replacements) {
            formula = formula.split(i).join(replacements[i]);
        }

        var b_price = new Function('return ' + formula);
        
        this.model.set('price', b_price().toFixed(2));
		
		//дублирование цены в меню
		var zprice = jQuery('.price').text();
		jQuery('.menu-block .btn-order').text(zprice);

    }
});
/*
    Общее представление приложения
*/
var ApplicationView = Backbone.View.extend({
    events: {
        'click .select-design-block .add-item': 'add_room'
    },
    initialize: function() {
        this.$el = jQuery('#application');
        this.$area = this.$el.find('#area_list');
        Backbone.on('rerender_room_types', this.change_rooms, this);
        this.renderAreaFields();
        this.renderDesignType();
        this.renderPriceBlock();
        this.renderSelectBathroom();
        this.renderRooms();
        this.initSkycke();
    },
    initSkycke: function() {
        jQuery('.sticky').each(function() {
           /*var el = $(this);
           var stickyTop = $(this).position().top-jQuery('body').position().top; // returns number
           
           var stickyHeight = $(this).height();
           el.after('<div class="pass" style="display: none">&nbsp;</div>');
           el.next().css('height', el.height());
           var width = el.width();
           $(window).scroll(function(){ // scroll event
               
               var windowTop = $(window).scrollTop(); // returns number

               if (stickyTop < windowTop){
                  el.css({ position: 'fixed', top: 0 }).addClass('sticked');
                  el.next().show();
               }
               else {
                  el.css({'position':'static' }).removeClass('sticked');
                  el.next().hide();
               }
             });*/
        });
    },
    change_rooms: function() {
        var r = parseInt(prepare_number(jQuery('#rooms').val()));
        var l = (c_rooms.length-3) - r;
         
        for(var i = 0; i < l; i++) {
            var rem = c_rooms.last().trigger('remove');
            //c_rooms.remove(c_rooms.last());
        }
        for(var i = l; i < 0; i++) {
            c_rooms.add(new RoomTypeModel());
        }
        jQuery('.room-item:hidden').remove();
        Backbone.trigger('room_render_end');
    },
    /*
     Вывод базовых полей
    */
    renderAreaFields: function() {
        collection.each(function(area){
            var field = new AreaFieldView({model: area});
            this.$area.append(field.render().$el);
        }, this);
    },
    /*
     Вывод блока с ценой
    */
    renderPriceBlock: function() {
        var price = new PriceView({model: new PriceModel()});
        price.render().$el.insertAfter(this.$area);
		
		
		
    },
    /*
     Вывод блока с выбором типа санузла
    */
    renderSelectBathroom: function() {
        var bathroom = jQuery(_.template(jQuery('#t_select_bathroom').html())(url_query.toJSON()));
        bathroom.insertAfter(this.$area)
        Backbone.trigger('recalculate');
    },
    /*
     Вывод комнат
    */
    renderRooms: function() {
        var r = new RoomsTypeListView();
        this.$el.find('.select-design-block').prepend(r.render().$el);
    },
    /*
     Добавление комнаты
    */
    add_room: function() {
        if(this.$el.find('.select-design-block .add-item').hasClass('disabled')) {
            return false;
        }
        c_rooms.add(new RoomTypeModel());
		
		//если существует переменная то применяем цвет 
		if(typeof at !== 'undefined'){
			c_rooms.each(function(item) {
       
	   console.log(item.get('type'));
	   
	   if(item.get('type') == 'room'){
			item.set('color', new ColorModel(current_color_proj[item.get('type')][at]));
			Backbone.trigger('reload_room_type');
			}
			
		});
		}
	
	
		//item.set('color', new ColorModel(current_color_proj[item.get('type')][at-1]));
		jQuery(".rooms .room-item").map(function(i, o) { $(o).addClass("item" + (i + 1)); });


        return false;
    },
    /* 
     Вывод блока с выбором типа дизайна
    */
    renderDesignType: function() {
		
        var design = jQuery(_.template(jQuery('#design-block').html())(url_query.toJSON()));
        design.insertAfter(this.$area);
		
    }
});


// Выбор цвета
jQuery('.style-color').on('click', '.color', function() {
    jQuery('.style-color .color').removeClass('selected');
    jQuery(this).addClass('selected');
    
    var add = -1;
    if(jQuery('#ceiling_cornices').is(':checked')) {
        add += jQuery('.list-colors .color').length;
    }
     console.log(jQuery(this).data('id'), add, (parseInt(jQuery(this).data('id'))) + add);
    sliderModal.goToSlide((parseInt(jQuery(this).data('id'))) + add);
    return false;
});










jQuery('#calc_form').on('click', '.design_item label[for="designer"]', function() {
	
	
	
	
	//var pp;
	if ( jQuery(".list-colorss span").hasClass("selected") ) {
		console.log('---1');
	}
	else{
		jQuery('#c-one').click();
		console.log('+++1');
	}
	
});




jQuery('#calc_form').on('click', '.design_item label[for="individual"]', function() {
	
	//var pp;
	if ( jQuery(".list-colorss span").hasClass("selected") ) {
		console.log('---1');
	}
	else{
		jQuery('#c-one').click();
		console.log('+++1');
	}
	
});



// Сохранение
jQuery('.btn-save').on('click', function() {
	
	console.log(editing_model);
	
    editing_model.set('color', new ColorModel(jQuery('.style-color .color.selected').data('model')));
	
	
    editing_model.set('cornices', jQuery('#ceiling_cornices').is(':checked'));
	
	
	//if (editing_model.get('type')== 'kitchen'){
	//		editing_model.set('d', true);
	//	}
	//	if (editing_model.get('type')== 'corridor'){
	//		editing_model.set('d', true);
	//	}

	
	
	//получаем значение цены для потолочный карниз
	if(editing_model.get('type')== 'bathroom'){
		if(jQuery('#ceiling_cornices').is(':checked')) {
					
				}
	}
	else{
		if(jQuery('#ceiling_cornices').is(':checked')) {
					
		}
		else{
			
		}
	}
	
	
	var arr= [];
	var arr2= [];
	c_rooms.each(function(item) {
		
		
		
		
       
	   
		//item.set('color', new ColorModel(current_color_proj[item.get('type')][2]));
		//item.get('id')
		//console.log(item.get('color'));
		arr.push(item.get('color').get('color').toUpperCase());
		
		arr2.push(item.get('cornices'));
		
		//arr = item.get('color').get('color').toUpperCase();
		
		
		
		
		 Backbone.trigger('reload_room_type');
    });
	
	
		//получаем значение цены для потолочный карниз и проверяем выбран ли
	console.log(arr2);
	if(arr2[1] || arr2[2] || arr2[3] || arr2[4] || arr2[5] || arr2[6]){
			jQuery('#corn_type option[value="true"]').prop('selected', true);
			//alert('===1');
			ceiling_cornices = 490;
					console.log(ceiling_cornices);
		}
		else{
			jQuery('#corn_type option[value="false"]').prop('selected', true);
			//alert('===2');
			ceiling_cornices = 1;
					console.log(ceiling_cornices);
		}
	
	
	
	console.log(arr);
	
	//вывод картинки для списка для дизайнерского
		if(arr[0] == '#FFFFFF'){
			if (editing_model.get('type')== 'bathroom'){
				editing_model.set('d', true);
			}
			else{
				editing_model.set('d', false);
			}
		}
		else if(arr[1] == '#FFF'){
			if (editing_model.get('type')== 'kitchen'){
				editing_model.set('d', true);
			}
			else{
				editing_model.set('d', false);
			}
		}
		else if(arr[2] == '#FFF'){
			
			if (editing_model.get('type')== 'corridor'){
				editing_model.set('d', true);
			}
			else{
				editing_model.set('d', false);
			}
		}
		else{
			editing_model.set('d', false);
		}
		
		
		
		
		
		
		
	
	console.log(arr2);
	
	console.log(arr[0]);
	
	
	//проверка на одинаковость цветов и выбор дизайнерского или индивидуального
	
	if (arr[1] == '#FFF' && arr[2] == '#FFF' && arr[3] == '#FFF' && !arr[4]  ){
		jQuery("input#designer").prop("checked", true);
		console.log('1m');
	}
	else if (arr[1] == '#FFF' && arr[2] == '#FFF' && arr[3] == '#FFF' && arr[4] == '#FFF'  && !arr[5]){
		jQuery("input#designer").prop("checked", true);
		console.log('3m');
	}
	else if (arr[1] == '#FFF' && arr[2] == '#FFF' && arr[3] == '#FFF' && arr[4] == '#FFF' && arr[5] == '#FFF'  && !arr[6]){
		jQuery("input#designer").prop("checked", true);
		console.log('5m');
	}	 
	else if (arr[1] == '#FFF' && arr[2] == '#FFF' && arr[3] == '#FFF' && arr[4] == '#FFF' && arr[5] == '#FFF' && arr[6] == '#FFF'){
		jQuery("input#designer").prop("checked", true);
		console.log('7m');
	}
	
	
	else if (arr[1] == '#FDF6F6' && arr[2] == '#FDF6F6' && arr[3] == '#FDF6F6'  && !arr[4]){
		jQuery("input#designer").prop("checked", true);
	}
	
	else if (arr[1] == '#FDF6F6' && arr[2] == '#FDF6F6' && arr[3] == '#FDF6F6' && arr[4] == '#FDF6F6'  && !arr[5]){
		jQuery("input#designer").prop("checked", true);
	}
	
	else if (arr[1] == '#FDF6F6' && arr[2] == '#FDF6F6' && arr[3] == '#FDF6F6' && arr[4] == '#FDF6F6' && arr[5] == '#FDF6F6'  && !arr[6]){
		jQuery("input#designer").prop("checked", true);
	}
	
	else if (arr[1] == '#FDF6F6' && arr[2] == '#FDF6F6' && arr[3] == '#FDF6F6' && arr[4] == '#FDF6F6' && arr[5] == '#FDF6F6' && arr[6] == '#FDF6F6'){
		jQuery("input#designer").prop("checked", true);
	}
	
	
	else if (arr[1] == '#FBF1D1' && arr[2] == '#FBF1D1' && arr[3] == '#FBF1D1'  && !arr[4]){
		jQuery("input#designer").prop("checked", true);
	}
	
	else if (arr[1] == '#FBF1D1' && arr[2] == '#FBF1D1' && arr[3] == '#FBF1D1' && arr[4] == '#FBF1D1'  && !arr[5]){
		jQuery("input#designer").prop("checked", true);
	}
	
	else if (arr[1] == '#FBF1D1' && arr[2] == '#FBF1D1' && arr[3] == '#FBF1D1' && arr[4] == '#FBF1D1' && arr[5] == '#FBF1D1'  && !arr[6]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#FBF1D1' && arr[2] == '#FBF1D1' && arr[3] == '#FBF1D1' && arr[4] == '#FBF1D1' && arr[5] == '#FBF1D1' && arr[6] == '#FBF1D1'){
		jQuery("input#designer").prop("checked", true);
	}
	
	
	else if (arr[1] == '#F4DFB5' && arr[2] == '#F4DFB5' && arr[3] == '#F4DFB5'  && !arr[4]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#F4DFB5' && arr[2] == '#F4DFB5' && arr[3] == '#F4DFB5' && arr[4] == '#F4DFB5'  && !arr[5]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#F4DFB5' && arr[2] == '#F4DFB5' && arr[3] == '#F4DFB5' && arr[4] == '#F4DFB5' && arr[5] == '#F4DFB5'  && !arr[6]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#F4DFB5' && arr[2] == '#F4DFB5' && arr[3] == '#F4DFB5' && arr[4] == '#F4DFB5' && arr[5] == '#F4DFB5' && arr[6] == '#F4DFB5'){
		jQuery("input#designer").prop("checked", true);
	}
	
	
	else if (arr[1] == '#C7A987' && arr[2] == '#C7A987' && arr[3] == '#C7A987'  && !arr[4] ){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#C7A987' && arr[2] == '#C7A987' && arr[3] == '#C7A987' && arr[4] == '#C7A987'  && !arr[5]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#C7A987' && arr[2] == '#C7A987' && arr[3] == '#C7A987' && arr[4] == '#C7A987' && arr[5] == '#C7A987'  && !arr[6]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#C7A987' && arr[2] == '#C7A987' && arr[3] == '#C7A987' && arr[4] == '#C7A987' && arr[5] == '#C7A987' && arr[6] == '#C7A987'){
		jQuery("input#designer").prop("checked", true);
	}
	
	
	else if (arr[1] == '#B4A7A0' && arr[2] == '#B4A7A0' && arr[3] == '#B4A7A0'  && !arr[4]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#B4A7A0' && arr[2] == '#B4A7A0' && arr[3] == '#B4A7A0' && arr[4] == '#B4A7A0'  && !arr[5]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#B4A7A0' && arr[2] == '#B4A7A0' && arr[3] == '#B4A7A0' && arr[4] == '#B4A7A0' && arr[5] == '#B4A7A0'  && !arr[6]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#B4A7A0' && arr[2] == '#B4A7A0' && arr[3] == '#B4A7A0' && arr[4] == '#B4A7A0' && arr[5] == '#B4A7A0' && arr[6] == '#B4A7A0'){
		jQuery("input#designer").prop("checked", true);
	}
	
	
	else if (arr[1] == '#E1EFBD' && arr[2] == '#E1EFBD' && arr[3] == '#E1EFBD'  && !arr[4]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#E1EFBD' && arr[2] == '#E1EFBD' && arr[3] == '#E1EFBD' && arr[4] == '#E1EFBD'  && !arr[5]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#E1EFBD' && arr[2] == '#E1EFBD' && arr[3] == '#E1EFBD' && arr[4] == '#E1EFBD' && arr[5] == '#E1EFBD'  && !arr[6]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if (arr[1] == '#E1EFBD' && arr[2] == '#E1EFBD' && arr[3] == '#E1EFBD' && arr[4] == '#E1EFBD' && arr[5] == '#E1EFBD' && arr[6] == '#E1EFBD'){
		jQuery("input#designer").prop("checked", true);
	}
	
	
	else if ( arr[1] == '#C8DCE9' && arr[2] == '#C8DCE9' && arr[3] == '#C8DCE9'  && !arr[4]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if ( arr[1] == '#C8DCE9' && arr[2] == '#C8DCE9' && arr[3] == '#C8DCE9' && arr[4] == '#C8DCE9'  && !arr[5]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if ( arr[1] == '#C8DCE9' && arr[2] == '#C8DCE9' && arr[3] == '#C8DCE9' && arr[4] == '#C8DCE9' && arr[5] == '#C8DCE9'  && !arr[6]){
		jQuery("input#designer").prop("checked", true);
	}	
	else if ( arr[1] == '#C8DCE9' && arr[2] == '#C8DCE9' && arr[3] == '#C8DCE9' && arr[4] == '#C8DCE9' && arr[5] == '#C8DCE9' && arr[6] == '#C8DCE9'){
		jQuery("input#designer").prop("checked", true);
	}
	
	
	else{
		jQuery("input#individual").prop("checked", true);
		console.log('else');
	}
	
	
	
	
	//console.log(editing_model.get('color'));
	
	
	//jQuery(".design_item input#individual").attr("checked", "checked");
	//	jQuery(".design_item input#individual").change();
		Backbone.trigger('recalculate');
	
	
	
    Backbone.trigger('reload_room_type');
    jQuery('#modSelectDesign .close').click();
});
 
// При изменении комнат проверяем, если стоит базовый, то нужно изменить на дизайнерский
Backbone.on('change_rooms', function() {
    if(is_process_change) return;
    if(jQuery('input[name="design_type"]:checked').attr('id') == 'basic') {
        c_rooms.each(function(item) {
            console.log(item.get('color').get('color').toUpperCase());
            if(!(['#FFFFFF', 'WHITE', '#FFF'].indexOf(item.get('color').get('color').toUpperCase()) !== -1)) {
                 jQuery('#designer').click();
                 console.log(item.get('color').get('color').toUpperCase());
            }
            
        });
    }
});
// При клике на базовый, если цвета комнат не белые, нужно оповестить пользователя, что при базовом
// все цвета будут белыми.
var is_process_change = false;
jQuery('#calc_form').on('click', '#basic', function() {
    var is_default = true;
    is_process_change = true;
    c_rooms.each(function(item) {
        if(!(['#FFFFFF', 'WHITE', '#FFF'].indexOf(item.get('color').get('color').toUpperCase()) !== -1)) {
           // is_default = false;
			
			//item.set('color', new ColorModel(current_color_proj[item.get('type')][1]));
        }
    });

    if(is_default) {
        if(!confirm(MESS[lang]['basic_set_confirm'])) {
            return false;
			
        }
        c_rooms.each(function(item) { 
		
            item.set('color', new ColorModel(current_color_proj[item.get('type')][0]));
            item.set('cornices', false);
			
			item.set('d', false);
        }); 
		 
        Backbone.trigger('reload_room_type');
    }
	
    is_process_change = false;
});














//выбор цвета!!!!!!!!!!!!!!!!!!!!!!!!

jQuery('#calc_form').on('click', '.list-colorss span', function() {
	//alert('6');
	jQuery('.list-colorss span').removeClass('selected');
		jQuery(this).addClass('selected');
	at = jQuery(this).attr("data-id");
	at = at-1;
    var is_default = true;
    is_process_change = true;
    c_rooms.each(function(item) {
       
	   
		item.set('color', new ColorModel(current_color_proj[item.get('type')][at]));
		
		if(at == 0){
			if (item.get('type')== 'bathroom'){
				item.set('d', true);
			}
			if (item.get('type')== 'kitchen'){
				item.set('d', true);
			}
			if (item.get('type')== 'corridor'){
				item.set('d', true);
			}
		}
		else{
			item.set('d', false);
		}
		
		
		
		
	
	// Выбор отдельного цвета для санузла
	if (item.get('type')== 'bathroom'){
		//console.log(item.get('type'));
		if (at == 0 || at == 7){
			console.log(at);
			//item.set('color', new ColorModel(current_color_proj[item.get('type')][0]));
			
		}
		if (at == 1 || at == 2){
			console.log(at);
			//item.set('color', new ColorModel(current_color_proj[item.get('type')][2]));
			
		}
		if (at == 3 || at == 6){
			console.log(at);
			//item.set('color', new ColorModel(current_color_proj[item.get('type')][3]));
			
		}
		if (at == 4 || at == 5){
			console.log(at);
			//item.set('color', new ColorModel(current_color_proj[item.get('type')][1]));
			
		}
		
	}
		
		
		 Backbone.trigger('reload_room_type');
    });
	
	//item.set('color', new ColorModel(current_color_proj['bathroom'][3]));
	
	//var cols = current_color_proj['bathroom'];
		//console.log(cols);
  
  
  
    is_process_change = false;
});
















// При выборе типа дизайна, пересчитать
jQuery(document).on('click', 'input[name="design_type"]', function() {
    Backbone.trigger('reload_room_type')
    Backbone.trigger('recalculate');
});
// Сохраняем
jQuery('.submit_order').click(function() {
	
	
	c_rooms['pp'] = 'oo';
	
    jQuery('#ser_rooms').val(JSON.stringify(c_rooms.toJSON()));
    jQuery('#calc_form').submit();
    return false;
});




	
jQuery(document).ready(function(){	



//получаем значения с юрл
function getUrlVars()
{
return window.location.href.slice(window.location.href.indexOf('?')).split(/[&?]{1}[\w\d]+=/);
}

//если в юрл указан дизайнерский
var first = getUrlVars()[5];
console.log(first);
if(first == 'designer'){
	setTimeout(function() {
		
	jQuery('#dis').hide();
	jQuery('#c-one').click();	
	}, 100);
}

//если в юрл указан индив
var first = getUrlVars()[5];
console.log(first);
if(first == 'individual'){
	setTimeout(function() {
		
	//jQuery('#dis').hide();
	jQuery('#c-one').click();	
	}, 100);
}




	jQuery(".rooms .room-item").map(function(i, o) { $(o).addClass("item" + (i + 1)); });

	jQuery( "#designer" ).change(function() {
		jQuery('#dis').hide();
	});
	jQuery( "#basic" ).change(function() {
		jQuery('#dis').show();
		jQuery('.list-colorss span').removeClass('selected');
	});
	jQuery( "#individual" ).change(function() {
		jQuery('#dis').show();
		jQuery('.list-colorss span').removeClass('selected');
	});
	
	jQuery('.btn-save').click(function(){
		
	});
	
			
		

		
		//перезапись значений, куки
		console.log(jQuery.cookie('cookie_area'));
		if(jQuery.cookie('cookie_area')){
		jQuery("#area").val(jQuery.cookie('cookie_area'));
		}
		
		if(jQuery.cookie('cookie_count_rooms')){
			setTimeout(function() {	
		jQuery("#rooms").val(jQuery.cookie('cookie_count_rooms'));
		}, 500);
		}
		
		if(jQuery.cookie('cookie_area_bathrooms')){
		jQuery("#area_bathrooms").val(jQuery.cookie('cookie_area_bathrooms'));
		}
		
		
		console.log(jQuery.cookie('cookie_san'));
		
		if(jQuery.cookie('cookie_san')=='separate'){
			console.log(jQuery.cookie('cookie_san'));
		jQuery("#bathrooms_type").val(jQuery.cookie('cookie_san'));
		}
		
		
		if(jQuery.cookie('cookie_type')=='basic'){
		setTimeout(function() {	
		jQuery("input#basic").prop("checked", true);
		Backbone.trigger('recalculate');
			}, 100);
		}
		if(jQuery.cookie('cookie_type')=='designer'){
			setTimeout(function() {	
				jQuery("input#designer").prop("checked", true);
				jQuery('#dis').hide();
				jQuery('#c-one').click();
				Backbone.trigger('recalculate');				
			}, 100);
		}
		if(jQuery.cookie('cookie_type')=='individual'){
			setTimeout(function() {	
				jQuery("input#individual").prop("checked", true);
				Backbone.trigger('recalculate');	
			}, 100);
		}
	
		//Backbone.trigger('recalculate');
		Backbone.trigger('reload_room_type');

	});






$(window).scroll();