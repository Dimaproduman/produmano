jQuery(document).ready(function(){
	
	var arr = {};
	var myObjects = [];
	
	c_pol= 0;
	c_pol_p = 0;
	c_oboi = 0;
	c_dver = 0;
	c_dver_v = 0;
	c_plin = 0;
	c_poto = 0;
	c_poto_p = 0;
	c_akc1 = 0;
	c_akc2 = 0;
	c_akc3 = 0;
	c_rad = 0;
	c_ing = 0;
	c_ing_r = 0;
	c_poto_s = 0;
	vva1 = 0;
	vva2 = 0;
	vva3 = 0;
	k_poto =0;
	pol_s = 0;
	san_1 =0;
	san_2 =0;
	san_3 =0;
	san_4 =0;
	//c_two = 0;
	
	
	so1 = 0;
	
	
	fun_calc();
	
	
	
	
	

//функция задания порядка вывода изображения на базовую картику
function fun_insimg() {
	//форируем картинку
	
	inf_img ="<img class='abs "+inf_cat+" z"+inf_cat+"z "+inf_class+"' src='"+inf_op1+"'>";
	
	//if(typeof inf_alt == "undefined") { inf_alt = 1;}
	
    //задаем порядок добавления изображения
	//console.log(inf_alt); 
		//пол
		if(inf_class == 'pol'){
			jQuery("#img img:nth-child(2)").replaceWith(inf_img);
			//скрываем плинтус
			jQuery('a[data-id_categ="655"]').hide();
			jQuery('.in1').hide();
			jQuery('a[data-id_categ="655"][data-alt="'+inf_alt+'"]').css('display', 'inline-block');
			//setTimeout(function() { 
			//jQuery('a[data-id_categ="655"][data-alt="'+inf_alt+'"]').click();
			//}, 1000);
			
			//скрываем ванную
			jQuery('a[data-id_categ="866"]').hide();
			//jQuery('.in1').hide();
			jQuery('a[data-id_categ="866"][data-alt="'+inf_alt+'"]').css('display', 'inline-block');
			jQuery('a[data-id_categ="866"][data-alt="'+inf_alt+'"]').click();
					
			
		}//стены
		else if(inf_class == 'sten'){
			jQuery("#img img:nth-child(3)").replaceWith(inf_img);
			//скрываем плинтус
			jQuery('a[data-id_categ="657"]').hide();
			jQuery('.in2').hide();
			jQuery('a[data-id_categ="657"][data-alt="'+inf_alt+'"]').css('display', 'inline-block');
			//jQuery('a[data-id_categ="657"][data-alt="'+inf_alt+'"]').click();
		}	
		//акценты
		else if(inf_class == 'akc'){
			jQuery("#img img:nth-child(4)").replaceWith(inf_img);
		}
		//плинтус
		else if(inf_class == 'plin'){
			jQuery("#img img:nth-child(5)").replaceWith(inf_img);
		}
		//двери
		else if(inf_class == 'dver'){
			jQuery("#img img:nth-child(6)").replaceWith(inf_img);
			//скрываем плинтус
			if(inf_cat==585 || inf_cat==586 || inf_cat==587){
				jQuery('a[data-id_categ="656"]').hide();
				jQuery('.in3').hide();
				jQuery('a[data-id_categ="656"][data-alt="'+inf_alt+'"]').css('display', 'inline-block');
				//jQuery('a[data-id_categ="656"][data-alt="'+inf_alt+'"]').click();
			}
			
			
			
		}
		//инженерия
		else if(inf_class == 'ing'){
			jQuery("#img img:nth-child(7)").replaceWith(inf_img);	
		}
		//инженерия
		else if(inf_class == 'ing_r'){
			jQuery("#img img:nth-child(8)").replaceWith(inf_img);
		}
		//потолок
		else if(inf_class == 'poto'){
			//jQuery('a[data-num="655_1"]').click();
			jQuery("#img img:nth-child(9)").replaceWith(inf_img);
			
			
			if(inf_p == 645){
				jQuery('a[data-id_categ="588"]').click( function(){
					jQuery('a[data-num="590_3"]').click();
				});
			}
			
			if(inf_cat==588 ){
				//jQuery('a[data-num="590_3"]').click();
				//alert('1');
			}
			
		}
		//потолок
		else if(inf_class == 'poto_p'){
			//jQuery('a[data-num="655_1"]').click();
			jQuery("#img img:nth-child(10)").replaceWith(inf_img);
			if(inf_cat==701){
				jQuery('a[data-id_categ="589"]').click();
				//alert('1');
			}
			
		}
		// ++++ опции
		//двери входные
		else if(inf_class == 'dver_v'){
			jQuery("#img img:nth-child(11)").replaceWith(inf_img);
		}							
		//сан1
		else if(inf_class == 'san_1'){
			jQuery("#img img:nth-child(13)").replaceWith(inf_img);
		}							
		//сан2
		else if(inf_class == 'san_2'){
			jQuery("#img img:nth-child(12)").replaceWith(inf_img);
		}
		//сан3
		else if(inf_class == 'san_3'){
			jQuery("#img img:nth-child(14)").replaceWith(inf_img);
		}
		//сан4
		else if(inf_class == 'san_4'){
			jQuery("#img img:nth-child(15)").replaceWith(inf_img);
		}
		//и
		else if(inf_class == 'ing_rr'){
			jQuery("#img img:nth-child(16)").replaceWith(inf_img);
		}
		else if(inf_class == 'meb'){
			jQuery("#img img:nth-child(17)").replaceWith(inf_img);
		}
		
		else{
			//jQuery('#img').append(inf_img);
		}
		
}


//функция сбора данных слева в меню


//функция вывода миниатюр комнаты в меню справа и главной базовой картинки 
// + авто выбор дверей стен пола
function fun_iconright(jsondata) {
		jQuery('#img').html(jsondata.img);
		
		
		
		//пол
		jQuery('#option1').html('');
		//какой выбран пол, для других грузим выбранный 
		fg_pol = $('#menu-l > li> a[id-post="645"]').attr('data-id_categ_pol');
		if(typeof fg_pol !== "undefined") {
			fg_pol = fg_pol.split(';');
			//console.log(fg_pol);
		}
		//console.log(inf_p);
		if(inf_p == 645){
			jQuery('#option1').append(jsondata.pol_op1);
			jQuery('#option1').append(jsondata.pol_op2);
			jQuery('#option1').append(jsondata.pol_op3);
		}
		else{
			if(typeof fg_pol !== "undefined") {
				//console.log(inf_cat_pol);
				jQuery('#option1').append('<span>Вы можете выбрать другой материал пола в разделе гостиная.</span>');
				if(fg_pol[2] == 564){
					jQuery('#option1').append(jsondata.pol_op1);
					//выбираем в другой комнате если не выбрано
					setTimeout(function() {
						acti = jQuery('a[data-id_categ="564"]').hasClass('active');
						acti2 = jQuery('a[data-id_categ="844"]').hasClass('active');
						if(acti || acti2){
						}
						else{
							jQuery('a[data-num="'+fg_pol[0]+'"]').click();
						} 
					}, 50);
				}
				if(fg_pol[2] == 582){
					jQuery('#option1').append(jsondata.pol_op2);
					//выбираем в другой комнате если не выбрано
					setTimeout(function() { 
						acti = jQuery('a[data-id_categ="582"]').hasClass('active');
						acti2 = jQuery('a[data-id_categ="844"]').hasClass('active');
						if(acti || acti2){
						}
						else{
							jQuery('a[data-num="'+fg_pol[0]+'"]').click();
						} 
					}, 50);
				}
				
				// выбирает тот же пол что и в гостинной
				setTimeout(function() { 
						//jQuery('a[data-num="'+fg_pol[0]+'"]').click(); 
				}, 50);
				
			}
			else{
				jQuery('#option1').append('<span>Выберите сначала вид материала в разделе гостиная.</span>');
			}
		}
		jQuery('#option1').append(jsondata.pol_op3);
							
		//плитка
		jQuery('#option8').html('');
		jQuery('#option8').append(jsondata.pli_op1);
		jQuery('#option8').append(jsondata.pli_op2);
		
		//стена
		fg_sten = $('#menu-l > li> a[id-post="645"]').attr('data-id_categ_sten');
		if(typeof fg_sten !== "undefined") {
			fg_sten = fg_sten.split(';');
			//console.log(fg_sten);
		}
		jQuery('#option2').html('');
		if(inf_p == 645){
			jQuery('#option2').append(jsondata.stena_po_op1);
			jQuery('#option2').append(jsondata.ne_sten_op1);
			jQuery('#option2').append(jsondata.im_sten_op1);
			jQuery('#option2').append(jsondata.ant_im_sten_op1);
			jQuery('#option2').append(jsondata.v_sten_op1);
		}
		else{
			if(typeof fg_sten !== "undefined") {
				//console.log(inf_cat_sten);
				
				jQuery('#option2').append('<span>Вы можете выбрать другой материал в разделе гостиная.</span>');
				if(fg_sten[2] == 702){
					
					jQuery('#option2').append(jsondata.stena_po_op1);
					//выбираем в другой комнате если не выбрано
					setTimeout(function() {
						acti = jQuery('a[data-id_categ="702"]').hasClass('active');
						if(acti){
						}
						else{
							jQuery('a[data-num="'+fg_sten[0]+'"]').click();
						} 
					}, 50);
					
					
				}
				if(fg_sten[2] == 651){
					jQuery('#option2').append(jsondata.ne_sten_op1);
					setTimeout(function() {
						acti = jQuery('a[data-id_categ="651"]').hasClass('active');
						if(acti){
						}
						else{
							jQuery('a[data-num="'+fg_sten[0]+'"]').click();
						} 
					}, 50);
				}
				if(fg_sten[2] == 638 || fg_sten[2] == 639 || fg_sten[2] == 640){
					jQuery('#option2').append(jsondata.im_sten_op1);
					//выбираем в другой комнате если не выбрано
					setTimeout(function() {
						acti = jQuery('a[data-id_categ="638"]').hasClass('active');
						acti2 = jQuery('a[data-id_categ="639"]').hasClass('active');
						acti3 = jQuery('a[data-id_categ="640"]').hasClass('active');
						if(acti || acti2 || acti3){
						}
						else{
							jQuery('a[data-num="'+fg_sten[0]+'"]').click();
						} 
					}, 50);
				}
				if(fg_sten[2] == 679 || fg_sten[2] == 680 || fg_sten[2] == 681){
					jQuery('#option2').append(jsondata.ant_im_sten_op1);
					setTimeout(function() {
						acti = jQuery('a[data-id_categ="679"]').hasClass('active');
						acti2 = jQuery('a[data-id_categ="680"]').hasClass('active');
						acti3 = jQuery('a[data-id_categ="681"]').hasClass('active');
						if(acti || acti2 || acti3){
						}
						else{
							jQuery('a[data-num="'+fg_sten[0]+'"]').click();
						} 
					}, 50);
				}
				
				
			}
			else{
				jQuery('#option2').append('<span>Выберите сначала вид материала в разделе гостиная.</span>');
			}
		}
		jQuery('#option2').append(jsondata.v_sten_op1);
		
		//двери
		jQuery('#option3').html('');
		if(inf_p == 645){
			jQuery('#option3').append('<p class="ar arr"><span>Количество дверей во всей квартире</span> <input type="text" class="area_d" name="dv_a"></p>');
			jQuery('#option3').append(jsondata.dver_op1);
			jQuery('#option3').append(jsondata.dver_op2);
			jQuery('#option3').append(jsondata.dver_op3);
			jQuery('#option3').append(jsondata.dver_op4);
		}
		else{
			if(typeof inf_cat_dver !== "undefined") {
				//console.log(inf_cat_dver);
				jQuery('#option3').append('<span>Вы можете выбрать другой вариант межкомнатной двери в разделе гостиная.</span>');
				if(inf_cat_dver == 585){
					jQuery('#option3').append(jsondata.dver_op1);
				}
				if(inf_cat_dver == 586){
					jQuery('#option3').append(jsondata.dver_op2);
				}
				if(inf_cat_dver == 587){
					jQuery('#option3').append(jsondata.dver_op3);
				}

				if(typeof inf_nums !== "undefined") {
					setTimeout(function() { 
						jQuery('a[data-num="'+inf_nums+'"]').click();
						
						$('a[data-id_categ="'+inf_cat_dver+'"]').css("display","none");
						$('a[data-num="'+inf_nums+'"]').css("display","inline-block");
						//console.log(inf_nums);
					}, 50);
				}
			}
			else{
				jQuery('#option3').append('<span>Выберите сначала вид двери в разделе гостиная.</span>');
			}
			//if(typeof inf_nums !== "undefined") {
			//jQuery('a[data-num="'+inf_nums+'"]').click();
			
		}
		jQuery('#option3').append(jsondata.dver_op4);
				
		
		
		
		
		
		//принтус
		fg_plin= $('#menu-l > li> a[id-post="645"]').attr('data-id_categ_plin');
		if(typeof fg_plin !== "undefined") {
			fg_plin = fg_plin.split(';');
			//console.log(fg_sten);
		}
		jQuery('#option7').html('');
		if(inf_p == 645){
		
		jQuery('#option7').append(jsondata.plin_op1);
		jQuery('#option7').append('<p class="in1">Выберите сначала пол</p>');
		jQuery('#option7').append(jsondata.plin_op2);
		jQuery('#option7').append('<p class="in2">Выберите сначала двери</p>');
		jQuery('#option7').append(jsondata.plin_op3);
		jQuery('#option7').append('<p class="in2">Выберите сначала стену</p>');
		jQuery('#option7').append(jsondata.plin_op4);
		}
		else{
			if(typeof fg_plin !== "undefined") {
				if(fg_plin[2] == 655){
					//setTimeout(function() { 
			//jQuery('a[data-id_categ="655"][data-alt="'+inf_alt+'"]').click();
			//}, 1000);
					jQuery('#option7').append(jsondata.plin_op1);
					
					jQuery('#option7').append('<p class="in1">Выберите сначала пол</p>');
				}
				if(fg_plin[2]== 656){
					jQuery('#option7').append(jsondata.plin_op2);
					jQuery('#option7').append('<p class="in2">Выберите сначала двери</p>');
				}
				if(fg_plin[2] == 657){
					jQuery('#option7').append(jsondata.plin_op3);
					jQuery('#option7').append('<p class="in2">Выберите сначала стену</p>');
				}
				if(fg_plin[2] == 658){
					jQuery('#option7').append(jsondata.plin_op4);
					jQuery('#option7').append('<p class="in2">Выберите сначала стену</p>');
				}
				
				// выбирает тот же плин что и в гостинной
				setTimeout(function() { 
						jQuery('a[data-num="'+fg_plin[0]+'"]').click(); 
				}, 50);

			}
			
		}
		
		
		
		
		//потолок
		fg_poto= $('#menu-l > li> a[id-post="645"]').attr('data-id_categ_poto');
		if(typeof fg_poto !== "undefined") {
			fg_poto = fg_poto.split(';');
			//console.log(fg_sten);
		}
		jQuery('#option4').html('');
		if(inf_p == 645){
			
			jQuery('#option4').append(jsondata.potol_op2);
			jQuery('#option4').append(jsondata.potol_op3);
			jQuery('#option4').append(jsondata.potol_op4);
			jQuery('#option4').append(jsondata.potol_op1);
		}
		else{
			if(typeof fg_poto !== "undefined") {
				//console.log(inf_cat_poto);
				jQuery('#option4').append('<span>Вы можете выбрать другой материал потолка в разделе гостиная.</span>');
				
				if(fg_poto[2] == 589){
					jQuery('#option4').append(jsondata.potol_op2);
					//jQuery('#option4').append(jsondata.potol_op5);
					if(typeof inf_nump !== "undefined") {
						setTimeout(function() { 
							jQuery('a[data-num="'+inf_nump+'"]').click();
							//console.log(inf_nump);
							$('a[data-id_categ="'+inf_cat_poto+'"]').css("display","none");
							$('a[data-num="'+inf_nump+'"]').css("display","inline-block");
						}, 50);
					}
					jQuery('#option4').append(jsondata.potol_op3);
				}
				
				if(fg_poto[2] == 701){
					
					
					
					jQuery('#option4').append(jsondata.potol_op2);
					//jQuery('#option4').append(jsondata.potol_op5);
					jQuery('#option4').append(jsondata.potol_op3);
				}
				
				
				if(fg_poto[2] == 588){
					jQuery('#option4').append(jsondata.potol_op1);
					if(typeof inf_nump !== "undefined") {
						setTimeout(function() { 
							jQuery('a[data-num="'+inf_nump+'"]').click();
							//console.log(inf_nump);
							//alert('ooo');
							//$('a[data-id_categ="'+inf_cat_poto+'"]').css("display","none");
							//$('a[data-num="'+inf_nump+'"]').css("display","inline-block");
						}, 50);
					}
				}
				
				
				jQuery('#option4').append(jsondata.potol_op4);
				jQuery('#option4').append(jsondata.potol_op5);
			}
			else{
				jQuery('#option4').append('<span>Выберите сначала материал потолка в разделе гостиная.</span>');
			}
			//jQuery('a[data-num="'+inf_nump+'"]').click();
			
		}
		
		jQuery('#option4').append(jsondata.potol_op6);
		
		//console.log(jsondata.akc_op6);
		//акценты
		jQuery('#option5').html('');
		jQuery('#option5').append(jsondata.akc_op6);
		jQuery('#option5').append(jsondata.akc_op1);
		jQuery('#option5').append(jsondata.akc_op2);
		jQuery('#option5').append(jsondata.akc_op3);
		jQuery('#option5').append(jsondata.akc_op7);
		jQuery('#option5').append(jsondata.akc_op4);
		jQuery('#option5').append(jsondata.akc_op5);
		
		//сантехника
		jQuery('#option9').html('');
		jQuery('#option9').append(jsondata.san_op1);
		jQuery('#option9').append(jsondata.san_op2);
		jQuery('#option9').append(jsondata.san_op3);
		jQuery('#option9').append(jsondata.san_op4);
		
		//инженерия
		jQuery('#option6').html('');
		fg_r = $('#menu-l > li> a[id-post="645"]').attr('data-id_categ_ing_r');
		if(typeof fg_r !== "undefined") {
			fg_r = fg_r.split(';');
			//console.log(fg_pol);
		}
		//console.log(inf_p);
		if(inf_p == 645){
			jQuery('#option6').append(jsondata.ingen_op1);
			jQuery('#option6').append(jsondata.ingen_op3);
		}
		else{
			if(typeof fg_r !== "undefined") {
				//console.log(inf_cat_pol);
				jQuery('#option6').append('<span>Вы можете выбрать другие розетки в разделе гостиная.</span>');
				if(fg_r[2] == 596){
				jQuery('#option6').append(jsondata.ingen_op1);
				}
				if(fg_r[2] == 835){
					//console.log(jsondata.ingen_op3);
				jQuery('#option6').append(jsondata.ingen_op3);
				}
			}
			else{
				jQuery('#option6').append('<span>Выберите сначала розетки в разделе гостиная.</span>');
			}
		}
		
		jQuery('#option6').append(jsondata.ingen_op2);
		jQuery('#option6').append(jsondata.ingen_op4);
		jQuery('#option6').append(jsondata.ingen_op5);
		if(inf_p != 645){
			if(typeof inf_cat_ing !== "undefined") {
				if(typeof inf_numi !== "undefined") {
						setTimeout(function() { 
							jQuery('a[data-num="'+inf_numi+'"]').click();
							
							$('a[data-id_categ="'+inf_cat_ing+'"]').css("display","none");
							$('a[data-num="'+inf_numi+'"]').css("display","inline-block");
							//console.log(inf_numi);
						}, 50);
					}
				if(typeof inf_numr !== "undefined") {
						setTimeout(function() { 
							//jQuery('a[data-num="'+inf_numr+'"]').click();
							
							//$('a[data-id_categ="'+inf_cat_ing+'"]').css("display","none");
							//$('a[data-num="'+inf_numr+'"]').css("display","inline-block");
							//console.log(inf_numr);
						}, 50);
				}
			}
			
			
		}
		//мебель
		jQuery('#option10').html('');
		jQuery('#option10').append(jsondata.meb);
		
		
}

//функция создания одной общей картинки 
function fun_createimg() {
	//создание одной общей картинки
	
	im = jQuery('#img').attr("id-i");
	title = jQuery('#menu-l > li > a[id-post="'+im+'"]').text();
	//console.log(title);
	
	if(!$('#c-img img#'+im).length > 0 ){
		$('#c-img').append('<img title="'+title+'" id="'+im+'"/>');
	}

	var CombineImages = function(img1,  callback) {
	var $canvas = $('<canvas/>');
	var ctx = $canvas[0].getContext('2d');
	var img = new Image();
	//img.setAttribute('crossOrigin', 'anonymous');
	var border = '/wp-content/uploads/2017/01/p3.png';

	$canvas[0].width = 800;
	$canvas[0].height = 600;

	$('#img img').each(function(){
		ctx.drawImage(this, 0, 0);
	});

	img.onload = function () {
	ctx.drawImage(img, 0, 0);
	callback($canvas);
	};
	img.src = border;
	};
	CombineImages('',  function($canvas) {
			  ExtCanvas = $canvas;
			 
			  //$('#c-img #'+im)[0].setAttribute('crossOrigin', 'anonymous');
			 
			  UserAvatar = ExtCanvas[0].toDataURL('image/jpeg');
			  $('#c-img #'+im)[0].src = UserAvatar;
			  
			  //console.log(ExtCanvas[0]);
			  //вывод картинки в img
			  
			  
			  //$('#c-img #'+im)[0].title = UserAvatar;
	});
}


//вставка значений в массив
function fun_clas(clas, cl) {
	
	
		clas = window[clas];
		clas = clas.split(';');
		//window[inf_cat_pol] = clas[3];
		//console.log(clas);
		
		myObjects.push({
						inf_num: clas[0],
						inf_op1: clas[1],
						inf_cat: clas[2],
						inf_cat_cl: clas[2],
						inf_alt: clas[3],
						inf_class: cl,
						inf_caption: clas[4],
						inf_pic: clas[5],
						inf_title: clas[6],
					});
					clas ='';
	}

	
	
	
	
	
	
	
	//вызываем функцию калькулятора
	jQuery(document).on('keyup','.input input', function(){
	// jQuery("input").keyup(function () {
		fun_calc();
		//console.log(c_total);
		option1= jQuery('input[name="area"]').val();
		$.cookie('option1', option1);
		option2= jQuery('input[name="height"]').val();
		$.cookie('option2', option2);
		option3= jQuery('input[name="s_area"]').val();
		$.cookie('option3', option3);
		//option4= jQuery('select[name="bathrooms_type"]').change();
		//$.cookie('option4', option4);
	}).keyup();
	jQuery("select").change(fun_calc);
	
	
	jQuery(document).on('keyup','input[name="akc_a"]', function(){
	$('input[name="akc_a"]').val($(this).val());
	//запись периметра
	inf_akc = jQuery('input[name="akc_a"]').val();
	inf_akc = inf_akc.replace(",",".");
	jQuery('#menu-l > li >a.active').attr("data-akc", inf_akc);
	//jQuery('').attr("data-caption");
	fun_calc();
	}).keyup();
	
	jQuery(document).on('keyup','input[name="potol_op4"]', function(){		
	$('input[name="potol_op4"]').val($(this).val());
	//запись периметра
	inf_potol = jQuery('input[name="potol_op4"]').val();
	inf_potol = inf_potol.replace(",",".");
	jQuery('#menu-l > li >a.active').attr("data-potol", inf_potol);
	//jQuery('').attr("data-caption");
	fun_calc();
	}).keyup();
	
	jQuery(document).on('keyup','input[name="pol_op3"]', function(){		
	$('input[name="pol_op3"]').val($(this).val());
	//запись периметра
	inf_potol = jQuery('input[name="pol_op3"]').val();
	inf_potol = inf_potol.replace(",",".");
	jQuery('#menu-l > li >a.active').attr("data-pol", inf_potol);
	//jQuery('').attr("data-caption");
	fun_calc();
	}).keyup();
	
	jQuery(document).on('keyup','input[name="dv_a"]', function(){		
	$('input[name="dv_a"]').val($(this).val());
	//запись периметра
	inf_dv = jQuery('input[name="dv_a"]').val();
	inf_dv = inf_dv.replace(",",".");
	jQuery('#menu-l > li> a[id-post="645"]').attr("data-dver", inf_dv);
	//jQuery('').attr("data-caption");
	fun_calc();
	}).keyup();
	
	
	
	jQuery('.input input, .ar input').keypress(function(e) {
		if (!(e.which==8 || e.which==44 ||e.which==45 ||e.which==46 ||(e.which>47 && e.which<58))) return false;
	});
	jQuery(document).on('keypress','.ar input, .checkbox input', function(e){	
	//jQuery('.ar input').keypress(function(e) {
		if (!(e.which==8 || e.which==44 ||e.which==45 ||e.which==46 ||(e.which>47 && e.which<58))) return false;
	});
	
	jQuery(document).on('click','.field_o input', function(){
		fun_calc();
	});
	jQuery(document).on('keyup','.i_option', function(){
	// jQuery("input").keyup(function () {
		fun_calc();
		//console.log(c_total);
		
	}).keyup();
	
	
	
	
	
	
	
//По нажатию на + жлбавляем комнату
jQuery(document).on('click','ul.dropdown-m > ul> li', function(){
	ff = jQuery(this);
	//console.log(ff);
	jQuery(this).addClass('visable');
	jQuery('#menu-l > li:nth-last-child(2)').after(jQuery(ff));

});
//По нажатию на х перемещаем обратно комнату
jQuery(document).on('click','#menu-l > li.clos span', function(){
	gh = jQuery(this).attr('class');
	jQuery(this).parent().removeClass('visable');
	
	if(gh == 's1' || gh == 's2' || gh == 's3'){
		$('ul.ss li:nth-child(1)').before( $('li.clos.'+gh) );
	}
	else if(gh == 'd1' || gh == 'd2' || gh == 'd3'){
		$('ul.dd li:nth-child(1)').before( $('li.clos.'+gh) );
	}
	else if(gh == 'k1' || gh == 'k2' || gh == 'k3'){
		$('ul.kk li:nth-child(1)').before( $('li.clos.'+gh) );
	}
	


});
	

  

ck = 0;
jQuery("#yes").on("click", function() {
	ck= 1;
	$('a[id-category='+pp+']').click();
	console.log(pp);
});

jQuery("#no").on("click", function() {
	ck= 0;
	console.log('n');
});

//ck = 0;





//Получаем значение категории
jQuery("#menu-ed > li").on("click", function() {
	
	if ($('.accordion-container').is(':visible')) {
		$('#modv').modal('show');
	}
	else{
		ck = 1;
	}
	
	
	pp = $(this).children('a').attr('id-category');
	
 	
	//ck = 1;//!!!!!!!!!!!!!!!!!!!!!!
	
	if(ck== 1){
	ck = 0;
	jQuery('#menu-ed li').removeClass('active');
	jQuery(this).addClass('active');
	
	
	$(".accordion-container").css("display","none");
	$("#edit_r").css("display","block");
	if(pp=='19'){
		$(".accordion-container").css("display","block");
		$("#edit_r").css("display","none");
	}
	
	nn1 = $(this).children("span.645").html();
	nn2 = $(this).children("span.567").html();
	nn3 = $(this).children("span.559").html();
	nn4 = $(this).children("span.915").html();
	nn5 = $(this).children("span.569").html();
	nn6 = $(this).children("span.570").html();
	nn7 = $(this).children("span.568").html();
	nn8 = $(this).children("span.1138").html();
	nn9 = $(this).children("span.1139").html();
	nn10 = $(this).children("span.850").html();
	nn11 = $(this).children("span.1134").html();
	nn12 = $(this).children("span.1135").html();
	nn13 = $(this).children("span.851").html();
	nn14 = $(this).children("span.1136").html();
	nn15 = $(this).children("span.1137").html();
	
	
	//console.log(nn);
	//jQuery('#menu-l > li> a[id-post="645"]').click();
	$('#menu-l  li a[id-post="645"]').replaceWith(nn1);
$('#menu-l  li a[id-post="567"]').replaceWith(nn2);
	$('#menu-l  li a[id-post="559"]').replaceWith(nn3);
	$('#menu-l  li a[id-post="915"]').replaceWith(nn4);
	$('#menu-l  li a[id-post="569"]').replaceWith(nn5);
	$('#menu-l  li a[id-post="570"]').replaceWith(nn6);
	$('#menu-l  li a[id-post="568"]').replaceWith(nn7);
	$('#menu-l  li a[id-post="1138"]').replaceWith(nn8);
	$('#menu-l  li a[id-post="1139"]').replaceWith(nn9);
	$('#menu-l  li a[id-post="850"]').replaceWith(nn10);
	$('#menu-l  li a[id-post="1134"]').replaceWith(nn11);
	$('#menu-l  li a[id-post="1135"]').replaceWith(nn12);
	$('#menu-l  li a[id-post="851"]').replaceWith(nn13);
	$('#menu-l  li a[id-post="1136"]').replaceWith(nn14);
	$('#menu-l  li a[id-post="1137"]').replaceWith(nn15);
	if(typeof inf_p !== "undefined") {
		jQuery('#menu-l > li> a[id-post="'+inf_p+'"]').click(); 
	}
	else{
	jQuery('#menu-l > li> a[id-post="645"]').click();
	}
	
		//удалить лишнее
		
	setTimeout(function(){
		$('#undefined').remove();
			 fun_createimg_e('1', '645');
		},2000);
	setTimeout(function(){
			 fun_createimg_e('2', '567');
		},3000);
setTimeout(function(){
			 fun_createimg_e('3', '559');
		},4000);
setTimeout(function(){
			 fun_createimg_e('4', '915');
		},5000);		

	}
});





//получить значения поста
jQuery(document).on('click','#menu-l > li.menu-post > a', function(){
	
	
	
	myObjects = [];
	fun_createimg();
	
    jQuery('#menu-l li a').removeClass('active');
	jQuery(this).addClass('active');
	inf_p = jQuery(this).attr("id-post");
	
	//если выбран санузел
	if(inf_p== 569 || inf_p==570 || inf_p==915){
		$(".set").css("display","none");
		$(".set.san").css("display","block");
		$(".set.set5").css("display","block");
		$(".set.set7").css("display","block");
	}
	else{
		
		$(".set").css("display","block");
		$(".set.san").css("display","none");
		if(inf_p== 559){
			$(".set.set6").css("display","none");
		}
	}
	
	
	
	
	//добавляем значение поста в основу блока картинок
	jQuery('#img').attr("id-i", inf_p);	
	
	
	//считываем слева данные если есть
	categ_pol = jQuery(this).attr("data-id_categ_pol");	
	categ_sten = jQuery(this).attr("data-id_categ_sten");
	categ_dver = jQuery(this).attr("data-id_categ_dver");
	categ_dver_v = jQuery(this).attr("data-id_categ_dver_v");
	categ_plin = jQuery(this).attr("data-id_categ_plin");
	categ_poto = jQuery(this).attr("data-id_categ_poto");
	categ_poto_p = jQuery(this).attr("data-id_categ_poto_p");
	categ_akc = jQuery(this).attr("data-id_categ_akc");
	categ_san_1 = jQuery(this).attr("data-id_categ_san_1");
	categ_san_2 = jQuery(this).attr("data-id_categ_san_2");
	categ_san_3 = jQuery(this).attr("data-id_categ_san_3");
	categ_san_4 = jQuery(this).attr("data-id_categ_san_4");
	categ_ing_r = jQuery(this).attr("data-id_categ_ing_r");
	categ_ing_rr = jQuery(this).attr("data-id_categ_ing_rr");
	categ_ing = jQuery(this).attr("data-id_categ_ing");
	categ_meb = jQuery(this).attr("data-id_categ_meb"); 
	
	
	
	//добавление данных в масиив
	
	if(categ_pol){
		fun_clas('categ_pol', 'pol');
	}
	if(categ_sten){
		fun_clas('categ_sten', 'sten');
	}
	if(categ_dver){
		fun_clas('categ_dver', 'dver');
	}
	if(categ_dver_v){
		fun_clas('categ_dver_v', 'dver_v');
	}
	if(categ_plin){
		fun_clas('categ_plin', 'plin');
	}
	if(categ_poto){
		fun_clas('categ_poto', 'poto');
	}
	if(categ_poto_p){
		fun_clas('categ_poto_p', 'poto_p');
	}
	if(categ_akc){
		fun_clas('categ_akc', 'akc');
	}
	if(categ_san_1){
		fun_clas('categ_san_1', 'san_1');
	}
	if(categ_san_2){
		fun_clas('categ_san_2', 'san_2');
	}
	if(categ_san_3){
		fun_clas('categ_san_3', 'san_3');
	}
	if(categ_san_4){
		fun_clas('categ_san_4', 'san_4');
	}
	if(categ_ing_r){
		fun_clas('categ_ing_r', 'ing_r');
	}
	if(categ_ing_rr){
		fun_clas('categ_ing_rr', 'ing_rr');
	}
	if(categ_ing){
	//if(	typeof categ_ing !== "undefined"){
		//console.log(categ_ing);
		fun_clas('categ_ing', 'ing');
	}
	if(categ_meb){
		fun_clas('categ_meb', 'meb');
	}
	
	
	//если были выбраны ранее варианты (проверка по полу)
	if(categ_pol){
		//console.log(inf_p);
		//датчик загрузки
						jQuery('#foo').addClass('active');
		jQuery.ajax({
			dataType: 'json',
			type: 'POST',
			url: '/wp-content/themes/produmano/ajax_result.php',
			data: {'post':inf_p},
			response:'text',
			complete: function() {
				// деактивация индикатора
				jQuery('#foo').removeClass('active');
				
				zn_p = $('#menu-l > li> a[id-post="645"]').attr('data-id_categ_poto');
					zn_p = zn_p.split(';');
					//console.log(fg );
					//zn_p[0];
				
				jQuery(function(){
					jQuery('.op li a').removeClass('active');
					jQuery('.ba > li').removeClass('active');
					//console.log(myObjects);
					jQuery.each(myObjects, function(){
						inf_op1 = this.inf_op1;
						inf_num = this.inf_num;
						//inf_nums = this.inf_num;
						//inf_nump = this.inf_num;
						inf_nump = zn_p[0];
						inf_class = this.inf_class;
						inf_cat = this.inf_cat;
						inf_cat_cl = this.inf_cat_cl;
						inf_alt = this.inf_alt;
						inf_caption = this.inf_caption;
						inf_pic = this.inf_pic;
						inf_title = this.inf_title;
						 
						//делаем активным выбранное и скрываем не выбранное
						//console.log(inf_cat);
						
						//jQuery('.ba > li[data-id_categ="'+inf_cat+'"]').removeClass('active');
						jQuery('.ba > li[data-id_categ="'+inf_cat+'"]').addClass('active');
						jQuery('.op li a[data-num="'+inf_num+'"]').addClass('active');
						//замена имени
						if(inf_title == 'undefined' || inf_title == undefined){
							inf_title = '';
						}
						jQuery(".name_o"+inf_cat+" p.de").replaceWith('<p class="de">'+inf_title+'</p>');
						//console.log(inf_p);
						if(inf_p != 645){
							//jQuery('.set1 .tcontent >.op >li >a[data-id_categ="'+inf_cat+'"]').hide();
							jQuery('.set2 .tcontent >.op >li >a[data-id_categ="'+inf_cat+'"]').hide();
							jQuery('.set3 .tcontent >.op >li >a[data-id_categ="'+inf_cat+'"]').hide();
							//jQuery('.set5 .tcontent >.op >li >a[data-id_categ="'+inf_cat+'"]').hide();
							jQuery('.set7 .tcontent >.op >li >a[data-id_categ="'+inf_cat+'"]').hide();
							jQuery('a.active').show();
						}
						
															
						//датчик загрузки
						jQuery('#foo').addClass('active');

						
						
						//!!! функция выводим изображения
						fun_insimg();
						fun_calc();
						
						fun_recal ();
						
						//датчик загрузки
						jQuery('#img img').load(function() {
							jQuery('#foo').removeClass('active');
					
						});
					});
				}); 
		
		
			},
			success: function(jsondata){
				
				//console.log(myObjects);
				//передача выбранных 
				if(typeof inf_cat_pol== "undefined") {
					inf_cat_pol= myObjects[0]['inf_cat_cl'];
				}
				if(typeof inf_cat_sten== "undefined") {
					inf_cat_sten = myObjects[1]['inf_cat_cl'];
				}
				if(typeof inf_cat_dver == "undefined") {	
					inf_cat_dver = myObjects[2]['inf_cat_cl'];
					//console.log(inf_cat_dver);
				}
				if(typeof inf_cat_poto== "undefined") {
					inf_cat_poto = myObjects[4]['inf_cat_cl'];
				}
				if(typeof inf_cat_ing== "undefined") {
					inf_cat_ing = myObjects[6]['inf_cat_cl'];
				}
				
				fun_iconright(jsondata);
				//полоса на раздельный санузел
				if(inf_p == 569){
					jQuery("#img img:nth-child(17)").replaceWith('<img class="abs lin" src="/wp-content/uploads/2017/01/sanuzel-razdel-ny-j.png">');
				}
				
				if(typeof ak == "undefined"){
									ak = 1; 
								}
				if(typeof po == "undefined"){
									 po =1;
								}
				if(typeof poll == "undefined"){
									 poll =1;
								}
				if(typeof dv == "undefined"){
									 dv =1;
								}				
								//console.log(ak);
				jQuery('input[name="akc_a"]').val(ak);
				jQuery('input[name="potol_op4"]').val(po);
				jQuery('input[name="pol_op3"]').val(poll);
				jQuery('input[name="dv_a"]').val(dv);
				
	jQuery('#foo').addClass('active');
				
			}
		});
	}

	else{
		//console.log(inf_p);
		//датчик загрузки
						jQuery('#foo').addClass('active');
		jQuery.ajax({
			dataType: 'json',
			type: 'POST',
			url: '/wp-content/themes/produmano/ajax_result.php',
			data: {'post':inf_p},
			response:'text',
			complete: function() {
				// деактивация индикатора
				jQuery('#foo').removeClass('active');
			},
			success: function(jsondata){
				
								fun_iconright(jsondata);
								
								//полоса на раздельный санузел
								if(inf_p == 569){
									jQuery("#img img:nth-child(16)").replaceWith('<img class="abs lin" src="/wp-content/uploads/2017/01/sanuzel-razdel-ny-j.png">');
								}
								if(ak == '' || po==''){
									ak = 1; po =1;
								}
								jQuery('input[name="akc_a"]').val(ak);
								jQuery('input[name="potol_op4"]').val(po);
								jQuery('input[name="pol_op3"]').val(poll);
								jQuery('input[name="dv_a"]').val(dv);
								jQuery('#foo').addClass('active');
								
								//jQuery('a[data-num="564_3"]').click();
								//jQuery('a[data-num="702_2"]').click();
								
							} 
		});
	}
	//запись периметра
	poll = jQuery(this).attr("data-pol");
	ak = jQuery(this).attr("data-akc");
	po = jQuery(this).attr("data-potol");
	dv = jQuery(this).attr("data-dver");
	
});





//показать варианты цветов
jQuery(document).on('click','.ba li', function(){
	//делаем активным выбранное
    jQuery('.ba li').removeClass('active');
	jQuery(this).addClass('active');
	
	//jQuery(this).children('ul.op > li > a').first().click();
	//jQuery('.ba li.active ul li a').click();
});




//получить значения параметров поста
jQuery(document).on('click','.op li a', function(){
	inf_op1 = jQuery(this).attr("data-img");
	inf_cat = jQuery(this).attr("data-id_categ");
	inf_id = jQuery(this).attr("data-id_post");
	inf_class = jQuery(this).attr("data-class");
	inf_num = jQuery(this).attr("data-num");
	name_o = jQuery(this).attr("data-title");
	inf_s = jQuery(this).attr("data-s");
	inf_alt = jQuery(this).attr("data-alt");
	inf_caption = jQuery(this).attr("data-caption");
	name_pic= jQuery(this).attr("data-pic");
	inf_akc = jQuery('input[name="akc_a"]').val();
	inf_o =[];
	
	
	//запоминаем выбраный тип что бы передать в другие комнаты
	if(inf_id == 645){
		window["inf_cat_"+inf_class] = inf_cat;
		if(inf_class == 'dver'){
			inf_nums = inf_num;
		}
		if(inf_class == 'poto'){
			//console.log(inf_num);
			inf_nump = inf_num;
		}
		if(inf_class == 'ing'){
			inf_numi = inf_num;
		}
		if(inf_class == 'ing_r'){
			inf_numr = inf_num;
		}
		
	
		//передаем парамерты в меню слева
		//jQuery('#menu-l li a[id-post="'+inf_id+'"]').attr("data-option_"+inf_class, inf_num+';'+inf_op1+';'+inf_cat+';'+inf_alt+';'+inf_caption);
	
	
	}
	//console.log($(window).width());
	
	
	if ($(window).width() <= '520'){
		//alert('r');
				$("html, body").animate({ scrollTop: 250 }, 600);	
} 
	
	
	//передаем парамерты в меню слева
	jQuery('#menu-l li a[id-post="'+inf_id+'"]').attr("data-id_categ_"+inf_class, inf_num+';'+inf_op1+';'+inf_cat+';'+inf_alt+';'+inf_caption+';'+name_pic+';'+name_o);
	
	//if(inf_class == 'akc'){
	//jQuery('#menu-l li a[id-post="'+inf_id+'"]').attr("data-id_akc", inf_cat);
	//}
	
	
	//jQuery('#menu-l li a[id-post="'+inf_id+'"]').attr(inf_class, inf_alt);
	
	//пишем в куки
	//ll = jQuery('#menu-l li a[id-post="'+inf_id+'"]');
	//ll = ll[0].toString();
	
	//jQuery.cookie('cookie_id_'+inf_id, ll);
	//console.log(ll);
	
	//ss = jQuery.cookie('cookie_id_645');
	//console.log(inf_class);

	
	
	//делаем активним выбранную опцию
	hh = jQuery(this).closest('.tcontent').attr('id');
	
	jQuery('#'+hh+' ul li a[data-class="'+inf_class+'"]').parent('li').removeClass('active');
	jQuery('#'+hh+' ul li a[data-class="'+inf_class+'"]').removeClass('active');
	//jQuery('.tcontent ul li a[data-class="'+inf_class+'"]').removeClass('active');
	jQuery(this).addClass('active');

	//датчик загрузки
	jQuery('#foo').addClass('active');

	//замена имени
	jQuery(this).closest(".title-e").addClass('name_o'+inf_cat);
	jQuery(".name_o"+inf_cat+" p.de").replaceWith('<p class="de">'+name_o+'</p>');
	
	//!!!!!функция выводим изображения
	fun_insimg();
	fun_calc();
	fun_recal ();
	
	//датчик загрузки
	jQuery('#img img').load(function() {
		jQuery('#foo').removeClass('active');
	});
	
	
	
			
			
	
});


//jQuery(document).on('click','.op li a[data-class="ing"]', function(){
	//name_o = jQuery(this).attr("data-title");
	
//});















	
	
	
    
	
	//табы
  jQuery(".set > a").on("click", function(){
    if(jQuery(this).hasClass('active')){
      jQuery(this).removeClass("active");
      jQuery(this).siblings('.tcontent').slideUp(200);
      jQuery(".set > a i").removeClass("stbo").addClass("stb");
    }else{
      jQuery(".set > a i").removeClass("stbo").addClass("stb");
    jQuery(this).find("i").removeClass("stb").addClass("stbo");
    jQuery(".set > a").removeClass("active");
    jQuery(this).addClass("active");
    jQuery('.tcontent').slideUp(200);
    jQuery(this).siblings('.tcontent').slideDown(200);
    }
    
  });
  
  
  
  
  jQuery(document).on('click','#bead a', function(){
	  if(jQuery(this).hasClass('st1')){
		$("#step1").css("display","block");
		$("#step2").css("display","none");
		$("#step3").css("display","none");
		$("#next a").text('Выбрать опции');
		$("#next a").css("display","block");
		jQuery('.st1').addClass('active');
		jQuery('.st2').removeClass('active');
		jQuery('.st3').removeClass('active');
		jQuery('#next').addClass('step1');
		jQuery('#next').removeClass('step2');
		jQuery('#next').removeClass('step3');
		
	  }
	  else if(jQuery(this).hasClass('st2')){
		$("#step1").css("display","none");
		$("#step2").css("display","block");
		$("#step3").css("display","none");
		$("#next a").text('Продолжить');
		$("#next a").css("display","block");
		jQuery('.st1').removeClass('active');
		jQuery('.st2').addClass('active');
		jQuery('.st3').removeClass('active');
		jQuery('#next').addClass('step2');
		jQuery('#next').removeClass('step3');
		jQuery('#next').removeClass('step1');
	  }
	  else if(jQuery(this).hasClass('st3')){
		  $("#next a").css("display","none");
		  jQuery('.st1').removeClass('active');
		jQuery('.st2').removeClass('active');
		jQuery('.st3').addClass('active');
		  //удалить лишнее
		  $('#undefined').remove();
		  $('#c-img img').attr('crossOrigin','Anonymous');
		  //crossOrigin="Anonymous"
		  fun_createimg();
		 //удалить лишнее
		
		//запуск слайдера
		if(typeof slider !== "undefined"){
			setTimeout(function(){
			 slider.reloadSlider();
				//console.log('iiiii');
			},100);				
		  }
		  else{
		  setTimeout(function(){
			slider  = $('.sliders').bxSlider({
					nextText: '<i class="fa fa-angle-right"></i>',
					prevText: '<i class="fa fa-angle-left"></i>',
					speed: 500,
					autoStart: true,
					infiniteLoop: false,
					captions: true,
					mode: 'fade',
					hideControlOnEnd:false,
					onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
						//console.log(currentSlideHtmlObject);
					},
					onSlideNext: function(currentSlideHtmlObject) {
						//console.log(currentSlideHtmlObject[0]['title']);
						$(".slider-txt").html(currentSlideHtmlObject[0]['title']);
					  },
					onSlidePrev: function(currentSlideHtmlObject) {
						//console.log(currentSlideHtmlObject[0]['title']);
						$(".slider-txt").html(currentSlideHtmlObject[0]['title']);
					  },
			});
			
						 },100);
	  }
					 
					
		$("#step1").css("display","none");
		$("#step2").css("display","none");
		$("#step3").css("display","block");
	  }
  });
  //по нажитию далее
  
  jQuery(document).on('click','#back', function(){
	  if ($(window).width() <= '767'){
		  
		  
		  
		  if(jQuery(this).hasClass('bst2')){
			  jQuery('#back').removeClass('bst3');
			  jQuery('#back').removeClass('bst2');
			  jQuery('.st1').addClass('active');
			jQuery('.st2').removeClass('active');
			jQuery('.st3').removeClass('active');
			
			$(".bst2").css("display","block");
			$("#step1").css("display","block");
			$("#step2").css("display","none");
			$("#step3").css("display","none");
			$("#next a").css("display","block");
		  }
		  if(jQuery(this).hasClass('bst3')){
			  jQuery('#back').removeClass('bst3');
			  jQuery('#back').addClass('bst2');
			  
			  jQuery('.st1').removeClass('active');
			jQuery('.st2').addClass('active');
			jQuery('.st3').removeClass('active');
			
			$("#step1").css("display","none");
			$("#step2").css("display","block");
			$("#step3").css("display","none");
			$("#next a").css("display","block");
		  }
	  }
  });
  
  
  jQuery(document).on('click','#next', function(){
	  //е
	  if(jQuery(this).hasClass('step1')){
		//jQuery(this).removeClass("step1");
		//jQuery(this).addClass('step2');
		if ($(window).width() <= '767'){
			$("#back").css("display","block");
			jQuery('#back').addClass('bst2');
			$("#back").css("display","none");
		}
		
		
		jQuery('.st1').removeClass('active');
		jQuery('.st2').addClass('active');
		jQuery('.st3').removeClass('active');
		
		$("#step1").css("display","none");
		$("#step2").css("display","block");
		$("#step3").css("display","none");
		$("#next a").text('Продолжить');
		yaCounter39721995.reachGoal('goal_klik_na_vybrat_opcii'); 
	  }
	  else if(jQuery(this).hasClass('step2')){
	//	jQuery(this).removeClass("step2");
		//jQuery(this).addClass('step3');
		if ($(window).width() <= '767'){
			$("#back").css("display","block");
			jQuery('#back').addClass('bst3');
			jQuery('#back').removeClass('bst2');
		}
		
		
		
		yaCounter39721995.reachGoal('goal_klik_na_vybrat_prodolzhit'); 
		
		jQuery('.st1').removeClass('active');
		jQuery('.st2').removeClass('active');
		jQuery('.st3').addClass('active');
		
		
		$("#step1").css("display","none");
		$("#step2").css("display","none");
		$("#step3").css("display","block");
		$("#next a").css("display","none");
		fun_createimg();
		
		 //удалить лишнее
		$('#undefined').remove();
		//запуск слайдера
			//запуск слайдера
		if(typeof slider !== "undefined"){
			setTimeout(function(){
			 slider.reloadSlider();
				//console.log('iiiii');
			},100);				
		  }
		  else{
		  setTimeout(function(){
			slider  = $('.sliders').bxSlider({
					nextText: '<i class="fa fa-angle-right"></i>',
					prevText: '<i class="fa fa-angle-left"></i>',
					speed: 500,
					autoStart: true,
					infiniteLoop: false,
					captions: true,
					mode: 'fade',
					hideControlOnEnd:false,
					onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
						//console.log(currentSlideHtmlObject);
					},
					onSlideNext: function(currentSlideHtmlObject) {
						//console.log(currentSlideHtmlObject[0]['title']);
						$(".slider-txt").html(currentSlideHtmlObject[0]['title']);
					  },
					onSlidePrev: function(currentSlideHtmlObject) {
						//console.log(currentSlideHtmlObject[0]['title']);
						$(".slider-txt").html(currentSlideHtmlObject[0]['title']);
					  },
			});
			
						 },100);
	  }
			
	  }
	 
	});
  
  
  
  
  
 
  
  
  
  
  jQuery(document).on('click','.form a', function(){
			html = c_totals;
			ph = $('input[name="phone"]').val();
			em = $('input[name="email"]').val();
			comps = '';
		
		if(ph != '' && em != ''){
		jQuery('#send1').addClass('active');
			//gg = $("#c-img img").attr("src");
			var arrs = Array.prototype.map.call(
				document.querySelectorAll('#c-img img'), 
				function(e){
					return e.getAttribute('src')
				}
			);
			//arrs = JSON.stringify( arrs );
			console.log('!!!jj');
			//console.log(arrs);	
			console.log('!!!jj');
			//console.log(arrs);
			
			 $('#menu-l > li.visable > a').each(function() { 
				
				
				name_p = '<h2>'+$(this).text()+'</h2>';
				//console.log(name_p);
				
				pol_fg = $(this).attr('data-id_categ_pol');
				if(typeof pol_fg !== "undefined") {
					pol_fg = pol_fg.split(';');	
					pol_fg = '<p>Пол: '+pol_fg[5]+'</p>';
					
					//console.log(pol_fg);
				}
				else{
					pol_fg = "";
				}
				
				
				
				pol_sten= $(this).attr('data-id_categ_sten');
				if(typeof pol_sten !== "undefined") {
					pol_sten = pol_sten.split(';');	
					pol_sten = '<p>Стены: '+pol_sten[5]+'</p>';
					//console.log(pol_sten[5]);
				}
				else{
					pol_sten = "";
					//санузел
					ds = $(this).attr('id-post');
					if(ds=='915' || ds=='569' || ds=='570'){
						pol_sten= $(this).attr('data-id_categ_pol');
						if(typeof pol_sten !== "undefined") {
							pol_sten = pol_sten.split(';');	
							pol_sten = '<p>Стены: '+pol_sten[5]+'</p>';
							//console.log(pol_sten[5]);
						}
					}		
				}
				
				pol_dver= $(this).attr('data-id_categ_dver');
				if(typeof pol_dver!== "undefined") {
					pol_dver = pol_dver.split(';');	
					pol_dver = '<p>Двери: '+pol_dver[5]+'</p>';
					//console.log(pol_dver[5]);
				}
				else{
					pol_dver = "";
				}
				pol_dver_v= $(this).attr('data-id_categ_dver_v');
				if(typeof pol_dver_v!== "undefined") {
					pol_dver_v = pol_dver_v.split(';');	
					pol_dver += '<p>Входная дверь: '+pol_dver_v[5]+'</p>';
					//console.log(pol_dver[5]);
				}
				
				
				pol_plin= $(this).attr('data-id_categ_plin');
				if(typeof pol_plin!== "undefined") {
					pol_plin = pol_plin.split(';');	
					pol_plin = '<p>Плинтус: '+pol_plin[5]+'</p>';
					//console.log(pol_plin[5]);
				}
				else{
					pol_plin = "";
				}
				
				pol_poto= $(this).attr('data-id_categ_poto');
				if(typeof pol_poto!== "undefined") {
					pol_poto = pol_poto.split(';');
					if(pol_poto[5] == "undefined" || pol_poto[5] == undefined){
						pol_poto[5] = 'Нет'; 
					}					
					pol_poto = '<p>Потолок: '+pol_poto[5]+'</p>';
					//console.log(pol_poto[5]);
				}
				else{
					pol_poto = "";
				}
				
				pol_ing_r= $(this).attr('data-id_categ_ing_r');
				if(typeof pol_ing_r!== "undefined") {
					pol_ing_r = pol_ing_r.split(';');	
					if(pol_ing_r[5] == "undefined" || pol_ing_r[5] == undefined){
						pol_ing_r[5] = 'Нет';
					}
					pol_ing_r = '<p>Розетки: '+pol_ing_r[5]+'</p>';
					//console.log(pol_ing_r[5]);
				}
				else{
					pol_ing_r = "";
				}
				
				pol_ing= $(this).attr('data-id_categ_ing');
				if(typeof pol_ing!== "undefined") {
					pol_ing = pol_ing.split(';');	
					pol_ing = '<p>Радиаторы: '+pol_ing[5]+'</p>';
					//console.log(pol_ing[5]);
				}
				else{
					pol_ing = "";
				}
				
				pol_akc= $(this).attr('data-id_categ_akc');
				if(typeof pol_akc!== "undefined") {
					pol_akc = pol_akc.split(';');	
					//console.log(pol_akc[5]);
					if(pol_akc[5] == "undefined" || pol_akc[5] == undefined){
						pol_akc[5] = 'Нет';
					}
					pol_akc = '<p>Акценты: '+pol_akc[5]+'</p>';
					//console.log(pol_akc);
				}
				else{
					pol_akc = "";
				}
				
				pol_san_1= $(this).attr('data-id_categ_san_1');
				//pol_san_1= '';
				if(typeof pol_san_1 !== "undefined") {
					pol_san_1 = pol_san_1.split(';');	
					pol_san_1 = '<p>Раковина: '+pol_san_1[5]+'</p>';
					//console.log(pol_san_1);
				}
				else{
					pol_san_1= '';
				}
				
				ds = $(this).attr('id-post');
				if(ds=='915' || ds=='569' || ds=='570'){
						pol_san_1 += '<p>Смесители:<br> Комплект для ванной Lemark: смеситель и душевой гарнитур. <br>Материал: латунь/керамический картридж</p>';
						//console.log(pol_sten[5]);
				}
				
				
				
				pol_san_2= $(this).attr('data-id_categ_san_2');
				//pol_san_2= '';
				//console.log(pol_san_2);
				if(typeof pol_san_2 !== "undefined") {
					pol_san_2 = pol_san_2.split(';');	
					pol_san_2 = '<p>Ванна: '+pol_san_2[5]+'</p>';
					//console.log(pol_san_2[5]);
				}
				else{
					pol_san_2= '';
				}
				pol_san_3= $(this).attr('data-id_categ_san_3');
				//pol_san_3= '';
				if(typeof pol_san_3 !== "undefined") {
					pol_san_3 = pol_san_3.split(';');	
					pol_san_3 = '<p>Унитаз: '+pol_san_3[5]+'</p>';
					//console.log(pol_san_3);
				}
				else{
					pol_san_3= '';
				}
				pol_san_4= $(this).attr('data-id_categ_san_4');
				//pol_san_4= '';
				if(typeof pol_san_4 !== "undefined") {
					pol_san_4 = pol_san_4.split(';');	
					pol_san_4 = '<p>Душ: '+pol_san_4[5]+'</p>';
					//console.log(pol_san_4);
				}
				else{
					pol_san_4= '';
				}
				pol_ing_rr= $(this).attr('data-id_categ_ing_rr');
				if(typeof pol_ing_rr !== "undefined") {
					pol_ing_rr = pol_ing_rr.split(';');	
					pol_ing_rr = '<p>Вентилятор: '+pol_ing_rr[5]+'</p>';
					//console.log(pol_ing_rr[5]);
				}
				else{
					pol_ing_rr= '';
				}
				
				
				cc_pol= $(this).attr('data-pol');
				
				if(typeof cc_pol !== "undefined") {
					
					pol_otpl = $(this).attr('data-id_categ_pol');
					pol_otpl = pol_otpl.split(';');	
					
					if(pol_otpl[2] == 844) { 
						console.log(pol_otpl[2]);
						cc_pol = '<p>Площадь плитки на полу: '+cc_pol+'</p>';
						//console.log(cc_pol); 
					}
					else{
						cc_pol= '';
					}
				}
				else{
					cc_pol= '';
				}
				cc_dver= $(this).attr('data-dver');
				if(typeof cc_dver !== "undefined") {
					cc_dver = '<p>Количество дверей: '+cc_dver+'</p>';
					//console.log(cc_dver); 
				}
				else{
					cc_dver= '';
				}
				cc_poto= $(this).attr('data-potol');
				if(typeof cc_poto !== "undefined") {
					cc_poto = '<p>Периметр комнаты: '+cc_poto+' (условное обозначение)</p>';
					//console.log(cc_poto); 
				}
				else{
					cc_poto= '';
				}
				cc_akc= $(this).attr('data-akc');
				if(typeof cc_akc !== "undefined") {
					
					cc_akc = '<p>Длинна акцентной стены: '+cc_akc+'</p>';
					//console.log(cc_akc); 
					if (pol_akc == '<p>Акценты: Нет</p>' || pol_akc == '<p>Акценты: Без акцентной стены</p>' || pol_akc == ''){cc_akc= '';}
				}
				else{
					cc_akc= '';
				}
				//plus = '1';
				comps += '<br>'+name_p+pol_fg+pol_sten+pol_dver+pol_plin+pol_poto+pol_ing_r+pol_ing+pol_akc+pol_san_1+pol_san_2+pol_san_3+pol_san_4+pol_ing_rr+cc_pol+cc_dver+cc_poto+cc_akc;
				//cosole.log(comp );
					
			});
			
			//какой санузел выбран
			//bathrooms_type = jQuery("#bathrooms_type").val();
			//cosole.log(bathrooms_type);
			sanic = '';
			if(batt == 'v1'){
				sanic = 'Общий';
			}
			else if(batt == 'v2'){
				sanic = 'Раздельный';
			}
			else if(batt == 'v3'){
				sanic = 'Два санузла';
			}
			
        
			jQuery.ajax({
				  type: 'POST',
				  url: '/wp-content/themes/produmano/ajax_send.php',
				  data: {
					  'im':arrs,
					  'phone':ph,
					  'email':em,
					  'html':html,
					  'ar':area,
					  'ars':s_area,
					  'h':height,
					  'ss':sanic,
					  
					  'so1':so1_c+' '+i_so1,
					  'so2':so2_c+' '+i_so2,
					  'so3':so3_c+' '+i_so3,
					  'so4':so4_c+' Бесплатно',
					  'so5':so5_c+' Бесплатно',
					  'so6':so6_c+' '+i_so6,
					  'so7':so7_c+' '+i_so7,
					  'so8':so8_c+' Бесплатно',
					  'so9':so9_c+' '+i_so9,
					  'so10':so10_c+' '+i_so10,
					  'so12':so12_c+' 35 000 Р.',
					  'so13':so13_c+' 12 000 Р.',
					  'so14':so14_c+' '+i_so14,
					  'so15':so15_c+' '+i_so15,
					  'so16':so16_c+' '+i_so16,
					  'so17':so17_c+' 25 000 Р.',
					  'so18':so18_c+' '+i_so18,
					  'so19':so19_c+' Индивидуально',
					  'so20':so20_c+' Индивидуально',
					  'so21':so21_c+' Индивидуально',
					  'so22':so22_c+' 8 000 Р.',
					  
					  'op1':c_rez_pol+' Р.',
					  'op2':c_rez_poto+' Р.',
					  'op3':c_rez_sten+' Р.',
					  'op4':c_rez_elec+' Р.',
					  'op5':c_rez_sant+' Р.',
					  'op6':c_rez_ob+' Р.',
					  'op7':c_rez_cher+' Р.',
					  'op8':c_rez_ches+' Р.',
					  'op9':c_rez_san+' Р.',
					  'op10':с_two,
					  
					  'to0':comps,
					  
					  
					  
		
					  
					  
				  
				  },
				  response:'text',
				success:function (data) {//возвращаемый результат от сервера
						//console.log('===!!!jj');
						//$("#comp").text('Спасибо! Ваша заявка принята.');
					   //jQuery('#c-img').html(data);
					   jQuery('#send1').removeClass('active');
					   jQuery('#send2').addClass('active');
					   yaCounter39721995.reachGoal('goal_zajavka_na_dizajn_i_smetu'); 

				},
			});
		}
		else{
			alert('Заполните все поля!');
		}
	  });
  
  
  
  
	//inf = 11;
	//arr ={c14:1};
	//arr.c14 = {p645:1};
	//arr.c14.p645 = {ing:5,ii:9,	llll:2	};
			
	//arr.inf.yy=  {				hhh: 'bart'				};	

//console.log(arr);	
	//преоравываем в json		
	//var json_str = JSON.stringify(arr);		
	// записываем
	//jQuery.cookie('cookie_name', json_str );
	// получаем
	//yy = jQuery.cookie('cookie_name' );
	// преобразываем обратно в массив
	//var arrt = JSON.parse(yy);

	//console.log(arrt);
	//option1= 
	
coo1 = $.cookie('option1');
	jQuery('input[name="area"]').val(coo1);
	coo2 = $.cookie('option2');
	jQuery('input[name="height"]').val(coo2);
	coo3 = $.cookie('option3');
	jQuery('input[name="s_area"]').val(coo3);
	coo4 = $.cookie('option4');
	console.log(coo4);
	jQuery('#bathrooms_type').val(coo4);
	
	if($.cookie('one') ==1){
		//console.log('*******');
	}
	else{
		if ($(window).width() >= '1200'){
			setTimeout(function(){
			jQuery('#hel').click();
						 },1000);
			$.cookie('one', 1);
			//console.log('+++++++');
		}
		
	}
	
	if ($(window).width() <= '420'){
			document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=1, maximum-scale=0.75, user-scalable=no, width=device-width');
		}
	
	



// Считывает GET переменные из URL страницы и возвращает их как ассоциативный массив.
	jQuery.extend({
	  getUrlVars: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
		  hash = hashes[i].split('=');
		  vars.push(hash[0]);
		  vars[hash[0]] = hash[1];
		}
		return vars;
	  },
	  getUrlVar: function(name){
		return jQuery.getUrlVars()[name];
	  }
	});
	
	//получаем значение категории
	if(jQuery.getUrlVar('category')){
		category = jQuery.getUrlVar('category');
		if(category == 1){
			jQuery('#menu-ed > li> a[id-category="14"]').click();
		}
		if(category == 2){
			jQuery('#menu-ed > li> a[id-category="15"]').click();
		}
		if(category == 3){
			jQuery('#menu-ed > li> a[id-category="16"]').click();
		}
		if(category == 4){
			jQuery('#menu-ed > li> a[id-category="17"]').click();
		}
		if(category == 5){
			jQuery('#menu-ed > li> a[id-category="18"]').click();
		}
		if(category == 6){
			jQuery('#menu-ed > li> a[id-category="19"]').click();
		}
		//console.log(category);
	}
	else{
		jQuery('#menu-ed > li> a[id-category="14"]').click();
	}

if(jQuery.getUrlVar('area')){
	jQuery('input[name="area"]').val(jQuery.getUrlVar('area'));
}
if(jQuery.getUrlVar('height')){
	jQuery('input[name="height"]').val(jQuery.getUrlVar('height'));
}	
if(jQuery.getUrlVar('s_area')){
	jQuery('input[name="s_area"]').val(jQuery.getUrlVar('s_area'));
}	
if(jQuery.getUrlVar('bathrooms_type')){
	jQuery('select[name="bathrooms_type"]').change(jQuery.getUrlVar('bathrooms_type'));
}		

fun_calc();	












//подсказки
jQuery(document).on('click','#hel', function(){
	$("#mask").css("display","block");
	jQuery('#xx').addClass('active');
	
	$("form#param").css({"position":"absolute", "z-index":"999"});
	$("#help_1").css("display","block");
});
jQuery(document).on('click','#help_1 .btn-order', function(){
	$("#menu-ed").css({"position":"absolute", "z-index":"999"});
	$("#help_2").css("display","block");
	$("#help_1").css("display","none");
	$("form#param").css({"position":"relative", "z-index":"9"});
});
jQuery(document).on('click','#help_2 .btn-order', function(){
	$("#menu-l").css({"position":"absolute", "z-index":"999"});
	$("#help_3").css("display","block");
	$("#help_2").css("display","none");
	$("#menu-ed").css({"position":"relative", "z-index":"9"});
});
jQuery(document).on('click','#help_3 .btn-order', function(){
	$(".accordion-container").css({"position":"absolute", "z-index":"999"});
	$("#edit_r").css({"position":"absolute", "z-index":"999"});
	$("#help_4").css("display","block");
	$("#help_3").css("display","none");
	$("#menu-l").css({"position":"relative", "z-index":"9"});
});
jQuery(document).on('click','#help_4 .btn-order', function(){
	jQuery('#xx').removeClass('active');
	$("#mask").css("display","none");
	$("#help_4").css("display","none");
	$(".accordion-container").css({"position":"relative", "z-index":"9"});
	$("#edit_r").css({"position":"relative", "z-index":"9"})
});
jQuery(document).on('click','#xx.active', function(){
	 jQuery('#xx').removeClass('active');
	$("#mask").css("display","none");
	$("#help_1").css("display","none");
	$("form#param").css({"position":"relative", "z-index":"9"});
	$("#help_2").css("display","none");
	$("#menu-ed").css({"position":"relative", "z-index":"9"});
	$("#help_3").css("display","none");
	$("#menu-l").css({"position":"relative", "z-index":"9"});
	$("#help_4").css("display","none");
	$(".accordion-container").css({"position":"relative", "z-index":"9"});
	$("#edit_r").css({"position":"relative", "z-index":"9"});
	return false;
});


jQuery(document).on('click','#edit_r a', function(){
	$(".accordion-container").css("display","block");
	$("#edit_r").css("display","none");
});












	//удалить лишнее
		
	setTimeout(function(){
		$('#undefined').remove();
			 //fun_createimg_e('1', '645');
		},2000);
	setTimeout(function(){
			 //fun_createimg_e('2', '567');
		},3000);
setTimeout(function(){
			 //fun_createimg_e('3', '559');
		},4000);
setTimeout(function(){
			 //fun_createimg_e('4', '915');
		},5000);		
			

						 
//функция создания одной общей картинки 
function fun_createimg_e(at, id_z) {
	//создание одной общей картинки
	
	
	m1 = $('#menu-ed > li.active a').attr('im_'+at);
	if(typeof m1!== "undefined") {
		m1 = m1.split(';');	
		$('#img2').append('<img title="'+m1[0]+'" id="'+id_z+'" />');
		$("#img2 #"+id_z).attr("src",m1[2]);
		
		im = id_z;
		title = jQuery('#menu-l > li > a[id-post="'+im+'"]').text();
		//console.log(m1[2]);
		
		//датчик загрузки
		jQuery('#img2 img').load(function() {
			if(!$('#c-img img#'+im).length > 0 ){
				$('#c-img').append('<img title="'+title+'" id="'+im+'"/>');
			}

			var CombineImages = function(img1,  callback) {
			var $canvas = $('<canvas/>');
			var ctx = $canvas[0].getContext('2d');
			var img = new Image();
			//img.setAttribute('crossOrigin', 'anonymous');
			var border = '/wp-content/uploads/2017/01/p3.png';

			$canvas[0].width = 800;
			$canvas[0].height = 600;

			$('#img2 img').each(function(){
				ctx.drawImage(this, 0, 0);
			});
			

			img.onload = function () {
			ctx.drawImage(img, 0, 0);
			callback($canvas);
			};
			img.src = border;
			};
			CombineImages('',  function($canvas) {
					  ExtCanvas = $canvas;
					 
					  //$('#c-img #'+im)[0].setAttribute('crossOrigin', 'anonymous');
					 
					  UserAvatar = ExtCanvas[0].toDataURL('image/jpeg');
					  $('#c-img #'+im)[0].src = UserAvatar;
					  $('#img2').html('');
					  
			});
			
		});
	
	
	}
}




arr=[];
xx = [];
			
			
 
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function fun_recal () {
	$('.op li a.active').each(function() {
		 id_cat = $(this).attr('data-id_categ');
		 id_pos = $(this).attr('data-id_post');
		 
		 
			  // console.log(id_cat);
				arr=[];
				xx = [];
				id_t = $(this).closest('.tcontent').attr('id');
				if(id_t != 'option4'){
					   if(id_cat == 597){
						   //сбор значений
								id_e = $('.name_o597 #cal').text();
								arr['name_o597'] = id_e;
					   }
					   else if(id_cat == 865){
						   //сбор значений
								id_e = $('.name_o865 #cal').text();
								arr['name_o865'] = id_e;
					   }
						else if(id_cat == 866){
						   //сбор значений
								id_e = $('.name_o866 #cal').text();
								arr['name_o866'] = id_e;
					   }
						else if(id_cat == 867){
						   //сбор значений
								id_e = $('.name_o867 #cal').text();
								arr['name_o867'] = id_e;
					   }
					   else if(id_cat == 868){
						   //сбор значений
								id_e = $('.name_o868 #cal').text();
								arr['name_o868'] = id_e;
					   }
					   else if(id_cat == 844){
						   //сбор значений
								id_e = $('.name_o844 #cal').text();
								arr['name_o844'] = id_e;
					   }
					   else if(id_cat == 589 || id_cat == 701 || id_cat == 590 || id_cat == 588){
						   //сбор значений
								
					   }
					   else if(id_cat == 588){
						   //сбор значений
								id_e = $('.name_o588 #cal').text();
								arr['name_o588'] = id_e;
								id_e = $('.name_o589 #cal').text();
								arr['name_o589'] = id_e;
					   }
					   else{
							//сбор значений
							$('#'+id_t+' .title-e').each(function() {
								class_z = $(this).attr('class');
								class_z = class_z.split(' ');
								//console.log(class_z[1]);
								id_e = $('.'+class_z[1]+' #cal').text();
								arr[class_z[1]] = id_e;
							});
					   }
							
							//console.log(arr);
							//получить значение нажатого
							id_e = $(this).closest('.title-e');
							id_e = id_e[0]['children']['cal']['innerText'];
							//console.log(id_c[1]);
							if( id_cat=='855'){
								id_e = 0;
							}
							
							//обработка
							for (var key in arr) {
								if(key == 'name_o855' || key == 'name_o597' || key == 'name_o865' || key == 'name_o866' || key == 'name_o867'  || key == 'name_o868' || key == 'name_o844'){
									zz = arr[key];
									
								}					
								else{
									zz =  (+arr[key]) - (+id_e);
								}
								
								if( $('a[data-id_categ="588"]').hasClass( "active" )){
									if(key == 'name_o588'){
										zz = 0;
										//console.log('oo1');
									}
										
								}
								
								xx[key] = zz;
								
								//zz = +zz;
								//IsNumeric('-1')
								if(isNumber(zz) == false){
									zz = zz;
								}
								else if(parseFloat( zz ) > 0 ){
									zz = '+'+zz+' руб.';
								}
								else if(zz == 0){
									
									if($('.'+key+' ul li a').hasClass( "active" )){
										zz = '';
										//console.log('11');
									}
									else{
										zz = '+'+zz+' руб.';
										//console.log('22');
									}
								}
								else{
									zz = zz+' руб.';
								}
								$('#'+id_t+' .'+key+' #cal').text(zz);
							}
							
							//console.log(xx);
							rr = xx;
							
				   }
			if(id_pos == 567){
			 $('.name_o582 #cal').text('');
			}
			if(id_pos == 559){
			 $('.name_o582 #cal').text('');
			}
			if(id_pos == 559){
			 //$('.name_o862 #cal').text('');
			}
			if(id_pos == 915){
			 $('.name_o862 #cal').text('');
			}
			

		 
	});
}


//h
jQuery(document).on('click','.ba > li > a', function(){
	ccl = $(this).closest('li');
	ccl[0]['children'][1]['children'][0]['children'][0].click();
	//console.log(ccl[0]['children'][1]['children'][0]['children'][0]);
});

 


});
