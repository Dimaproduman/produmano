$(document).ready(function(){
	//nice select
	$('.select-beauty').niceSelect();
	//nice select-end

	//only integer in input
	 function onlyInteger(a){
   	$(a).bind("change keyup input click", function(e) {
    		var reg = /(\d+[\.\,]?\d?\d?)/;
    			if(this.value.match(reg)){
   	        this.value = this.value.match(reg)[1];
    			}
            else
            	this.value = '';
			//noinspection JSAnnotator,JSAnnotator
   	});
   }

	onlyInteger(".input--number");
	//only integer in input end

	var errorValInput= function (el,minSize,size,errors) {
		$(el).on("change keyup input ", function() {
				var currentVal = $(this).val().replace(',','.')*1;
	 	    if (currentVal > size || currentVal < minSize ) {
	 	        $(this).val('') ;
	 	    		$(errors).show();
	 	    }
	 	    else {
	 				$(errors).hide();
	 	    }
	 	    if(currentVal <= 0){
	 	    	$(this).val('')
	 	    }
		});
	};

	errorValInput('#area_h',1,500,'.area_h--error');
	errorValInput('#height_h',2,4,'.height_h--error');
	errorValInput('#s_area_h',2,40,'.s_area_h--error');

	errorValInput('#area',1,500,'.area--error');
	errorValInput('#height',2,4,'.height--error');
	errorValInput('#s_area',2,40,'.s_area--error');

	var syncSquer = function(elOne,elTwo,message){
		$(elOne).add(elTwo).on("change keyup input ", function() {
				var currentVal = $(elOne).val().replace(',','.')*1;
				var sVal = $(elTwo).val().replace(',','.')*1;
	 	     if (currentVal > sVal && sVal >= 1 && currentVal !='' ) {
	 	         $(this).val(sVal) ;
	 	     		$(message).show();
	 	     }
	 	     else {
	 				 $(message).hide();
	 	     }
		});
	}


	syncSquer('#s_area_h', '#area_h ','.s_area_h--error-squer');
	syncSquer('#s_area', '#area ','.s_area--error-squer');

	//init animate placeholder
	$('.input-animate').each(function(){
		var current = $(this);
		var dataString = "<span class='input-placeholder-val'>"+current.data('input')+"</span>";
		current.parent().append(dataString);
	});

	$('.input-animate').on('input click', function (e) {
		$(e.currentTarget).attr('data-empty', !e.currentTarget.value);
	});

$('.input-placeholder-val').click(function(){
		$(this).parent().find('.input-animate').focus(); //найти Input и повесить focus
	});
	$('.calc-flat').each(function(){
		$(this).on("change keyup input ", function() {
			var subCalc = $(this).data('calc');
			$('.form-order-block .input-animate').each(function(){
				if($(this).data('calc') == subCalc ){
					$(this).click();
				}
			})
		})
	})
})