<?php 
/*
Template Name: Выбор дизайна
*/
?>

<?php get_header(); ?>
<style>
.menu-block.container a.btn-order {
    display: none;
}
.kom.row.container {
    padding-right: 15px;
    margin: 0 auto;
    padding-left: 0;
}
.text-k .p {
    padding-bottom: 25px;
}
</style>
   
   <div class="header-m">
        <div class="header container">
            <span id="vvs">Выбор стиля</span>
        </div>
    </div>

	<div class="form-select ooo">
			<p>Введите данные о квартире</p>
                <form id="param">
                    <div class="calc-apartment">
                        <div class="input calc-apartment__el">
                            <label for="rooms">Площаль квартиры</label>
                            <input type="text" class="number input--number calc-flat" name="area" id="area" data-calc="area" placeholder="25">
                            <div class="input__error area--error"> Максимальная площадь 500 м2</div>
                        </div>
                        <div class="input calc-apartment__el">
                            <label for="rooms">Высота потолка</label>
                            <input type="text" class="number input--number calc-flat" name="height" id="height" data-calc="height" placeholder="2,5">
                            <div class="input__error height--error"> Высота потолков от 2 до 4м</div>
                        </div>
                        <div class="input calc-apartment__el">
                            <label for="rooms">Площадь санузлов</label>
                            <input type="text" class="number input--number calc-flat" name="s_area" id="s_area" data-calc="s_area" placeholder="3">
                            <div class="input__error s_area--error"> площадь от 2 до 40 м</div>
                            <div class="input__error s_area--error-squer"> Не может быть больше площади квартиры</div>
                        </div>
                        <div class="input calc-apartment__el">
                            <label for="rooms">Санузел</label>
                            <select name="bathrooms_type" id="bathrooms_type" class="select-beauty" style="display: none;">
                                <option value="v1" selected="selected" data-display="Общий">Общий</option>
                                <option value="v2">Раздельный</option>
                                <option value="v3">Два санузла</option>
                            </select>
                        </div>
                    </div>
			
			</form>
            </div>
			

                <div class="kom row container">




                    <div class="item-k">
                        <div class="col-lg-8 col-md-8 col-sm-12 sl-k">
                            <?php putRevSlider("kom6") ?>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 te-k">
                            <div class="text-k">
                                <div class="big-k x6">
                                    <div class="bsl">
                                        <div class="str-l"></div>
                                        <div class="str-r"></div>
                                    </div>
                                    <div class="info-s"><span class="se-s">1</span> / <span class="se-k">5</span> </div>
                                </div>
                                <h3>Индивидуальный</h3>
                                <div class="p"><p>Используйте все возможные инструменты редактора
                                        и создавайте интерьер который подойдет именно вам.</p></div>
                                <div class="prplusn b6">
                                    <div class="fle">Стоимость работ </div>
                                    <div  class="fra"><span>7 000</span>руб/м<sup>2</sup></div>
                                </div>
                                <div class="t-ce">
                                    <a href="/editor?category=6"  class="btn-select" >Выбрать стиль</a>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div class="item-k">
                        <div class="col-lg-8 col-md-8 col-sm-12 sl-k">
                            <?php putRevSlider("kom1") ?>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 te-k">
                            <div class="text-k">
                                <div class="big-k x1">
                                    <div class="bsl">
                                        <div class="str-l"></div>
                                        <div class="str-r"></div>
                                    </div>
                                    <div class="info-s"><span class="se-s">1</span> / <span class="se-k">5</span> </div>
                                </div>
                                <h3>Скандинавский</h3>
                                <div class="p"><p> Скандинавский стиль - это микс белых окрашенных стен, солнечного света и ярких акцентов. </p></div>
                                <div class="prplusn b1">
                                    <div class="fle">Стоимость работ </div>
                                    <div  class="fra"><span>7 000</span>руб/м<sup>2</sup></div>
                                </div>
                                <div class="t-ce">
                                    <a href="/editor?category=1"  class="btn-select" >Выбрать стиль</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="item-k">
                        <div class="col-lg-8 col-md-8 col-sm-12 sl-k">
                            <?php putRevSlider("kom2") ?>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 te-k">
                            <div class="text-k">
                                <div class="big-k  x2">
                                    <div class="bsl">
                                        <div class="str-l"></div>
                                        <div class="str-r"></div>
                                    </div>
                                    <div class="info-s"><span class="se-s">1</span> / <span class="se-k">5</span> </div>
                                </div>
                                <h3>Классика</h3>
                                <div class="p"><p>
                                        Современная классика объединяет роскошь лепного декора и лаконизм простых крашеных стен.</p></div>
                                <div class="prplusn b2">
                                    <div class="fle">Стоимость работ </div>
                                    <div  class="fra"><span>7 000</span>руб/м<sup>2</sup></div>
                                </div>
                                <div class="t-ce">
                                    <a href="/editor?category=2"  class="btn-select" >Выбрать стиль</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="item-k">
                        <div class="col-lg-8 col-md-8 col-sm-12 sl-k">
                            <?php putRevSlider("kom3") ?>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 te-k">
                            <div class="text-k">
                                <div class="big-k  x3">
                                    <div class="bsl">
                                        <div class="str-l"></div>
                                        <div class="str-r"></div>
                                    </div>
                                    <div class="info-s"><span class="se-s">1</span> / <span class="se-k">5</span> </div>
                                </div>
                                <h3>Современный</h3>
                                <div class="p"><p>Современный стиль подобно конструктору может сочетать в себе черты всех возможных стилей
                                        в минималистичном окружении.</p></div>
                                <div class="prplusn b3">
                                    <div class="fle">Стоимость работ </div>
                                    <div  class="fra"><span>7 000</span>руб/м<sup>2</sup></div>
                                </div>
                                <div class="t-ce">
                                    <a href="/editor?category=3"  class="btn-select" >Выбрать стиль</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="item-k">
                        <div class="col-lg-8 col-md-8 col-sm-12 sl-k">
                            <?php putRevSlider("kom4") ?>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 te-k">
                            <div class="text-k">
                                <div class="big-k  x4">
                                    <div class="bsl">
                                        <div class="str-l"></div>
                                        <div class="str-r"></div>
                                    </div>
                                    <div class="info-s"><span class="se-s">1</span> / <span class="se-k">5</span> </div>
                                </div>
                                <h3>Лофт</h3>
                                <div class="p"><p> В интерьере квартир крайне популярным стал благодаря акцентным кирпичным стенам и стильной мебели из дерева и металла. </p></div>
                                <div class="prplusn b4">
                                    <div class="fle">Стоимость работ </div>
                                    <div  class="fra"><span>7 000</span>руб/м<sup>2</sup></div>
                                </div>
                                <div class="t-ce">
                                    <a href="/editor?category=4"  class="btn-select" >Выбрать стиль</a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="item-k">
                        <div class="col-lg-8 col-md-8 col-sm-12 sl-k">
                            <?php putRevSlider("kom5") ?>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 te-k">
                            <div class="text-k">
                                <div class="big-k  x5">
                                    <div class="bsl">
                                        <div class="str-l"></div>
                                        <div class="str-r"></div>
                                    </div>
                                    <div class="info-s"><span class="se-s">1</span> / <span class="se-k">5</span> </div>
                                </div>
                                <h3>Эко</h3>
                                <div class="p"><p> Эко является тематическим стилем, главная задача которого - создать ощущение природы в городской квартире.</p></div>
                                <div class="prplusn b5">
                                    <div class="fle">Стоимость работ </div>
                                    <div  class="fra"><span>7 000</span>руб/м<sup>2</sup></div>
                                </div>
                                <div class="t-ce">
                                    <a href="/editor?category=5"  class="btn-select" >Выбрать стиль</a>
                                </div>

                            </div>
                        </div>
                    </div>








                </div>





<?php
function toprice($id, $mkey)
{
    global $wpdb;
    $zn = $wpdb->get_results("SELECT meta_value FROM pr_postmeta WHERE post_id = $id AND meta_key = '$mkey'");
    $txt = str_replace(array("\r","\n"),"",$zn['0']->meta_value);
    echo $txt;

}
?>


<script type="text/javascript" src="/wp-content/themes/produmano/editor/fun_calc.js"></script>
<script type="text/javascript" src="/wp-content/themes/produmano/editor/function.js"></script>


<script>
    //листание слайдов
    // console.log(revapi4.revmaxslide());







    jQuery(document).on('click','.ce', function() {
        console.log('sss');
        jQuery('.vi a')[0].click();
    });
    jQuery(document).on('click','.but_p', function() {
        console.log('sss');
        jQuery('.vi a')[0].click();
    });




    function fun_c(g_area,g_height, g_s_area) {
        inf_cat = '645';
        c_rad = 0;
        //g_area = g_area;
        //g_height = 3;
        //g_s_area = 3;
        // g_bathrooms_type = 'v1';
        <?php
        $g[] = array("гостинная", "кухня", "прихожая", "санузел_общ");
        $g[] =  array("гостинная_копировать", "кухня_копировать", "прихожая_копировать", "санузел_общ_копировать");
        $g[] =  array("гостинная_копировать2", "кухня_копировать2", "прихожая_копировать2", "санузел_общ_копировать2");
        $g[] =  array("гостинная_копировать3", "кухня_копировать3", "прихожая_копировать3", "санузел_общ_копировать3");
        $g[] =  array("гостинная_копировать4", "кухня_копировать4", "прихожая_копировать4", "санузел_общ_копировать4");
        $g[] =  array("гостинная_копировать5", "кухня_копировать5", "прихожая_копировать5", "санузел_общ_копировать5");
        $ii =0;
        foreach ($g as $value) {
        $ii++;

        $dd1 = $value[0];
        $dd2 = $value[1];
        $dd3 = $value[2];
        $dd4 = $value[3];
        ?>

        gos = '<?php toprice('560', $dd1); ?>';
        kuh = '<?php toprice('560', $dd2); ?>';
        pri = '<?php toprice('560', $dd3); ?>';
        san = '<?php toprice('560', $dd4); ?>';

        allsm = {};
        allsm[0] = gos;
        allsm[1] = kuh;
        allsm[2] = pri;
        allsm[3] = san;
        //console.log(allsm);
        fun_calc();
        rex<?php echo $ii; ?> = c_totals;
        dop<?php echo $ii; ?> = rabot;
        ar = area*1;


        mkv<?php echo $ii; ?> = dop<?php echo $ii; ?> / ar;
        mkv<?php echo $ii; ?> = mkv<?php echo $ii; ?>.toFixed(0); //300.23
        mkv<?php echo $ii; ?> = mkv<?php echo $ii; ?>.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        mkv<?php echo $ii; ?> = mkv<?php echo $ii; ?> + ' ';


        //console.log(ar);

        <?php
        }
        ?>


        jQuery(".basic1 span").text(rex1);
        jQuery(".basic2 span").text(rex2);
        jQuery(".basic3 span").text(rex3);
        jQuery(".basic4 span").text(rex4);
        jQuery(".basic5 span").text(rex5);
        jQuery(".basic6 span").text(rex6);
        jQuery(".ddx2 > span").text(rex6);


        jQuery(".dd4").text(mkv6);

        jQuery(".b1 span").text(mkv1);
        jQuery(".b2 span").text(mkv2);
        jQuery(".b3 span").text(mkv3);
        jQuery(".b4 span").text(mkv4);
        jQuery(".b5 span").text(mkv5);
        jQuery(".b6 span").text(mkv6);



    }





    //ca(40, '3', '3');

</script>

<?php get_footer(); ?>

<script>
    //листание слайдов
    setTimeout(function() {
        //console.log(revapi4.revmaxslide());
        jQuery('.x1 .se-k').text(revapi4.revmaxslide());
    }, 1000);
    jQuery(document).on('click','.x1 .str-l', function() {
        revapi4.revprev();
        setTimeout(function() {
            jQuery('.x1 .se-s').text(revapi4.revcurrentslide());
        }, 1000);
    });
    jQuery(document).on('click','.x1 .str-r', function() {
        revapi4.revnext();
        setTimeout(function() {
            jQuery('.x1 .se-s').text(revapi4.revcurrentslide());
        }, 1000);
    });



    //листание слайдов
    setTimeout(function() {
        //console.log(revapi4.revmaxslide());
        jQuery('.x2 .se-k').text(revapi5.revmaxslide());
    }, 1000);
    jQuery(document).on('click','.x2 .str-l', function() {
        revapi5.revprev();
        setTimeout(function() {
            jQuery('.x2 .se-s').text(revapi5.revcurrentslide());
        }, 1000);
    });
    jQuery(document).on('click','.x2 .str-r', function() {
        revapi5.revnext();
        setTimeout(function() {
            jQuery('.x2 .se-s').text(revapi5.revcurrentslide());
        }, 1000);
    });





    //листание слайдов
    setTimeout(function() {
        //console.log(revapi4.revmaxslide());
        jQuery('.x3 .se-k').text(revapi6.revmaxslide());
    }, 1000);
    jQuery(document).on('click','.x3 .str-l', function() {
        revapi6.revprev();
        setTimeout(function() {
            jQuery('.x3 .se-s').text(revapi6.revcurrentslide());
        }, 1000);
    });
    jQuery(document).on('click','.x3 .str-r', function() {
        revapi6.revnext();
        setTimeout(function() {
            jQuery('.x3 .se-s').text(revapi6.revcurrentslide());
        }, 1000);
    });



    //листание слайдов
    setTimeout(function() {
        //console.log(revapi4.revmaxslide());
        jQuery('.x4 .se-k').text(revapi7.revmaxslide());
    }, 1000);
    jQuery(document).on('click','.x4 .str-l', function() {
        revapi7.revprev();
        setTimeout(function() {
            jQuery('.x4 .se-s').text(revapi7.revcurrentslide());
        }, 1000);
    });
    jQuery(document).on('click','.x4 .str-r', function() {
        revapi7.revnext();
        setTimeout(function() {
            jQuery('.x4 .se-s').text(revapi7.revcurrentslide());
        }, 1000);
    });


    //листание слайдов
    setTimeout(function() {
        //console.log(revapi4.revmaxslide());
        jQuery('.x5 .se-k').text(revapi8.revmaxslide());
    }, 1000);
    jQuery(document).on('click','.x5 .str-l', function() {
        revapi8.revprev();
        setTimeout(function() {
            jQuery('.x5 .se-s').text(revapi8.revcurrentslide());
        }, 1000);
    });
    jQuery(document).on('click','.x5 .str-r', function() {
        revapi8.revnext();
        setTimeout(function() {
            jQuery('.x5 .se-s').text(revapi8.revcurrentslide());
        }, 1000);
    });


    //листание слайдов
    setTimeout(function() {
        //console.log(revapi4.revmaxslide());
        jQuery('.x6 .se-k').text(revapi9.revmaxslide());
    }, 1000);
    jQuery(document).on('click','.x6 .str-l', function() {
        revapi9.revprev();
        setTimeout(function() {
            jQuery('.x6 .se-s').text(revapi9.revcurrentslide());
        }, 1000);
    });
    jQuery(document).on('click','.x6 .str-r', function() {
        revapi9.revnext();
        setTimeout(function() {
            jQuery('.x6 .se-s').text(revapi9.revcurrentslide());
        }, 1000);
    });



</script>


