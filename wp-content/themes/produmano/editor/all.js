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
	
	
	
	
	
	
//калькулятор
function fun_calc() {
	
		//id выбранной комнаты
		id_k = $('#menu-l > li> a.active').attr('id-post');
		console.log(id_k );
		
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
		
		batt = bathrooms_type;
		
		//если заданы все данные убираем заставку
		if(area && height && s_area){
			jQuery("span#fooс").css("display","none");
		}
		else{
			//jQuery("span#fooс").css("display","block");
		}
		
		
		//МЧ черновые материал
		mch = 1;
		//материал комнат
		mcom= 1;
		//М сан- цена материалов чистовых для санузла
		msan= 1;
		if(bathrooms_type == 'v1'){
			$(".sv1").css("display","block");
			$(".sv2").css("display","none");
			$(".sv3").css("display","none");
			$(".sv1").addClass('visable');
			$(".sv2").removeClass('visable');
			$(".sv3").removeClass('visable');
		}
		else if(bathrooms_type == 'v2'){
			$(".sv1").css("display","none");
			$(".sv2").css("display","block");
			$(".sv3").css("display","none");
			
			$(".sv1").removeClass('visable');
			$(".sv2").addClass('visable');
			$(".sv3").removeClass('visable');
		}
		else if(bathrooms_type == 'v3'){
			$(".sv1").css("display","none");
			$(".sv2").css("display","block");
			$(".sv3").css("display","block");
			
			$(".sv1").removeClass('visable');
			$(".sv2").addClass('visable');
			$(".sv3").addClass('visable');
		}
		
		
		
		  
		if(area > 0 & area < 40){
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
		if(area >= 40 & area< 60){
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
		if(area >= 60 & area< 90){
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
		if(area >= 90){
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
		

	
		
		
		
		
		if(typeof inf_cat !== "undefined") {
			
			//пол
			data_c_pol_p ={};
			$('#menu-l > li> a[id-post="645"]').each(function() {
				//console.log('ddddd');
				
					fg = $(this).attr('data-id_categ_pol');
					fg = fg.split(';');		
					if(fg[2] == 564){
						c_pol = 0;
						c_pol_opc = 0;
					}	
					else if(fg[2] == 582){
						//паркет +2500 *(Sобщ-S сан - S плитки в коридор или кухню(если есть))
						c_pol= +fg[4] * (+area - +s_area);
						
						
						console.log(c_pol);
						//разделение
						c_pol_opc = c_pol*0.1;
						c_pol= c_pol*0.9;
						console.log(c_pol_opc);
					}
					
			});
			//вывод значений
			c_id = 564;
			data_c_pol = 0;
			$('.name_o'+c_id+' #cal').text(data_c_pol);
			c_id = 582;
			pz = $('a[data-id_categ="'+c_id+'"]').attr('data-caption');
			data_c_pol= pz * (+area - +s_area);
			$('.name_o'+c_id+' #cal').text(data_c_pol);
			
			
			c_pol_p =0;
			$('#menu-l > li> a[data-id_categ_pol]').each(function() {
				//console.log('ddddd');
				id_e = $(this).attr('id-post');
				ppp = $(this).attr('data-pol');
				if(typeof ppp == "undefined") {
					ppp = 1;
				}
				
				
					fg = $(this).attr('data-id_categ_pol');
					fg = fg.split(';');		
					if(fg[2] == 844){
						pro = $('#menu-l > li> a[id-post="645"]').attr('data-id_categ_pol');
						pro = pro.split(';');	
						if(pro[2] == 582){
							c_pol_p -= -1800 * (-ppp);
							data_c_pol_pp = -1800 * (ppp);
							data_c_pol_pp = data_c_pol_pp.toFixed(0);
							data_c_pol_p[id_e] = data_c_pol_pp;
						}
						else{
						//Плитка на пол (указать кол-во кв. метров)	+700 * кол-во метров указанное
						c_pol_p += +fg[4] * (+ppp);
						data_c_pol_pp = +fg[4] * (+ppp);
						data_c_pol_pp = data_c_pol_pp.toFixed(0);
							data_c_pol_p[id_e]=data_c_pol_pp;
						}
					}
					
			});
			//вывод значений
			//console.log(data_c_pol_p);
			c_id = 844;
			//data_c_pol_p[id_k] = data_c_pol_p[id_k].toFixed(0);
			$('.name_o'+c_id+' #cal').text(data_c_pol_p[id_k]+' руб.');
			
			
			//обои
			$('#menu-l > li> a[id-post="645"]').each(function() {
					fg = $(this).attr('data-id_categ_sten');
					fg = fg.split(';');
					//console.log(fg);
					if(fg[2] == 702 || fg[2] == 845){
						// обои без покраски	-300*S общ
						c_oboi= 0;
					}
					else if(fg[2] == 651 || fg[2] == 638 || fg[2] == 639 || fg[2] == 640 || fg[2] == 679 || fg[2] == 680 || fg[2] == 681){
						// обои без покраски	-300*S общ
						// обои с покраской	+390*S общ
						// обои с покраской	+390*S общ
						c_oboi= +fg[4] * (+area);
					}
					
			});
			//console.log(c_oboi);
			//вывод значений
			c_id = [702, 845];
			c_id.forEach(function(item) {
				console.log(item);
				data_c_oboi = 0;
				$('.name_o'+item+' #cal').text(data_c_oboi);
			});
			
			c_id = [651, 638, 639, 640, 679, 680, 681];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				console.log(pz);
				data_c_oboi= pz * (+area);
				$('.name_o'+item+' #cal').text(data_c_oboi);
			});
			
			
			
			
			//двери
			$('#menu-l > li> a[id-post="645"]').each(function() {
					fg = $(this).attr('data-id_categ_dver');
					fg = fg.split(';');					
					if(fg[2] == 585){
						// экошпон	база
						if($(this).attr('data-dver')){
							dv_a = $(this).attr('data-dver');
						}
						else{
							dv_a = 1;
						}
						
						c_dver= +fg[4] * dv_a;
					}
					else if(fg[2] == 586 || fg[2] == 587){
						// хайтек	+2400* кол-во дверей
						// эмаль	+2850*кол-во дверей
						if($(this).attr('data-dver')){
							dv_a = $(this).attr('data-dver');
						}
						else{
							dv_a = 1;
						}
						c_dver= +fg[4] * dv_a;
					}
			});
			//console.log(c_dver);
			$('#menu-l > li> a[id-post="559"]').each(function() {
					fg = $(this).attr('data-id_categ_dver_v');
					fg = fg.split(';');					
					if(fg[2] == 855){
						// вход	база
						c_dver_v= +fg[4];
					}
					
			});
			//console.log(c_dver_v);
			//вывод значений
			c_id = [585];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+c_id+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+c_id+'"].active').attr('data-caption');
				if(pz_a){pz=pz_a;}
				
				data_c_dver = pz* dv_a;
				$('.name_o'+item+' #cal').text(data_c_dver);
			});
			
			c_id = [855];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+c_id+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+c_id+'"].active').attr('data-caption');
				if(pz_a){pz=pz_a;}
				
				data_c_dver = pz;
				$('.name_o'+item+' #cal').text(data_c_dver);
			});
			
			c_id = [586, 587];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				data_c_dver = pz * dv_a;
				$('.name_o'+item+' #cal').text(data_c_dver);
			});
			
			
			
			
			//плинтус
			$('#menu-l > li> a[id-post="645"]').each(function() {
			//$('#menu-l > li> a.active[data-id_categ_plin]').each(function() {
					fg = $(this).attr('data-id_categ_plin');
					fg = fg.split(';');
					if(fg[2] == 655 || fg[2] == 656 || fg[2] == 657 || fg[2] == 658){
						//цвет двери	+160*S общ
						c_plin= +fg[4] * (+area);
					}
			});
			//console.log(c_plin);
			//вывод значений
			c_id = [655, 656, 657, 658];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				data_c_plin= pz * (+area);
				$('.name_o'+item+' #cal').text(data_c_plin);
			});
			
			
			c_poto= 0;
			//потолок
			$('#menu-l > li> a[id-post="645"]').each(function() {
					fg = $(this).attr('data-id_categ_poto');
					fg = fg.split(';');
					//console.log(fg );
					if(fg[2] == 589){
						//натяжной	база
						c_poto= 0;
						c_poto_opc = 0;
					}
					else if(fg[2] == 701){
						//натяжной	со скр карн
						//if()
							c_poto_opc = 0;
					}
					else if(fg[2] == 588 ){
						//окрашенный (по маякам)	+1050*(Sобщ-S сан)
						c_poto= +fg[4] * (+area - +s_area);
						
						//разделение
						c_poto_opc = c_poto*0.5;
						c_poto= c_poto*0.5;
						console.log(c_poto_opc);
					}
			});
			
			
			//потолок светильники
			$('#menu-l > li.visable > a[data-id_categ_poto]').each(function() {
					fg = $(this).attr('data-id_categ_poto');
					fg = fg.split(';');
					//console.log(fg );
					if(fg[2] == 862  || fg[2] == 863){
						//натяжной	база
						c_poto += +fg[4]; 
					}
			});
			console.log(c_poto);
			
			
			//карниз
			k_poto =0;
			k_poto_opc = 0;
			c_poto_s= 0; 
			$('#menu-l > li.visable > a[data-id_categ_poto_p]').each(function() {
				
				id_e = $(this).attr('id-post');
				
				fg = $(this).attr('data-id_categ_poto_p');		
				pot = $(this).attr('data-potol');
				if(typeof pot == "undefined") {
					pot = 1;
				}
					fg = fg.split(';');
						
					if(fg[2] == 590){
						k_poto += +fg[4]*pot;
						
						//разделение
						k_poto_opc = k_poto*0.2;
						k_poto = k_poto*0.8;
						console.log(k_poto_opc);
						
					}
					if(fg[2] == 701){
						c_poto_s += +fg[4];
					}
				
			});
			
			console.log(k_poto); 
			console.log(c_poto_s);
			
			//натяжной	со скр карн
			//count =0;
			//	$('#menu-l > li.visable').each(function() {
			//		fg = $(this).children('a').attr('data-id_categ_poto_p');
					//fg = window[fg];
			//		if(typeof fg !== "undefined") {
			//			fg = fg.split(';');
			//				if(fg[0]=='701_1'){
			//					++count;
								//console.log(count);
			//					c_poto= 0;
			//				}
			//		}
					
			//	});
				//c_poto_s= 6300*count; 
				//console.log(c_poto_s); 
			
			//вывод значений
			c_id = 589;
			data_c_poto = 0;
			data_c_poto = '';
			$('.name_o'+c_id+' #cal').text(data_c_poto);
			
			c_id = 588;
			pz = $('a[data-id_categ="'+c_id+'"]').attr('data-caption');
			data_c_poto= pz * (+area - +s_area);
			if(parseFloat( data_c_poto ) > 0 ){
									data_c_poto = '+'+data_c_poto+' руб.';
			}
			else{
			data_c_poto = data_c_poto+' руб.';
			}
			$('.name_o'+c_id+' #cal').text(data_c_poto);
			
			
			
			
			
			c_id = 863;
			pz = $('.op a[data-id_categ="'+c_id+'"]').attr('data-caption');
			pz_a = $('.op a[data-id_categ="'+c_id+'"].active').attr('data-caption');
			if(pz_a){pz=pz_a;}
			data_c_poto = pz;
			if(parseFloat( data_c_poto ) > 0 ){
									data_c_poto = '+'+data_c_poto+' руб.';
			}
			else{
			data_c_poto = data_c_poto+' руб.';
			}
			$('.name_o'+c_id+' #cal').text(data_c_poto);
			
			
			
			c_id = [590];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+item+'"].active').attr('data-caption');
				if(pz_a){pz=pz_a;}
				pt = $('#menu-l > li> a.active').attr('data-potol');
				data_c_plin= pz * pt;
				data_c_plin = data_c_plin.toFixed(0);
			if(parseFloat( data_c_plin ) > 0 ){
									data_c_plin = '+'+data_c_plin+' руб.';
			}
			else{
				//data_c_plin = data_c_plin.toFixed(0); 
			data_c_plin = data_c_plin+' руб.';
			}
				$('.name_o'+item+' #cal').text(data_c_plin);
			});
			
			c_id = 701;
			pz = $('.op a[data-id_categ="'+c_id+'"]').attr('data-caption');
			pz_a = $('.op a[data-id_categ="'+c_id+'"].active').attr('data-caption');
			if(pz_a){pz=pz_a;}
			data_c_poto = pz;
			if(parseFloat( data_c_poto ) > 0 ){
									data_c_poto = '+'+data_c_poto+' руб.';
			}
			else{
			data_c_poto = data_c_poto+' руб.';
			}
			$('.name_o'+c_id+' #cal').text(data_c_poto);
			
			
			
			
			if( $('a[data-id_categ="588"]').hasClass( "active" ) && $('a[data-id_categ="590"]').hasClass( "active" )){
				c_id = 588;
				pz = $('a[data-id_categ="'+c_id+'"]').attr('data-caption');
				data_c_poto= 0 - pz * (+area - +s_area);
				if(parseFloat( data_c_poto ) > 0 ){
									data_c_poto = '+'+data_c_poto+' руб.';
			}
			else{
			data_c_poto = data_c_poto+' руб.';
			}
				$('.name_o589 #cal').text(data_c_poto);
				$('.name_o588 #cal').text('');
			}
			
			c_id = 862;
			pz = $('.op a[data-id_categ="'+c_id+'"]').attr('data-caption');
			pz_a = $('.op a[data-id_categ="'+c_id+'"].active').attr('data-caption');
			if(pz_a){pz=pz_a;}
			data_c_poto = pz;
			if(parseFloat( data_c_poto ) >= 0 ){
									data_c_poto = '+'+data_c_poto+' руб.';				
			}
			else{
			data_c_poto = data_c_poto+' руб.';
			}
			$('.name_o'+c_id+' #cal').text(data_c_poto);
			console.log(data_c_poto);
			
			
			
			
			
			//акценты плюсуем
			vva1 = 0;
			vva2 = 0;
			vva3 = 0;
			
						$('#menu-l > li.visable > a[data-id_categ_akc]').each(function() {
				fg = $(this).attr('data-id_categ_akc');		
				akk = $(this).attr('data-akc');
				//console.log(akk);
				if(typeof akk == "undefined") {
					akk = 1;
				}
				fg = fg.split(';');
					
				if(fg[2] == 736 || fg[2] == 592 || fg[2] == 593 ){
					vva1 += +height * fg[4]*akk;
					//console.log(vva1);
					//разделение
						vva1_opc = vva1*0.3;
						vva1 = vva1*0.7;
						console.log(vva1_opc);
						vva3_opc = 0;
				}
				else if(fg[2] == 591){
					vva1 += +height * fg[4]*akk;
					vva1_opc = vva1*0.2;
						vva1 = vva1*0.8;
						console.log(vva1_opc);
						vva3_opc = 0;
				}
				else if(fg[2] == 594){
					vva1 += +height * fg[4]*akk;
					vva3_opc = 0;
				}
				else if(fg[2] == 738 ){
					//Покраска	база+500р
					vva2 += +fg[4];
				}
				
				else if(fg[2]  == 820 ){
					//Молдинги	+(кол-во метров длины стены)*2800
					vva3 += +fg[4]*akk;
					vva3_opc = vva3*0.2;
						vva3 = vva3*0.8;
						console.log(vva3_opc);
						vva1_opc = 0;
				}
			});
			//console.log(vva1);
			//console.log(vva2);
			//console.log(vva3);
			//акценты
			//Ламинат	+H потолка* (кол-во метров длины стены)*1050
			//Декоративный кирпич	+H потолка* (кол-во метров длины стены)*2150
			//Штукатурка	+H потолка* (кол-во метров длины стены)*2350
			//Обои	+H потолка* (кол-во метров длины стены)*550
			c_akc1= +vva1;
			c_akc2= +vva2;
			c_akc3= +vva3;
			
			c_id = [736, 592, 593, 591, 594];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+item+'"].active').attr('data-caption');
				ak = $('#menu-l > li> a.active').attr('data-akc');
				
				if(pz_a){pz=pz_a;}
				data_c_akc = +height * pz*ak;
				console.log(data_c_akc);
				data_c_akc = data_c_akc.toFixed(0);
				$('.name_o'+item+' #cal').text(data_c_akc);
			});
			
			c_id = [738];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+item+'"].active').attr('data-caption');
				if(pz_a){pz=pz_a;}
				data_c_akc = +pz;
				data_c_akc = data_c_akc.toFixed(0);
				//data_c_akc  = parseFloat(data_c_akc.toFixed(2));
				$('.name_o'+item+' #cal').text(data_c_akc);
			});
			
			c_id = [820];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+item+'"].active').attr('data-caption');
				ak = $('#menu-l > li> a.active').attr('data-akc');
				if(pz_a){pz=pz_a;}
				data_c_akc = +pz*ak;
				data_c_akc = data_c_akc.toFixed(0);
				$('.name_o'+item+' #cal').text(data_c_akc);
			});
			
			
			
			//инженерия
			$('#menu-l > li> a[id-post="645"]').each(function() {
					fg = $(this).attr('data-id_categ_ing_r');
					fg = fg.split(';');
					//console.log(fg );
					if(fg[2] == 596){
						//+70*S общ
						c_ing_r= +fg[4] * +area;
					}
					if(fg[2] == 835){
						//+70*S общ
						c_ing_r= +fg[4] * +area;
					}
			});
			//радиатор
			$('#menu-l > li> a[id-post="645"]').each(function() {
					fg = $(this).attr('data-id_categ_ing');
					fg = fg.split(';');
					//console.log(fg );
					if(fg[2] == 597){
						c_ing= +fg[4] * (+area - +s_area);
						c_ing = parseFloat(c_ing.toFixed(2));
 //c_ing= c_ing.toFixed(2); //300.23
						//c_ing = c_ing.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
					}
			});
			console.log(c_ing)
			
			c_id = [596, 835];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+item+'"].active').attr('data-caption');
				if(pz_a){pz=pz_a;}
				data_c_ing_r = +pz*area;
				$('.name_o'+item+' #cal').text(data_c_ing_r);
			});
			c_id = [597];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+item+'"].active').attr('data-caption');
				if(pz_a){pz=pz_a;}
				data_c_ing = +pz * (+area - +s_area);
				data_c_ing = parseFloat(data_c_ing.toFixed(2));
				$('.name_o'+item+' #cal').text(data_c_ing);
			});
			
			
			
			
			
			
			//санузел
			
			//пол
			pol_s =0;
			$('#menu-l > li.visable > a[data-id_categ_pol]').each(function() {
				fg = $(this).attr('data-id_categ_pol');	
				fg = fg.split(';');
					
				if(fg[2] == 860){
					//-2500*S сан* H/2,5
					pol_s = +fg[4] *s_area * height/2.45;
				}
				else if(fg[2] == 861){
					pol_s = 0;
				}
			});
			
			c_id = [860];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+item+'"].active').attr('data-caption');
				if(pz_a){pz=pz_a;}
				data_pol_s = +pz *s_area * height/2.45;
				data_pol_s = data_pol_s.toFixed(0); //300.23
				//data_pol_s = data_pol_s.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				$('.name_o'+item+' #cal').text(data_pol_s);
			});
			c_id = [861];
			c_id.forEach(function(item) {
				data_pol_s = 0;
				$('.name_o'+item+' #cal').text(data_pol_s);
			});
			
			c_id = [869];
			c_id.forEach(function(item) {
				data_pol_s = 0;
				$('.name_o'+item+' #cal').text(data_pol_s);
			});
			c_id = [870];
			c_id.forEach(function(item) {
				data_pol_s = 0;
				$('.name_o'+item+' #cal').text(data_pol_s);
			});
			
			
			//console.log(pol_s);
			//сантех
			san_1 =0;
			$('#menu-l > li.visable > a[data-id_categ_san_1]').each(function() {
				fg = $(this).attr('data-id_categ_san_1');	
				fg = fg.split(';');
					
				if(fg[2] == 865){
					//-2500*S сан* H/2,5
					san_1 += +fg[4];
				}
			});
			
			san_2 =0;
			$('#menu-l > li.visable > a[data-id_categ_san_2]').each(function() {
				fg = $(this).attr('data-id_categ_san_2');	
				fg = fg.split(';');
						//console.log(fg);
				if(fg[2] == 866){
					//-2500*S сан* H/2,5
					san_2 += +fg[4];
				}
			});
			san_3 =0;
			$('#menu-l > li.visable > a[data-id_categ_san_3]').each(function() {
				fg = $(this).attr('data-id_categ_san_3');	
				fg = fg.split(';');
					
				if(fg[2] == 867){
					//-2500*S сан* H/2,5
					san_3 += +fg[4];
				}
			});
			san_4 =0;
			$('#menu-l > li.visable > a[data-id_categ_san_4]').each(function() {
				fg = $(this).attr('data-id_categ_san_4');	
				fg = fg.split(';');
					
				if(fg[2] == 868){
					//-2500*S сан* H/2,5
					san_4 += +fg[4];
				}
			});
			
			
			c_id = [865, 866, 867, 868];
			c_id.forEach(function(item) {
				pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
				pz_a = $('.op a[data-id_categ="'+item+'"].active').attr('data-caption');
				if(pz_a){pz=pz_a;}
				data_san = +pz;
				$('.name_o'+item+' #cal').text(data_san);
			});
			
			
			
		//console.log(san_1);
		//	console.log(san_2);
		//	console.log(san_3);
		//	console.log(san_4);
			
			
			
		}
		
		// опции 
		с_mater = c_pol + c_pol_p + c_oboi +c_dver +c_dver_v +c_plin +k_poto +c_poto+c_poto_s +c_akc1 +c_akc2 +c_akc3 +c_rad +c_ing +c_ing_r+ pol_s +san_1 +san_2 +san_3 +san_4;
		console.log(с_mater+'!!!!!!!'); 
		
		so1_c = '(<b>не выбрано</b>)';so2_c = '(<b>не выбрано</b>)';so3_c = '(<b>не выбрано</b>)';so4_c = '(<b>не выбрано</b>)';so5_c = '(<b>не выбрано</b>)';so6_c = '(<b>не выбрано</b>)';so7_c = '(<b>не выбрано</b>)';so8_c = '(<b>не выбрано</b>)';so9_c = '(<b>не выбрано</b>)';so10_c = '(<b>не выбрано</b>)';so11_c = '(<b>не выбрано</b>)';so12_c = '(<b>не выбрано</b>)';so13_c = '(<b>не выбрано</b>)';so14_c = '(<b>не выбрано</b>)';so15_c = '(<b>не выбрано</b>)';so16_c = '(<b>не выбрано</b>)';so17_c = '(<b>не выбрано</b>)';so18_c = '(<b>не выбрано</b>)';so19_c = '(<b>не выбрано</b>)';so20_c = '(<b>не выбрано</b>)';so21_c = '(<b>не выбрано</b>)';so22_c = '(<b>не выбрано</b>)';
		
		// шаг 2
		if($('input[name="so1"]').prop('checked')) {  
            so1 = -900 *area;
			so1_c = '(<b>выбрано</b>)';
			i_so1 = so1.toFixed(0); //300.23
			i_so1 = i_so1.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so1 em > em').text(i_so1+' Р.' );
        }else{so1 = 0;	
			i_so1 = -900 *area;
			i_so1 = i_so1.toFixed(0); //300.23
			i_so1 = i_so1.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so1 em > em').text(i_so1+' Р.' );
		}
		
		if($('input[name="so2"]').prop('checked')) {  
            so2 = -2000 *(+area - +s_area) * height/2.45;
			so2_c = '(<b>выбрано</b>)';
			i_so2 = so2.toFixed(0); //300.23
			i_so2 = i_so2.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so2 em > em').text(i_so2+' Р.' );
        }else{so2 = 0;
			i_so2 = -2000 *(+area - +s_area) * height/2.45;
			i_so2 = i_so2.toFixed(0); //300.23
			i_so2 = i_so2.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so2 em > em').text(i_so2+' Р.' );		}
			
		if($('input[name="so3"]').prop('checked')) {  
            so3 = -1400 *area;
			so3_c = '(<b>выбрано</b>)';
			i_so3 = so3.toFixed(0); //300.23
			i_so3 = i_so3.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so3 em > em').text(i_so3+' Р.' );
        }else{so3 = 0;	
			i_so3 = -1400 *area;
			i_so3 = i_so3.toFixed(0); //300.23
			i_so3 = i_so3.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so3 em > em').text(i_so3+' Р.' );	}
			
		if($('input[name="so4"]').prop('checked')) {  
            so4 = 0;
			so4_c = '(<b>выбрано</b>)';
        }else{so4 = 0;	}
		if($('input[name="so5"]').prop('checked')) {  
            so5 = 0;
			so5_c = '(<b>выбрано</b>)';
        }else{so5 = 0;	}
		
		
		if($('input[name="so6"]').prop('checked')) {  
            so6 =950*area;
			so6_c = '(<b>выбрано</b>)';
			i_so6 = so6.toFixed(0); //300.23
			i_so6 = i_so6.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so6 em > em').text(i_so6+' Р.' );
        }else{so6 = 0;
			i_so6 = 950 *area;
			i_so6 = i_so6.toFixed(0); //300.23
			i_so6 = i_so6.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so6 em > em').text(i_so6+' Р.' );
		}
		
		
		if($('input[name="so7"]').prop('checked')) {  
            so7 = 1450*area *height/2.45;
			so7_op= so7 * 0.5;
			so7_dop= so7 * 0.5;
			so7_c = '(<b>выбрано</b>)';
			i_so7 = so7.toFixed(0); //300.23
			i_so7 = i_so7.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so7 em > em').text(i_so7+' Р.' );
        }else{
			so7 = 0;
			so7_op= 0;
			so7_dop= 0;	
			i_so7 = 1450 *area *height/2.45;
			i_so7 = i_so7.toFixed(0); //300.23
			i_so7 = i_so7.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so7 em > em').text(i_so7+' Р.' );}
			
		if($('input[name="so8"]').prop('checked')) {  
            so8 = 0;
			so8_c = '(<b>выбрано</b>)';
        }else{so8 = 0;	}
		if($('input[name="so9"]').prop('checked')) {  
            so9 = 1400*area;
			so9_op= so9 * 0.5;
			so9_dop= so9 * 0.5;
			so9_c = '(<b>выбрано</b>)';
			i_so9 = so9.toFixed(0); //300.23
			i_so9 = i_so9.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so9 em > em').text(i_so9+' Р.' );	
        }else{so9 = 0;
		so9_op= 0;
			so9_dop= 0;
			i_so9 = 1400 *area;
			i_so9 = i_so9.toFixed(0); //300.23
			i_so9 = i_so9.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so9 em > em').text(i_so9+' Р.' );		}
			
		if($('input[name="so10"]').prop('checked')) {  
            so10 = 500*area;
			so10_c = '(<b>выбрано</b>)';
			i_so10 = so10.toFixed(0); //300.23
			i_so10 = i_so10.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so10 em > em').text(i_so10+' Р.' );
        }else{so10 = 0;	
			i_so10 = 500 *area;
			i_so10 = i_so10.toFixed(0); //300.23
			i_so10 = i_so10.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so10 em > em').text(i_so10+' Р.' );}
			
		if($('input[name="so11"]').prop('checked')) {  
            so11 = 12000;
			so11_c = '(<b>выбрано</b>)';
        }else{so11 = 0;	}
		
		if($('input[name="so12"]').prop('checked')) {  
			iso12 = $('input[name="iso12"]').val();	
            so12 = 35000*iso12;
			i_so12 = so12.toFixed(0); //300.23
			i_so12 = i_so12.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so12 em > em').text(i_so12+' Р.' );
			so12_c = '(<b>выбрано</b>)';
        }else{
			so12 = 0;
		iso12 = $('input[name="iso12"]').val();
			i_so12 = 35000*iso12;
			i_so12 = i_so12.toFixed(0); //300.23
			i_so12 = i_so12.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so12 em > em').text(i_so12+' Р.' );
		}
		
		if($('input[name="so13"]').prop('checked')) {  
            so13 = 19900;
			so13_c = '(<b>выбрано</b>)';
        }else{so13 = 0;	}
		
		if($('input[name="so14"]').prop('checked')) {  
            so14 = 3000*s_area; 
			so14_op= so14 * 0.3;
			so14_dop= so14 * 0.7;
			so14_c = '(<b>выбрано</b>)';
			i_so14 = so14.toFixed(0); //300.23
			i_so14 = i_so14.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so14 em > em').text(i_so14+' Р.' );
        }else{so14 = 0;
			so14_op= 0;
			so14_dop= 0;
			i_so14 = 3000*s_area;
			i_so14 = i_so14.toFixed(0); //300.23
			i_so14 = i_so14.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so14 em > em').text(i_so14+' Р.' );}
			
		if($('input[name="so15"]').prop('checked')) {  
			iso15 = $('input[name="iso15"]').val();	
            so15 = 3000*iso15;
			so15_op= so15 * 0.3;
			so15_dop= so15 * 0.7;
			i_so15 = so15.toFixed(0); //300.23
			i_so15 = i_so15.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so15 em > em').text(i_so15+' Р.' );
			so15_c = '(<b>выбрано</b>)';
        }else{so15 = 0;
			so15_op= 0;
			so15_dop= 0;
			iso15 = $('input[name="iso15"]').val();
			i_so15 = 3000*iso15;
			i_so15 = i_so15.toFixed(0); //300.23
			i_so15 = i_so15.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so15 em > em').text(i_so15+' Р.' );
		}
		if($('input[name="so16"]').prop('checked')) {  
			iso16 = $('input[name="iso16"]').val();	
            so16 = 2500*iso16;
			so16_op= so16 * 0.3;
			so16_dop= so16 * 0.7;
			i_so16 = so16.toFixed(0); //300.23
			i_so16 = i_so16.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so16 em > em').text(i_so16+' Р.' );
			so16_c = '(<b>выбрано</b>)';
        }else{so16 = 0;	
			so16_op= 0;
			so16_dop= 0;
			iso16 = $('input[name="iso16"]').val();
			i_so16 = 2500*iso16;
			i_so16 = i_so16.toFixed(0); //300.23
			i_so16 = i_so16.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so16 em > em').text(i_so16+' Р.' );
		}
		
		if($('input[name="so17"]').prop('checked')) {  
            so17 = 30000;
			so17_c = '(<b>выбрано</b>)';
			jQuery('#so17 em > em').text('30 000 Р.' );
        }else{so17 = 0;
			jQuery('#so17 em > em').text('30 000 Р.' );

		}
		
		if($('input[name="so18"]').prop('checked')) { 
			iso18 = $('input[name="iso18"]').val();	
            so18 = 10000 *iso18;
			
			i_so18 = so18.toFixed(0); //300.23
			i_so18 = i_so18.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so18 em > em').text(i_so18+' Р.' );
			so18_c = '(<b>выбрано</b>)';
        }else{so18 = 0;
			iso18 = $('input[name="iso18"]').val();
			i_so18 = 10000*iso18;
			i_so18 = i_so18.toFixed(0); //300.23
			i_so18 = i_so18.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
			jQuery('#so18 em > em').text(i_so18+' Р.' );
		}
		if($('input[name="so19"]').prop('checked')) {  
			so19_c = '(<b>выбрано</b>)';
        }
		if($('input[name="so20"]').prop('checked')) {  
			so20_c = '(<b>выбрано</b>)';
        }
		if($('input[name="so21"]').prop('checked')) {  
			so21_c = '(<b>выбрано</b>)';
        }
		if($('input[name="so22"]').prop('checked')) {  
            so22 = 8000;
			so22_c = '(<b>выбрано</b>)';
        }else{so22 = 0;	}
		
		
		
		
		
		
				
			// Работы по полу (S общ-S сан)*1300+S сан*1800
		rez_pol = (+area - +s_area)*1300 + +s_area*1800;
		if(typeof c_pol_opc != "undefined"){
			rez_pol = rez_pol + c_pol_opc;
			console.log(c_pol_opc);
		}
		//добавляем опцию со втор стр
		rez_pol = rez_pol + so1;
		
		
		//Работы по потолку	S общ*400
		rez_poto = +area *400;
		if(typeof c_poto_opc != "undefined"){
			rez_poto = rez_poto + c_poto_opc;
			console.log(c_poto_opc);
		}
		if(typeof k_poto_opc != "undefined"){
			rez_poto = rez_poto + k_poto_opc;
			console.log(k_poto_opc);
		}
		
		
		
		//Работы по стенам	((S общ-S сан)*3765+S сан*2730)*H/2,45
		rez_sten = ((+area - +s_area)*3765 + +s_area*2730)* +height / 2.45;
		if(typeof vva1_opc != "undefined"){
			rez_sten = rez_sten + vva1_opc;
			console.log(vva1_opc);
		}
		if(typeof vva3_opc != "undefined"){
			rez_sten = rez_sten + vva3_opc;
			console.log(vva3_opc);
		}
		//добавляем опцию со втор стр
		rez_sten = rez_sten + so2;
		rez_sten = rez_sten + so7_op;
		
		// Работы электрике	S общ*950
		rez_elec = +area *950;
		//добавляем опцию со втор стр
		rez_elec = rez_elec + so3;
		rez_elec = rez_elec + so9_op + so14_op + so15_op + so16_op;
		
		// Работы по сантехнике	S общ*600
		rez_sant = +area *600;
		// Прочие (укрытие пленкой, подъем, уборка и пр)	S общ*300
		rez_ob = +area *300;
		rez_ob =rez_ob + so6;
		// Черновые материалы с сантехникой и электрикой	S общ*МЧ*H/2,45
		rez_cher =+area * +mch * +height/2.45;
		//console.log(rez_cher );
		//Чистовые материалы комнаты	(S общ-S сан)*М комнат*H/2,45
		rez_ches = (+area - +s_area)* +mcom * +height / 2.45;
		// Чистовые материалы санузел	S сан*М сан*H/2,45
		rez_san = +s_area * +msan * +height/2.45;
	
	
		//запись в степ 3
		c_rez_pol = rez_pol.toFixed(0); //300.23
		c_rez_pol = c_rez_pol.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st1 em>em').text(c_rez_pol+' Р.');
		c_rez_poto = rez_poto.toFixed(0); //300.23
		c_rez_poto = c_rez_poto.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st2 em>em').text(c_rez_poto+' Р.');
		c_rez_sten = rez_sten.toFixed(0); //300.23
		c_rez_sten = c_rez_sten.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st3 em>em').text(c_rez_sten+' Р.');
		c_rez_elec = rez_elec.toFixed(0); //300.23
		c_rez_elec = c_rez_elec.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st4 em>em').text(c_rez_elec+' Р.');
		c_rez_sant = rez_sant.toFixed(0); //300.23
		c_rez_sant = c_rez_sant.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st5 em>em').text(c_rez_sant+' Р.');
		c_rez_ob = rez_ob.toFixed(0); //300.23
		c_rez_ob = c_rez_ob.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st6 em>em').text(c_rez_ob+' Р.');
		c_rez_cher = rez_cher.toFixed(0); //300.23
		c_rez_cher = c_rez_cher.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st7 em>em').text(c_rez_cher+' Р.');
		c_rez_ches = rez_ches.toFixed(0); //300.23
		c_rez_ches = c_rez_ches.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st8 em>em').text(c_rez_ches+' Р.');
		c_rez_san = rez_san.toFixed(0); //300.23
		c_rez_san = c_rez_san.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$('.st9 em>em').text(c_rez_san+' Р.');
		

		//опции выбранные справа
		//площадь плитки
		p_area = $('#menu-l > li> a[id-post="567"]').attr('data-pol');
		//console.log(p_area);
		if(typeof p_area !== "undefined") {
			p_area = p_area.replace(",",".");
			p_area = p_area.replace(/\.$/gm, '');
		}
		else{
			p_area = 1;
		}
		//пириметр потолка
		per_area = jQuery("input[name='potol_op4']").val();
		if(typeof per_area !== "undefined") {
			per_area = per_area.replace(",",".");
			per_area = per_area.replace(/\.$/gm, '');
		}
		else{
			per_area = 1;
		}
		
		//кол дверей
		dv_a = jQuery("input[name='dv_a']").val();
		
		if(typeof dv_a !== "undefined") {
			dv_a = dv_a.replace(",",".");
			//dv_a = dv_a.replace(/\.$/gm, '');
		}
		else{
			dv_a = 1;
		}
		
		//console.log(per_area);
		//длинна стены акценты
		d_area = jQuery("input[name='akc_a']").val();
		if(typeof d_area !== "undefined") {
			d_area = d_area.replace(",",".");
			//d_area = d_area.replace(/\.$/gm, '');
		}
		else{
			d_area = 1;
			d_area1 = 1;
			d_area3 = 1;
		}
		
		
		
		
		
		c_step2 = so4 + so5 + so7_dop + so8 + so9_dop + so10 + so11 + so12 + so13 + so14_dop  + so15_dop + so16_dop + so17 + so18 + so22; 
		//c_step2 = so1 + so2 + so3 + so4 + so5 + so6 + so7 + so8 + so9 + so10 + so11 + so12 + so13 + so14  + so15 + so16 + so17 + so18 + so22;
		//console.log(c_step2);
		
		
		c_total= +rez_pol + +rez_poto + +rez_sten + +rez_elec + +rez_sant + +rez_ob + +rez_cher + +rez_ches + +rez_san +с_mater +c_step2;
		//console.log(с_mater);
		//console.log(c_total);
		
		с_two = с_mater +c_step2;
		с_two = с_two.toFixed(0); //300.23
		с_two = с_two.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		с_two = с_two + ' P.';
		
		
		c_total = c_total.toFixed(0); //300.23
		c_totals = c_total.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		c_totals = c_totals + ' P.';
		
		//console.log(с_two);
		jQuery(".st10>em>em").text(с_two);
		jQuery("#pric").text(c_totals);
		jQuery(".it em>em").text(c_totals);
		
	}
	
	
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
