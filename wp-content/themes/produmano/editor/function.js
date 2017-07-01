jQuery(document).ready(function(){

	
	c_pol= 0;
	

	
//калькулятор
function fun_c() {
		//общая площадь
		area = jQuery("input[name='area']").val();
		if(area==''){
			area ='25';
		} 
		area = area.replace(",",".");
		area = area.replace(/\.$/gm, '');
		//высота
		height = jQuery("input[name='height']").val();
		if(height==''){
			height ='2.5';
		}
		height = height.replace(",",".");
		height = height.replace(/\.$/gm, '');
		//площадь санузла
		s_area = jQuery("input[name='s_area']").val();
		if(s_area==''){
			s_area ='3';
		}
		s_area = s_area.replace(",",".");
		s_area = s_area.replace(/\.$/gm, '');
		//какой санузел выбран
		bathrooms_type = jQuery("#bathrooms_type").val();
		
		//МЧ черновые материал
		mch = 1;
		//материал комнат
		mcom= 1;
		//М сан- цена материалов чистовых для санузла
		msan= 1;
		
		if(area>= 25 & area< 40){
			//МЧ черновые материал
			mch = 4830;
			//материал комнат
			mcom= 2400;
			//М сан- цена материалов чистовых для санузла
			if(bathrooms_type == 'v1'){
				msan= 26930;
			}
			else if(bathrooms_type == 'v2'){
				msan= 36350;
			}
			else{
				msan= 36350;
			}
		}
		if(area>= 40 & area< 60){
			//МЧ черновые материал
			mch = 4715;
			//материал комнат
			mcom= 2450;
			//М сан- цена материалов чистовых для санузла
			if(bathrooms_type == 'v1'){
				msan= 23090;
			}
			else if(bathrooms_type == 'v2'){
				msan= 26030;
			}
			else{
				msan= 26030;
			}
		}
		if(area>= 60 & area < 90){
			//МЧ черновые материал
			mch = 4600;
			//материал комнат
			mcom= 2380;
			//М сан- цена материалов чистовых для санузла
			if(bathrooms_type == 'v1'){
				msan= 25030;
			}
			else if(bathrooms_type == 'v2'){
				msan= 33100;
			}
			else{
				msan= 33100;
			}
		}
		if(area>= 90){
			//МЧ черновые материал
			mch = 4485;
			//материал комнат
			mcom= 2300;
			//М сан- цена материалов чистовых для санузла
			if(bathrooms_type == 'v1'){
				msan= 25930;
			}
			else if(bathrooms_type == 'v2'){
				msan= 36590;
			}
			else{
				msan=36590;
			}
		}
		
		
		
		// Работы по полу (S общ-S сан)*1300+S сан*1800
		rez_pol = (+area - +s_area)*1300 + +s_area*1800;
		//console.log(rez_pol);
		//Работы по потолку	S общ*400
		rez_poto = +area *400;
		//Работы по стенам	((S общ-S сан)*3765+S сан*2730)*H/2,45
		rez_sten = ((+area - +s_area)*3765 + +s_area*2730)* +height / 2.45;
		// Работы электрике	S общ*950
		rez_elec = +area *950;
		// Работы по сантехнике	S общ*600
		rez_sant = +area *600;
		// Общестрой (укрытие пленкой, подъем, уборка и пр)	S общ*300
		rez_ob = +area *300;
		// Черновые материалы с сантехникой и электрикой	S общ*МЧ*H/2,45
		rez_cher =+area * +mch * +height/2.45;
		//Чистовые материалы комнаты	(S общ-S сан)*М комнат*H/2,45
		rez_ches = (+area - +s_area)* +mcom * +height / 2.45;
		//console.log(mcom);
		// Чистовые материалы санузел	S сан*М сан*H/2,45
		rez_san = +s_area * +msan * +height/2.45;
		
		rabot = rez_pol + rez_poto + rez_sten + rez_elec + rez_ob;
		
		
		c_total= +rez_pol + +rez_poto + +rez_sten + +rez_elec + +rez_sant + +rez_ob + +rez_cher + +rez_ches + +rez_san;
		//console.log(c_total);
		
		//скандинавский
		var1 = 18850 +(340* area)+ (850*(+area - +s_area)) +33850 + (700*(3+5)) + (-2500 * s_area * height/2.45) + 5500 +14000 +3550 + c_total;
		
		test = 18850 +(340* area)+ (850*(+area - +s_area)) +33850 + (700*(3+5)) + (-2500 * s_area * height/2.45) + 5500 +14000 +3550;
		//console.log(test);
		
		var2 =(2500*(+area - +s_area)) + 
		18850 +
		(340* area) + 
		900*3*12 +
		2.5 *2800 + 
		height*2.5*2350 +
		30*area+ 
		(1800*(+area - s_area)) 
		+33850 - (1800*(3+5)) 
		+ 12380 +21400 +3550 + c_total;
		
		var3 = 15200  +
		(340* area)+
		6300* 2 + 
		height*2.5*2350 +
		(850*(+area - +s_area)) +
		33850 + (700*(3+5)) + 
		5500 +14000 +3550 + c_total;
		
		
		
		var4 =
		(2500*(+area - +s_area)) + 
		15650 +
		(160* area)+
		height*2.5*2150+
		height*2.5*2150+
		70 * area+
		(1800*(+area - +s_area)) +
		33850 + 
		(-1800*(3+5))+
		5500 +
		14000 +3550 + c_total;
		
		
		var5 = 160* area + 12800 +500 + (750*(+area - +s_area)) +29250 + (850*(3+5)) + 5500 +14000 +3550 + c_total;
		
		var6 = -300* area+ 12800 +
		(160*area)  + (-2500 * s_area * height/2.45) + c_total;
		
		//console.log(var1);
		
		var1 = var1.toFixed(0); //300.23
		var1 = var1.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		var2 = var2.toFixed(0); //300.23
		var2 = var2.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		var3 = var3.toFixed(0); //300.23
		var3 = var3.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		var4 = var4.toFixed(0); //300.23
		var4 = var4.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		var5 = var5.toFixed(0); //300.23
		var5 = var5.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		var6 = var6.toFixed(0); //300.23
		var6 = var6.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		jQuery(".basic1 span").text(var1);
		jQuery(".basic2 span").text(var2);
		jQuery(".basic3 span").text(var3);
		jQuery(".basic4 span").text(var4);
		jQuery(".basic5 span").text(var5);
		jQuery(".basic6 span").text(var6);
		
		jQuery(".ddx2 > span").text(var6+' Р.');
		
		
		rabot = rabot.toFixed(0); //300.23
		rabot = rabot.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		jQuery(".prplus > span").text(rabot);
		
		
		
		option4= jQuery("#bathrooms_type").val();
		$.cookie('option4', option4);
}	


		
		jQuery(document).on('keyup','#area_h', function(){
			jQuery('input[name="area"]').val(jQuery('input#area_h').val()); 
			fun_c();
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