$(document).ready(function(){

	//nice select
	$('.select-beauty').niceSelect();
	//nice select-end

	//only integer in input
	 function onlyInteger(a){
	 	$(a).bind("change keyup input click", function() {
	 	    if (this.value.match(/[^\d\.\,]/g)) {
	 	        this.value = this.value.replace(/[^\d\.\,]/g, '');
	 	    }
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
	errorValInput('#s_area_h',1,40,'.s_area_h--error');

	$('#s_area_h, #area_h ').on("change keyup input ", function() {
				var currentVal = $('#s_area_h').val().replace(',','.')*1;
				var sVal = $('#area_h').val().replace(',','.')*1;
				console.log('currentVal',currentVal);
				console.log('sVal',sVal);
	 	     if (currentVal >= sVal && sVal >= 1 && currentVal !='' ) {
	 	         $(this).val(sVal) ;
	 	     		$('.s_area_h--error-squer').show();
	 	     }
	 	     else {
	 				 $('.s_area_h--error-squer').hide();
	 	     }
		});

	//init animate placeholder
	$('.input-animate').each(function(){
		var current = $(this);
		var dataString = "<span class='input-placeholder-val'>"+current.data('input')+"</span>";
		current.parent().append(dataString);
	});

	$('.input-animate').on('input', function (e) {
		$(e.currentTarget).attr('data-empty', !e.currentTarget.value);
	});

	$('.input-placeholder-val').click(function(){
		$(this).parent().find('.input-animate').focus(); //найти Input и повесить focus
	});
	//init animate placeholder end



})