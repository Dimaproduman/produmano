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
			
			<div id="vdesing" class="container">
				<div class="col-lg-12 col-md-12">
                    <div class="item">
                        <div class="top_d">
                            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
                                ИНДИВИДУАЛЬНЫЙ
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
                                <div class="price basic6">от <span>0</span></div>
                            </div>
                        </div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d6.jpg" alt="">
                        <div class="top_d">
                            <div class="col-lg-8 col-md-8 col-sm-8 dd1">
                                <p>Индивидуальный стиль - это отражение ваших идей и предпочтений. Используйте все возможные инструменты редактора и создавайте интерьер, который подойдет именно вам.</p>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
                                <a href="/editor?category=6" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
                            </div>
                        </div>

                    </div>
                    <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							СКАНДИНАВСКИЙ
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<span class="vd1"><div class="price basic1"><span>0</span></div></span>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d1.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Скандинавский стиль - это микс белых окрашенных стен, солнечного света
и ярких акцентов. Традиционные черты стилю добавляют классические белые двери и высокий плинтус.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=1" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							КЛАССИКА
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic2"><span>0</span></div>
							</div>
						</div>
                        <img src="/wp-content/uploads/2017/04/klassika_2.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Современная классика объединяет роскошь лепного декора и лаконизм простых крашеных стен. На полу используется инженерная доска из дуба, на стенах декоративная штукатурка, крашеный лепной декор и классические обои.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=2" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order"  data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							СОВРЕМЕННЫЙ
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic3"><span>0</span></div>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d3.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Современный стиль, подобно конструктору, может сочетать в себе черты всех возможных стилей в минималистичном окружении. Для стиля характерны яркие акцентные стены, удобная и уютная мебель и, конечно же, ваши индивидуальные предпочтения.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=3" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							ЛОФТ
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic4"><span>0</span></div>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d4.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Стиль лофт брутальный и урбанистичный по происхождению. В интерьере квартир крайне популярным стал благодаря акцентным кирпичным стенам и стильной мебели из дерева и металла.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=4" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							ЭКО
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic5"><span>0</span></div>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d5.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Эко является тематическим стилем, главная задача которого – создать ощущение природы в городской квартире. В отделке интерьера применяется натуральное дерево, в декоре стен преобладают природные нейтральные цвета и экологические мотивы.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=5" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
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
<script>
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

        <?php
        }
        ?>


        jQuery(".basic1 span").text(rex1);
        jQuery(".basic2 span").text(rex2);
        jQuery(".basic3 span").text(rex3);
        jQuery(".basic4 span").text(rex4);
        jQuery(".basic5 span").text(rex5);
        jQuery(".basic6 span").text(rex6);

        jQuery(".b1 span").text(dop1);
        jQuery(".b2 span").text(dop2);
        jQuery(".b3 span").text(dop3);
        jQuery(".b4 span").text(dop4);
        jQuery(".b5 span").text(dop5);
        jQuery(".b6 span").text(dop6);
    }





    //ca(40, '3', '3');

</script>
<script type="text/javascript" src="/wp-content/themes/produmano/editor/fun_calc.js"></script>
<script type="text/javascript" src="/wp-content/themes/produmano/editor/function.js"></script>


<?php get_footer(); ?> 