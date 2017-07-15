/**
 * Created by Alex on 30.06.2017.
 */


//калькулятор
function fun_calc() {

    //id выбранной комнаты
    id_k = $('#menu-l > li> a.active').attr('id-post');
    //console.log(id_k );

    //общая площадь
    if(typeof g_area !== "undefined") {
        area = g_area;
    }
    else{
        area = jQuery("input[name='area']").val();
        if (area == '') {
            area = '25';
        }
        //console.log(area);
        area = area.replace(",", ".");
        area = area.replace(/\.$/gm, '');
    }
    //высота
    if(typeof g_height !== "undefined") {
        height = g_height;
    }
    else {
        height = jQuery("input[name='height']").val();
        if (height == '') {
            height = '2.5';
        }
        height = height.replace(",", ".");
        height = height.replace(/\.$/gm, '');
    }
    //площадь санузла
    if(typeof g_s_area !== "undefined") {
        s_area = g_s_area;
    }
    else {
        s_area = jQuery("input[name='s_area']").val();
        if (s_area == '') {
            s_area = '3';
        }
        s_area = s_area.replace(",", ".");
        s_area = s_area.replace(/\.$/gm, '');
    }
    //какой санузел выбран
    if(typeof g_bathrooms_type !== "undefined") {
        bathrooms_type = g_bathrooms_type;
    }
    else {
        bathrooms_type = jQuery("#bathrooms_type").val();
    }

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
        //console.log($('#menu-l > li> a[id-post="645"]'));
        if(typeof gos !== "undefined"){
            $(gos).each(function () {
                //console.log('ddddd');

                fg = $(this).attr('data-id_categ_pol');
                fg = fg.split(';');
                if (fg[2] == 564) {
                    c_pol = 0;
                    c_pol_opc = 0;
                }
                else if (fg[2] == 582) {
                    //паркет +2500 *(Sобщ-S сан - S плитки в коридор или кухню(если есть))
                    c_pol = +fg[4] * (+area - +s_area);


                    //console.log(c_pol);
                    //разделение
                    c_pol_opc = c_pol * 0.1;
                    c_pol = c_pol * 0.9;
                    // console.log(c_pol_opc);
                }

            });
        }
        else {
            $('#menu-l > li> a[id-post="645"]').each(function () {
                //console.log('ddddd');

                fg = $(this).attr('data-id_categ_pol');
                fg = fg.split(';');
                if (fg[2] == 564) {
                    c_pol = 0;
                    c_pol_opc = 0;
                }
                else if (fg[2] == 582) {
                    //паркет +2500 *(Sобщ-S сан - S плитки в коридор или кухню(если есть))
                    c_pol = +fg[4] * (+area - +s_area);


                    //console.log(c_pol);
                    //разделение
                    c_pol_opc = c_pol * 0.1;
                    c_pol = c_pol * 0.9;
                    // console.log(c_pol_opc);
                }

            });
        }
        //вывод значений
        c_id = 564;
        data_c_pol = 0;
        $('.name_o'+c_id+' #cal').text(data_c_pol);
        c_id = 582;
        pz = $('a[data-id_categ="'+c_id+'"]').attr('data-caption');
        data_c_pol= pz * (+area - +s_area);
        $('.name_o'+c_id+' #cal').text(data_c_pol);


        c_pol_p =0;

        if(typeof gos !== "undefined"){

           // console.log($('#menu-l > li> a[data-id_categ_pol]'));
           // $(alls).each(function () {

            $.each(allsm, function (i, z) {
                id_e = $(z).attr('id-post');
                ppp = $(z).attr('data-pol');
                if (typeof ppp == "undefined") {
                    ppp = 1;
                }


                fg = $(z).attr('data-id_categ_pol');
                if(typeof fg !== "undefined") {
                    fg = fg.split(';');
                    if (fg[2] == 844) {
                        pro = $(gos).attr('data-id_categ_pol');
                        pro = pro.split(';');
                        if (pro[2] == 582) {
                            c_pol_p -= -1800 * (-ppp);
                            data_c_pol_pp = -1800 * (ppp);
                            data_c_pol_pp = data_c_pol_pp.toFixed(0);
                            data_c_pol_p[id_e] = data_c_pol_pp;
                        }
                        else {
                            //Плитка на пол (указать кол-во кв. метров)	+700 * кол-во метров указанное
                            c_pol_p += +fg[4] * (+ppp);
                            data_c_pol_pp = +fg[4] * (+ppp);
                            data_c_pol_pp = data_c_pol_pp.toFixed(0);
                            data_c_pol_p[id_e] = data_c_pol_pp;
                        }
                    }
                }

            });
        }
        else {
            $('#menu-l > li> a[data-id_categ_pol]').each(function () {
                //console.log('ddddd');
                id_e = $(this).attr('id-post');
                ppp = $(this).attr('data-pol');
                if (typeof ppp == "undefined") {
                    ppp = 1;
                }


                fg = $(this).attr('data-id_categ_pol');
                fg = fg.split(';');
                if (fg[2] == 844) {
                    pro = $('#menu-l > li> a[id-post="645"]').attr('data-id_categ_pol');
                    pro = pro.split(';');
                    if (pro[2] == 582) {
                        c_pol_p -= -1800 * (-ppp);
                        data_c_pol_pp = -1800 * (ppp);
                        data_c_pol_pp = data_c_pol_pp.toFixed(0);
                        data_c_pol_p[id_e] = data_c_pol_pp;
                    }
                    else {
                        //Плитка на пол (указать кол-во кв. метров)	+700 * кол-во метров указанное
                        c_pol_p += +fg[4] * (+ppp);
                        data_c_pol_pp = +fg[4] * (+ppp);
                        data_c_pol_pp = data_c_pol_pp.toFixed(0);
                        data_c_pol_p[id_e] = data_c_pol_pp;
                    }
                }

            });
        }


        //вывод значений
        //console.log(data_c_pol_p);
        c_id = 844;
        //data_c_pol_p[id_k] = data_c_pol_p[id_k].toFixed(0);
        $('.name_o'+c_id+' #cal').text(data_c_pol_p[id_k]+' руб.');


        //обои
        if(typeof gos !== "undefined"){
            $(gos).each(function () {
                fg = $(this).attr('data-id_categ_sten');
                fg = fg.split(';');
                //console.log(fg);
                if (fg[2] == 702 || fg[2] == 845) {
                    // обои без покраски	-300*S общ
                    c_oboi = 0;
                }
                else if (fg[2] == 651 || fg[2] == 638 || fg[2] == 639 || fg[2] == 640 || fg[2] == 679 || fg[2] == 680 || fg[2] == 681) {
                    // обои без покраски	-300*S общ
                    // обои с покраской	+390*S общ
                    // обои с покраской	+390*S общ
                    c_oboi = +fg[4] * (+area);
                }

            });
        }
        else {
            $('#menu-l > li> a[id-post="645"]').each(function () {
                fg = $(this).attr('data-id_categ_sten');
                fg = fg.split(';');
                //console.log(fg);
                if (fg[2] == 702 || fg[2] == 845) {
                    // обои без покраски	-300*S общ
                    c_oboi = 0;
                }
                else if (fg[2] == 651 || fg[2] == 638 || fg[2] == 639 || fg[2] == 640 || fg[2] == 679 || fg[2] == 680 || fg[2] == 681) {
                    // обои без покраски	-300*S общ
                    // обои с покраской	+390*S общ
                    // обои с покраской	+390*S общ
                    c_oboi = +fg[4] * (+area);
                }

            });
        }
        //console.log(c_oboi);
        //вывод значений
        c_id = [702, 845];
        c_id.forEach(function(item) {
            //console.log(item);
            data_c_oboi = 0;
            $('.name_o'+item+' #cal').text(data_c_oboi);
        });

        c_id = [651, 638, 639, 640, 679, 680, 681];
        c_id.forEach(function(item) {
            pz = $('.op a[data-id_categ="'+item+'"]').attr('data-caption');
            //console.log(pz);
            data_c_oboi= pz * (+area);
            $('.name_o'+item+' #cal').text(data_c_oboi);
        });




        //двери
        if(typeof gos !== "undefined"){
            $(gos).each(function () {
                fg = $(this).attr('data-id_categ_dver');
                fg = fg.split(';');
                if (fg[2] == 585) {
                    // экошпон	база
                    if ($(this).attr('data-dver')) {
                        dv_a = $(this).attr('data-dver');
                    }
                    else {
                        dv_a = 1;
                    }

                    c_dver = +fg[4] * dv_a;
                }
                else if (fg[2] == 586 || fg[2] == 587) {
                    // хайтек	+2400* кол-во дверей
                    // эмаль	+2850*кол-во дверей
                    if ($(this).attr('data-dver')) {
                        dv_a = $(this).attr('data-dver');
                    }
                    else {
                        dv_a = 1;
                    }
                    c_dver = +fg[4] * dv_a;
                }
            });
        }
        else {
            $('#menu-l > li> a[id-post="645"]').each(function () {
                fg = $(this).attr('data-id_categ_dver');
                fg = fg.split(';');
                if (fg[2] == 585) {
                    // экошпон	база
                    if ($(this).attr('data-dver')) {
                        dv_a = $(this).attr('data-dver');
                    }
                    else {
                        dv_a = 1;
                    }

                    c_dver = +fg[4] * dv_a;
                }
                else if (fg[2] == 586 || fg[2] == 587) {
                    // хайтек	+2400* кол-во дверей
                    // эмаль	+2850*кол-во дверей
                    if ($(this).attr('data-dver')) {
                        dv_a = $(this).attr('data-dver');
                    }
                    else {
                        dv_a = 1;
                    }
                    c_dver = +fg[4] * dv_a;
                }
            });
        }
        //console.log(c_dver);
        if(typeof pri !== "undefined"){
            $(pri).each(function () {
                fg = $(this).attr('data-id_categ_dver_v');
                fg = fg.split(';');
                if (fg[2] == 855) {
                    // вход	база
                    c_dver_v = +fg[4];
                }

            });
        }
        else {
            $('#menu-l > li> a[id-post="559"]').each(function () {
                fg = $(this).attr('data-id_categ_dver_v');
                fg = fg.split(';');
                if (fg[2] == 855) {
                    // вход	база
                    c_dver_v = +fg[4];
                }

            });
        }
        //console.log(c_dver_v);
        //вывод значений
        c_id = [585];
        c_id.forEach(function(item) {
            pz = $('.op a[data-id_categ="'+c_id+'"]').attr('data-caption');
            pz_a = $('.op a[data-id_categ="'+c_id+'"].active').attr('data-caption');
            if(pz_a){pz=pz_a;}
            if(typeof dv_a == "undefined"){
                dv_a=1;
            }

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
        if(typeof gos !== "undefined") {
            $(gos).each(function () {
                //$('#menu-l > li> a.active[data-id_categ_plin]').each(function() {
                fg = $(this).attr('data-id_categ_plin');
                fg = fg.split(';');
                if (fg[2] == 655 || fg[2] == 656 || fg[2] == 657 || fg[2] == 658) {
                    //цвет двери	+160*S общ
                    c_plin = +fg[4] * (+area);
                }
            });
        }
        else {
            $('#menu-l > li> a[id-post="645"]').each(function () {
                //$('#menu-l > li> a.active[data-id_categ_plin]').each(function() {
                fg = $(this).attr('data-id_categ_plin');
                fg = fg.split(';');
                if (fg[2] == 655 || fg[2] == 656 || fg[2] == 657 || fg[2] == 658) {
                    //цвет двери	+160*S общ
                    c_plin = +fg[4] * (+area);
                }
            });
        }
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
                c_poto = c_poto.toFixed(0);

                //разделение
                c_poto_opc = c_poto*0.5;
                c_poto= c_poto*0.5;
                c_poto = c_poto.toFixed(0);
               // console.log(c_poto_opc);
            }
        });


        //потолок светильники
        if(typeof gos !== "undefined") {
            $(gos).each(function () {
                fg = $(this).attr('data-id_categ_poto');
                fg = fg.split(';');
                //console.log(fg );
                if (fg[2] == 862 || fg[2] == 863) {
                    //натяжной	база
                    c_poto += +fg[4];
                }
            });
        }
        else {
            $('#menu-l > li.visable > a[data-id_categ_poto]').each(function () {
                fg = $(this).attr('data-id_categ_poto');
                fg = fg.split(';');
                //console.log(fg );
                if (fg[2] == 862 || fg[2] == 863) {
                    //натяжной	база
                    c_poto += +fg[4];
                }
            });
        }
        //console.log(c_poto);


        //карниз
        k_poto =0;
        k_poto_opc = 0;
        c_poto_s= 0;

        if(typeof allsm !== "undefined") {


            //$('#menu-l > li.visable > a[data-id_categ_poto_p]').each(function () {
           $.each(allsm, function (i, z) {
                id_e = $(z).attr('id-post');

                fg = $(z).attr('data-id_categ_poto_p');
                pot = $(z).attr('data-potol');
                if (typeof pot == "undefined") {
                    pot = 1;
                }
              //  console.log(z);
               //console.log(fg);
               if(typeof fg !== "undefined") {
                   fg = fg.split(';');

                   if (fg[2] == 590) {
                       k_poto += +fg[4] * pot;

                       //разделение
                       k_poto_opc = k_poto * 0.2;
                       k_poto = k_poto * 0.8;
                       // console.log(k_poto_opc);

                   }
                   if (fg[2] == 701) {
                       c_poto_s += +fg[4];
                   }
               }

            });
        }
        else {
            $('#menu-l > li.visable > a[data-id_categ_poto_p]').each(function () {


                id_e = $(this).attr('id-post');

                fg = $(this).attr('data-id_categ_poto_p');
                pot = $(this).attr('data-potol');
                if (typeof pot == "undefined") {
                    pot = 1;
                }
                fg = fg.split(';');

                if (fg[2] == 590) {
                    k_poto += +fg[4] * pot;

                    //разделение
                    k_poto_opc = k_poto * 0.2;
                    k_poto = k_poto * 0.8;
                    // console.log(k_poto_opc);

                }
                if (fg[2] == 701) {
                    c_poto_s += +fg[4];
                }

            });
        }

        //console.log(k_poto);
       // console.log(c_poto_s);

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
       // console.log(data_c_poto);





        //акценты плюсуем
        vva1 = 0;
        vva2 = 0;
        vva3 = 0;

        if(typeof allsm !== "undefined") {


           $.each(allsm, function (i, z) {
            //$('#menu-l > li.visable > a[data-id_categ_akc]').each(function () {
                fg = $(z).attr('data-id_categ_akc');
                akk = $(z).attr('data-akc');
                //console.log(akk);
                if (typeof akk == "undefined") {
                    akk = 1;
                }

               if(typeof fg !== "undefined") {
                   fg = fg.split(';');

                   if (fg[2] == 736 || fg[2] == 592 || fg[2] == 593) {
                       vva1 += +height * fg[4] * akk;
                       //console.log(vva1);
                       //разделение
                       vva1_opc = vva1 * 0.3;
                       vva1 = vva1 * 0.7;
                       // console.log(vva1_opc);
                       vva3_opc = 0;
                   }
                   else if (fg[2] == 591) {
                       vva1 += +height * fg[4] * akk;
                       vva1_opc = vva1 * 0.2;
                       vva1 = vva1 * 0.8;
                       // console.log(vva1_opc);
                       vva3_opc = 0;
                   }
                   else if (fg[2] == 594) {
                       vva1 += +height * fg[4] * akk;
                       vva3_opc = 0;
                   }
                   else if (fg[2] == 738) {
                       //Покраска	база+500р
                       vva2 += +fg[4];
                   }

                   else if (fg[2] == 820) {
                       //Молдинги	+(кол-во метров длины стены)*2800
                       vva3 += +fg[4] * akk;
                       vva3_opc = vva3 * 0.2;
                       vva3 = vva3 * 0.8;
                       // console.log(vva3_opc);
                       vva1_opc = 0;
                   }
               }
            });
        }
        else {
            $('#menu-l > li.visable > a[data-id_categ_akc]').each(function () {
                fg = $(this).attr('data-id_categ_akc');
                akk = $(this).attr('data-akc');
                //console.log(akk);
                if (typeof akk == "undefined") {
                    akk = 1;
                }
                fg = fg.split(';');

                if (fg[2] == 736 || fg[2] == 592 || fg[2] == 593) {
                    vva1 += +height * fg[4] * akk;
                    //console.log(vva1);
                    //разделение
                    vva1_opc = vva1 * 0.3;
                    vva1 = vva1 * 0.7;
                    // console.log(vva1_opc);
                    vva3_opc = 0;
                }
                else if (fg[2] == 591) {
                    vva1 += +height * fg[4] * akk;
                    vva1_opc = vva1 * 0.2;
                    vva1 = vva1 * 0.8;
                    // console.log(vva1_opc);
                    vva3_opc = 0;
                }
                else if (fg[2] == 594) {
                    vva1 += +height * fg[4] * akk;
                    vva3_opc = 0;
                }
                else if (fg[2] == 738) {
                    //Покраска	база+500р
                    vva2 += +fg[4];
                }

                else if (fg[2] == 820) {
                    //Молдинги	+(кол-во метров длины стены)*2800
                    vva3 += +fg[4] * akk;
                    vva3_opc = vva3 * 0.2;
                    vva3 = vva3 * 0.8;
                    // console.log(vva3_opc);
                    vva1_opc = 0;
                }
            });
        }
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
            //console.log(data_c_akc);
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
        if(typeof gos !== "undefined") {
            $(gos).each(function() {
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
        }
        else{
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
        }

        //радиатор
        if(typeof gos !== "undefined") {
            $(gos).each(function () {
                fg = $(this).attr('data-id_categ_ing');
                fg = fg.split(';');
                //console.log(fg );
                if (fg[2] == 597) {
                    c_ing = +fg[4] * (+area - +s_area);
                    c_ing = parseFloat(c_ing.toFixed(2));
                    //c_ing= c_ing.toFixed(2); //300.23
                    //c_ing = c_ing.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                }
            });

        }
        else {
            $('#menu-l > li> a[id-post="645"]').each(function () {
                fg = $(this).attr('data-id_categ_ing');
                fg = fg.split(';');
                //console.log(fg );
                if (fg[2] == 597) {
                    c_ing = +fg[4] * (+area - +s_area);
                    c_ing = parseFloat(c_ing.toFixed(2));
                    //c_ing= c_ing.toFixed(2); //300.23
                    //c_ing = c_ing.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                }
            });
        }
        //console.log(c_ing)

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

        if(typeof san !== "undefined") {
            $(san).each(function () {
                fg = $(this).attr('data-id_categ_pol');
                fg = fg.split(';');

                if (fg[2] == 860) {
                    //-2500*S сан* H/2,5
                    pol_s = +fg[4] * s_area * height / 2.45;
                }
                else if (fg[2] == 861) {
                    pol_s = 0;
                }
            });
        }
        else {
            $('#menu-l > li.visable > a[data-id_categ_pol]').each(function () {
                fg = $(this).attr('data-id_categ_pol');
                fg = fg.split(';');

                if (fg[2] == 860) {
                    //-2500*S сан* H/2,5
                    pol_s = +fg[4] * s_area * height / 2.45;
                }
                else if (fg[2] == 861) {
                    pol_s = 0;
                }
            });
        }

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
        //console.log($('#menu-l > li.visable > a[data-id_categ_san_1]'));
        if(typeof san !== "undefined") {
            $(san).each(function () {
                fg = $(this).attr('data-id_categ_san_1');
                fg = fg.split(';');

                if (fg[2] == 865) {
                    //-2500*S сан* H/2,5
                    san_1 += +fg[4];
                }
            });
        }
        else {
            $('#menu-l > li.visable > a[data-id_categ_san_1]').each(function () {
                fg = $(this).attr('data-id_categ_san_1');
                fg = fg.split(';');

                if (fg[2] == 865) {
                    //-2500*S сан* H/2,5
                    san_1 += +fg[4];
                }
            });
        }

        san_2 =0;
        if(typeof san !== "undefined") {
            $(san).each(function () {
                fg = $(this).attr('data-id_categ_san_2');
                fg = fg.split(';');
                //console.log(fg);
                if (fg[2] == 866) {
                    //-2500*S сан* H/2,5
                    san_2 += +fg[4];
                }
            });
        }
        else {
            $('#menu-l > li.visable > a[data-id_categ_san_2]').each(function () {
                fg = $(this).attr('data-id_categ_san_2');
                fg = fg.split(';');
                //console.log(fg);
                if (fg[2] == 866) {
                    //-2500*S сан* H/2,5
                    san_2 += +fg[4];
                }
            });
        }
        san_3 =0;
        if(typeof san !== "undefined") {
            $(san).each(function () {
                fg = $(this).attr('data-id_categ_san_3');
                fg = fg.split(';');

                if (fg[2] == 867) {
                    //-2500*S сан* H/2,5
                    san_3 += +fg[4];
                }
            });
        }
        else {
            $('#menu-l > li.visable > a[data-id_categ_san_3]').each(function () {
                fg = $(this).attr('data-id_categ_san_3');
                fg = fg.split(';');

                if (fg[2] == 867) {
                    //-2500*S сан* H/2,5
                    san_3 += +fg[4];
                }
            });
        }
        san_4 =0;
        if(typeof san !== "undefined") {
            $(san).each(function () {
                fg = $(this).attr('data-id_categ_san_4');
                fg = fg.split(';');

                if (fg[2] == 868) {
                    //-2500*S сан* H/2,5
                    san_4 += +fg[4];
                }
            });
        }
        else {
            $('#menu-l > li.visable > a[data-id_categ_san_4]').each(function () {
                fg = $(this).attr('data-id_categ_san_4');
                fg = fg.split(';');

                if (fg[2] == 868) {
                    //-2500*S сан* H/2,5
                    san_4 += +fg[4];
                }
            });
        }


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
    //console.log(с_mater+'!!!!!!!');

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
        //console.log(c_pol_opc);
    }
    //добавляем опцию со втор стр
    rez_pol = rez_pol + so1;


    //Работы по потолку	S общ*400
    rez_poto = +area *400;
    if(typeof c_poto_opc != "undefined"){
        rez_poto = rez_poto + c_poto_opc;
       // console.log(c_poto_opc);
    }
    if(typeof k_poto_opc != "undefined"){
        rez_poto = rez_poto + k_poto_opc;
        //console.log(k_poto_opc);
    }



    //Работы по стенам	((S общ-S сан)*3765+S сан*2730)*H/2,45
    rez_sten = ((+area - +s_area)*3765 + +s_area*2730)* +height / 2.45;

    if(typeof vva1_opc != "undefined"){
        rez_sten = rez_sten + vva1_opc;
       // console.log(vva1_opc);
    }
    if(typeof vva3_opc != "undefined"){
        rez_sten = rez_sten + vva3_opc;
        //console.log(vva3_opc);
    }
    //console.log(rez_sten);
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


    rabot = rez_pol + rez_poto + rez_sten + rez_elec + rez_ob;
    rabot = rabot *1;
    rabots = rabot.toFixed(0); //300.23
    rabots = rabots.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    rabots = rabots + ' руб';



    c_step2 = so4 + so5 + so7_dop + so8 + so9_dop + so10 + so11 + so12 + so13 + so14_dop  + so15_dop + so16_dop + so17 + so18 + so22;
    //c_step2 = so1 + so2 + so3 + so4 + so5 + so6 + so7 + so8 + so9 + so10 + so11 + so12 + so13 + so14  + so15 + so16 + so17 + so18 + so22;
   // console.log(c_step2);


    c_total= +rez_pol + +rez_poto + +rez_sten + +rez_elec + +rez_sant + +rez_ob + +rez_cher + +rez_ches + +rez_san +с_mater +c_step2;
    //console.log(с_mater);
   // console.log(c_total);

    с_two = с_mater +c_step2;
    с_two = с_two.toFixed(0); //300.23
    с_two = с_two.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    с_two = с_two + ' P.';


    //за квадратн метер
    //c_mkv = c_total/area;
   // c_mkv = c_mkv.toFixed(0); //300.23
   // c_mkv = c_mkv.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
   // c_mkv = c_mkv + ' P.';
   // console.log(c_mkv);

    c_total = c_total.toFixed(0); //300.23
    c_totals = c_total.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    c_totals = c_totals + ' P.';


    jQuery(".st10>em>em").text(с_two);
    jQuery("#pric").text(c_totals);
    jQuery(".it em>em").text(c_totals);

   // console.log(c_totals);
    c_pol_p=0;
    vva1 = 0;
    vva2 = 0;
    vva3 = 0;
    san_1 = 0;
    san_2 = 0;
    san_3 = 0;
    san_4 = 0;
    c_poto_s = 0;
    k_poto = 0;
    c_poto = 0;
    rez_sten = 0;
    vva1_opc = 0;
    vva3_opc =0;
   // с_two =0;
   // c_totals = 0;

}


