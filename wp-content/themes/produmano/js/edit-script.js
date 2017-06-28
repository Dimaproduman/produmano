$(document).ready(function(){

	//only integer in input
	 function onlyInteger(a){
	 	$(a).bind("change keyup input click", function() {
	 	    if (this.value.match(/[^0-9]/g)) {
	 	        this.value = this.value.replace(/[^0-9]/g, '');
	 	    }
	 	});
	 }
	onlyInteger(".input--number");
	//only integer in input end

	var errorValInput= function (el,size,errors) {
		$(el).on("change keyup input click", function() {
	 	    if ($(this).val() >= size ) {
	 	    		$(errors).show();
	 	        $(this).val(size) ;
	 	    } else {
	 				$(errors).hide();
	 	    }
	 	    if($(this).val() <= 0){
	 	    	$(this).val('')
	 	    }
		});
	};

	errorValInput('#area_h',500,'.area_h--error');
	errorValInput('#height_h',4,'.height_h--error');
	errorValInput('#s_area_h',40,'.s_area_h--error');

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