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
        var area = parseFloat(jQuery('#area').val());
        var count_rooms = parseInt(jQuery('#rooms').val());
        var area_bathrooms = parseFloat(jQuery('#area_bathrooms').val());
        var san = jQuery('#bathrooms_type').val();
        var type = url_query.get('design_type');
		
		var corn_type = url_query.get('corn_type');
		
		if(corn_type == 'true'){
			ceiling_cornices = 490;
		}
		else{
			ceiling_cornices = 1;
		}
		
		
		console.log(url_query);
		
        var t_formulas =  _.sortBy( formulas[type], 'max');
		
		//console.log(t_formulas );
        var formula = false;
        
		
		
        for(var i in t_formulas) {
            var f = t_formulas[i];
			
			console.log(i );
			
			
            if(f['max'] > area) {
                formula = f.formula;
				
				console.log(f['max']);
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
        
        var replacements = {
            ',': '.',
            'площадь_квартиры': prepare_number(area),
            'площадь_санузлов': prepare_number(area_bathrooms),
            'выбран_общий_санузел': is_common,
            'выбран_раздельный_санузел': is_separate,
        }

        for(var i in replacements) {
			
			
			//console.log(formula );
			
            formula = formula.split(i).join(replacements[i]);
        }

        var b_price = new Function('return ' + formula);
        basic_price = b_price();
		
			

		
	
		
		
		
        var selected_options = jQuery('#option_list input[type=checkbox].fix_option:checked');
        option_price = 0;
        if(selected_options.length) {
            option_price += _.reduce(selected_options.map(function() { 
                return jQuery(this).data('price'); 
            }), 
            function(a,b) { 
                return a + b 
            });
        }
        var selected_num_options = jQuery('#option_list input[type=checkbox].num_option:checked');
        if(selected_num_options.length) {
            option_price += _.reduce(selected_num_options.map(function() {
                var id = jQuery(this).data('id');
                var num = jQuery('#op' + id + '_num');
                 
				 console.log(num.val());
				 
				// if(num.val()== ''){num.val('1') }
				 
				 
                var p = num.data('unit-price')*prepare_number(num.val());
                return p;
            }), function(a,b) { return a + b; })
        }
         
        this.model.set('price', (basic_price+option_price).toFixed(2));
		
		//var hh = this.model.set('price', (basic_price+option_price).toFixed(2));
		
			//дублирование цены в меню
		var zprice = jQuery('.price').text();
		
		jQuery('.menu-block .btn-order').text(zprice); 
		setTimeout(function() { 
			var zprice = jQuery('.price').text();
			jQuery('.menu-block .btn-order').text(zprice); 
		}, 1000);

    }
});

function init() {


    /*
     Вывод базовых полей
    */
    collection.each(function(area){
            var field = new AreaFieldView({model: area});
            jQuery('#area_list').append(field.render().$el);
        }, this);
    
    /* 
     Вывод опций
    */
    var option_view = new OptionView();
    jQuery('#option_list').append(option_view.render().$el);

    jQuery('#area_list').append(_.template(jQuery('#area-bathrooms-template').html())(url_query.toJSON()));
    /*
     Вывод блока с ценой
    */
    var price = new PriceView({model: new PriceModel()});
    jQuery('#area_list').append(price.render().$el);
    Backbone.trigger('room_render_end');
	
}
// Вызываем пересчет цены при изменении опций
jQuery(document).on('click', '#option_list input[type=checkbox]', function() {
    Backbone.trigger('recalculate');
	
		//дублирование цены в меню
		var zprice = jQuery('.price').text();
		jQuery('.menu-block .btn-order').text(zprice);

});
jQuery(document).on('keyup change', '#option_list input[type=text]', function() {
    jQuery('#op' + jQuery(this).data('id')).prop('checked', true).parent().css('background-position', '0px -199px')
    var $this = jQuery(this);
    var u_price = $this.data('unit-price');
    console.log(u_price);
	if(this.value == ''){
		yy = 1;
	}
	else{
		yy = parseInt(this.value);
	}
    jQuery('.unit_price_' + $this.data('id')).html(print_price(u_price*yy));
	
	if($this.data('id') == 15){
		jQuery('.unit_price_15').html('Указать кол-во окон');
	}
    Backbone.trigger('recalculate');
	
		//дублирование цены в меню
		var zprice = jQuery('.price').text();
		jQuery('.menu-block .btn-order').text(zprice);
	

});
// При изменении площади так же вызываем пересчет цены
jQuery(document).on('change', '#area', function() {
    jQuery('input[data-old-price][data-old-price!=0]').each(function() { 
       var new_price = parseFloat(jQuery(this).data('old-price'))*parseFloat(jQuery('#area').val());
       jQuery(this).data('price', new_price);
       jQuery(this).next().children().html(print_price(new_price));
    });
    Backbone.trigger('recalculate');
		//дублирование цены в меню
		var zprice = jQuery('.price').text();
		jQuery('.menu-block .btn-order').text(zprice);


});
 
init();

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

jQuery('.btn-order').click(send_order);

jQuery('.form-select-design input').keydown(function() {
    jQuery(this).removeClass('error');
})





//alert('ll'); 


$(window).scroll();