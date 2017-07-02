jQuery(document).ready(function(){

	
	c_pol= 0;
	

	
//калькулятор



		
		jQuery(document).on('keyup','#area_h', function(){
			jQuery('input[name="area"]').val(jQuery('input#area_h').val()); 
			fun_c();
            //fun_c1();
		});
		jQuery(document).on('keyup','.input input[name="area"]', function(){
			jQuery('input#area_h').val(jQuery('input[name="area"]').val());
			fun_c();
		});
		
		jQuery(document).on('keyup','#height_h', function(){
			jQuery('input[name="height"]').val(jQuery('input#height_h').val()); 
			fun_c();
		});
		jQuery(document).on('keyup','.input input[name="height"]', function(){
			jQuery('input#height_h').val(jQuery('input[name="height"]').val());
			fun_c();
		});
		
		jQuery(document).on('keyup','#s_area_h', function(){
			jQuery('input[name="s_area"]').val(jQuery('input#s_area_h').val()); 
			fun_c();
		});
		jQuery(document).on('keyup','.input input[name="s_area"]', function(){
			jQuery('input#s_area_h').val(jQuery('input[name="s_area"]').val());
			fun_c();
		});
		
		jQuery("#bathrooms_type_h").change(fu);
		function fu() {
			jQuery('#bathrooms_type').val(jQuery('#bathrooms_type_h').val());
		}
		
		
		
		
		
	//вызываем функцию калькулятора
	jQuery(document).on('keyup','.input input', function(){
	// jQuery("input").keyup(function () {
		area = area.replace(",",".");
		area = area.replace(/\.$/gm, '');
		fun_c();
		
		option1= jQuery('input[name="area"]').val();
		$.cookie('option1', option1);
		
		option2= jQuery('input[name="height"]').val();
		$.cookie('option2', option2);
		option3= jQuery('input[name="s_area"]').val();
		$.cookie('option3', option3);
		option4= jQuery("#bathrooms_type").val();
		$.cookie('option4', option4);
		
		
	}).keyup();
	jQuery("select").change(fun_c);


    //вызываем функцию калькулятора
    jQuery(document).on('keyup','.input #area', function(){
        // jQuery("input").keyup(function () {
        $(this).val().replace(",",".")*1;
        $(this).val().replace(/\.$/gm, '');
    }).keyup();
	
	
	
	
	jQuery(document).on('click','.item .btn-select', function(){
		jQuery('input[name="d1"]').val( jQuery('input[name="area"]').val());
		jQuery('input[name="d2"]').val(jQuery('input[name="height"]').val());
		jQuery('input[name="d3"]').val(jQuery('input[name="s_area"]').val());
		jQuery('input[name="d4"]').val(jQuery("#bathrooms_type").val());
	});
	
	
	coo1 = $.cookie('option1');
	coo2 = $.cookie('option2');
	coo3 = $.cookie('option3');
	coo4 = $.cookie('option4');
	
	//console.log(coo4);
	
	if(coo1 !== null){
		jQuery('input[name="area"]').val(coo1);
	}
	else{
		//jQuery('input[name="area"]').val('25');
	}
	
	if(coo2 !== null){
		jQuery('input[name="height"]').val(coo2);
	}
	else{
		//jQuery('input[name="height"]').val(2.5);
	}
	
	if(coo3 !== null){
		jQuery('input[name="s_area"]').val(coo3);
	}
	else{
		//jQuery('input[name="s_area"]').val(3);
	}
	
	if(coo4 !== null){
		jQuery('#bathrooms_type').val(coo4);
		jQuery("select").change(fun_c);
	}
	else{
		//jQuery('input[name="s_area"]').val(3);
	}
	
	
	
	
	
	
	
	
	
	
	
	fun_c();
	if ($(window).width() <= '420'){
			document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=1, maximum-scale=0.75, user-scalable=no, width=device-width');
		}
});