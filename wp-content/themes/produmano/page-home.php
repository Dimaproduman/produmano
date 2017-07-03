<?php 
/*
Template Name: Главная
*/
?>

<?php get_header(); ?>


<div class="preim ">
	<div class="container">
		<div class="col-lg-4 col-md-4 col-sm-4 it-m">
			<div><img src="/wp-content/themes/produmano/images/pp1.png"></div>
			<p>Подобраны материалы<br>
и сантехника</p>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-4 it-m">
			<div><img src="/wp-content/themes/produmano/images/pp2.png"></div>
			<p>Гарантия 3 года<br>
на инженерные коммуникации</p>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-4 it-m">
			<div><img src="/wp-content/themes/produmano/images/pp3.png"></div>
			<p>На 15% дешевле рынка за счет<br>
автоматизированной системы работы</p>
		</div>
	</div>
</div>	




<div class="linee"  id="di" style="    width: 100%;
    height: 10px;
    background: #f9f8f8;
    margin-top: 60px;"></div>
      <div class="select-design-main">
        <div class="select-design-block container">
            <h2>Выберите стиль</h2>
            <div class="form-select">
			<p>Введите данные о квартире</p>
                <form id="param">
                <div class="calc-apartment">
                    <div class="input calc-apartment__el">
                        <label for="rooms">Площаль квартиры</label>
                        <input type="text" class="number input--number calc-flat" name="area" id="area" data-calc="area"  placeholder="25">
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
                        <select name="bathrooms_type" id="bathrooms_type" class="select-beauty">
                            <option value="v1" selected="selected" data-display="Общий">Общий</option>
                            <option value="v2">Раздельный</option>
                            <option value="v3">Два санузла</option>
                        </select>
                    </div>
                </div>
			</form>
            </div>

            <div class="design-plans row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="item">
                        <img src="<?php bloginfo('template_url'); ?>/images/va1.jpg" alt="">
                        <div class="text">
                            <h3>Скандинавский</h3>
                            <div class="p"><p> Скандинавский стиль - это микс белых окрашенных стен, солнечного света и ярких акцентов. </p></div>
                            <div class="price basic1"><span>250 000</span></div>
							<div class="prplus b1">в том числе работы <span>200 000</span></div>
                            <a href="#" data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Получить смету</a>
                            <a href="/editor?category=1" class="li" data-type="individual">посмотреть стиль</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="item">
                        <img src="<?php bloginfo('template_url'); ?>/images/va2.jpg" alt="">
                        <div class="text">
                            <h3>Классика</h3>
                            <div class="p"><p> 
Современная классика объединяет роскошь лепного декора и лаконизм простых крашеных стен.</p></div>
                            <div class="price basic2"><span>250 000</span></div>
							<div class="prplus b2">в том числе работы <span>200 000</span></div>
                            <a href="#"  data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Получить смету</a>
                            <a href="/editor?category=2" class="li" data-type="individual">посмотреть стиль</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="item">
                        <img src="<?php bloginfo('template_url'); ?>/images/va3.jpg" alt="">
                        <div class="text">
                            <h3>Современный</h3>
                            <div class="p"><p>Современный стиль подобно конструктору может сочетать в себе черты всех возможных стилей
в минималистичном окружении.</p></div>
                            <div class="price basic3"><span>250 000</span></div>
							<div class="prplus b3">в том числе работы <span>200 000</span></div>
                            <a href="#" data-target="#modCalls" data-toggle="modal"  class="btn-select" data-type="individual">Получить смету</a>
                            <a href="/editor?category=3" class="li" data-type="individual">посмотреть стиль</a>
                        </div>
                    </div>
                </div>
				
				
				<div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="item">
                        <img src="<?php bloginfo('template_url'); ?>/images/va4.jpg" alt="">
                        <div class="text">
                            <h3>Лофт</h3>
                            <div class="p"><p> В интерьере квартир крайне популярным стал благодаря акцентным кирпичным стенам и стильной мебели из дерева и металла. </p></div>
                           <div class="price basic4"><span>250 000</span></div>
						   <div class="prplus b4">в том числе работы <span>200 000</span></div>
                            <a href="#"  data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Получить смету</a>
                            <a href="/editor?category=4" class="li" data-type="individual">посмотреть стиль</a>
                        </div>
                    </div>
                </div>
				<div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="item">
                        <img src="<?php bloginfo('template_url'); ?>/images/va5.jpg" alt="">
                        <div class="text">
                            
<h3>Эко</h3>
                            <div class="p"><p> Эко является тематическим стилем, главная задача которого - создать ощущение природы в городской квартире.</p></div>
                            <div class="price basic5"><span>250 000</span></div>
							<div class="prplus b5">в том числе работы <span>200 000</span></div>
                            <a href="#"  data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Получить смету</a>
                            <a href="/editor?category=5" class="li" data-type="individual">посмотреть стиль</a>
                        </div>
                    </div>
                </div>
				<div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="item">
                        <img src="<?php bloginfo('template_url'); ?>/images/va6.jpg" alt="">
                        <div class="text">
                            
<h3>Индивидуальный</h3>
                            <div class="p"><p>Используйте все возможные инструменты редактора
и создавайте интерьер который подойдет именно вам.</p></div>
                           <div class="price basic6"><span>250 000</span></div>
						   <div class="prplus b6">в том числе работы <span>200 000</span></div>
						   
						   <a href="/editor?category=6" class="btn-select lasts" data-type="individual">Создать свой стиль</a>
                        </div>
                    </div>
                </div>
	
            </div>
        </div>
    </div>

<div class="linee" style="    width: 100%;
    height: 10px;
    background: #f9f8f8;
        margin-top: -30px;"></div>
	
	
	<div class="faq-main">
        <div class="faq-block container">
            <h2>Фото ремонтов</h2>
			<div class="fre col-lg-8 col-md-8 col-sm-12">
				<?php putRevSlider("fotor") ?>
			</div>
			<div id="send_r" class="col-lg-4 col-md-4 col-sm-12">
				<div class="fvv" >
					<div class="form-order-block">
						<h4>Вы можете посмотреть наши ремонты в работе.</h4>
					
						<p>Заполните форму ниже и наш менеджер предложит вам возможные варианты квартир для просмотра.</p>
							<form class="form">
								<input type="text" name="name" placeholder="Ваше имя">
								<input type="text" name="phone" placeholder="Телефон">
								<input type="hidden" name="title" value='Новая заявка на "Бесплатный замер и консультацию"'>
									<button type="submit">Посмотреть ремонт</button>
							</form>
							<span>Нажимая кнопку "Получить расчет", я подтверждаю свое согласие на обработку персональных данных в соответствии с указанным <a href="#" data-toggle="modal" data-target="#modz">здесь</a> текстом. 
</span>
						
					</div>
				</div>
			</div>
            
        </div>
    </div>
	
	
	<div class="linee" style="    width: 100%;
    height: 10px;
    background: #f9f8f8;
        margin-top: -30px;
		margin-bottom:60px;"></div>
	
	
<div class="kakr ">
	<div class="container">
	 <h2>Как мы делаем ремонт</h2>
	<div class="row">
	 
		<div class="col-lg-6 col-md-6 ik-m">
			<h4>Что делаете вы?</h4>
			<div class="stt">
				<img src="/wp-content/themes/produmano/images/icc1.png">
				<p>Выбираете дизайн интерьера и дополнительные
опции на сайте и оставляете заявку.</p>
			</div>
			<div class="stt">
				<img src="/wp-content/themes/produmano/images/icc2.png">
				<p>Встречаетесь с архитектором на объекте для замеров,
уточнения деталей и подписания договора.</p>
			</div>
			<div class="stt">
				<img src="/wp-content/themes/produmano/images/icc3.png">
				<p>Передаете нам ключи и через 12 недель
возвращаетесь в отремонтированную квартиру.</p>
			</div>
		</div>
		
		
		
<div class="col-lg-6 col-md-6 ik-m">
			<h4>Что делаем мы?</h4>
			<div class="stt">
				<img src="/wp-content/themes/produmano/images/icc4.png">
				<p>Производим обмеры и разрабатываем
технический проект.</p>
			</div>
			<div class="stt">
				<img src="/wp-content/themes/produmano/images/icc5.png">
				<p>Закупаем материалы и оборудование. </p>
			</div>
			<div class="stt">
				<img src="/wp-content/themes/produmano/images/icc6.png">
				<p>Проводим черновые и чистовые работы.</p>
			</div>
		</div>
		</div>
	</div>
</div>	
	
	
	
	
	<div class="linee" style="    width: 100%;
    height: 10px;
    background: #fff;
        margin-top: 60px;
		margin-bottom:0px;"></div>


	
	
	<div class="video container ">
				<?php putRevSlider("video") ?>
				<div class="container">
				<p>Мы продумали ваш интерьер до дверной ручки. Пока будет делаться ремонт вы сможете на сэкономленные деньги поехать в отпуск или купить новую бытовую технику. Делайте ремонт выгодно вместе с Продумано.</p>
				</div>
			</div>
	
	<div class="linee" style="    width: 100%;
    height: 10px;
    background: #f9f8f8;
        margin-top: 50px;
		margin-bottom:0px;"></div>
  
    <div class="faq-main">
        <div class="faq-block container cla">
            <h2>часто задаваемые вопросы</h2>
            
            <div class="faq-list row">
                <?php query_posts('post_type=faq&posts_per_page=-1'); ?>
                <?php if(have_posts()); ?>
                <?php while(have_posts()) : the_post(); ?>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="item">
                            <div class="block-1"><span><?php the_title(); ?></span></div>
                            <div class="block-2"><span><?php echo get_field('ответ'); ?></span></div>
                        </div>
                    </div>                
                <?php endwhile; wp_reset_query(); ?>
            </div>
        </div>
    </div>
	
	

<?php get_footer(); ?>


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
<script type="text/javascript" src="/wp-content/themes/produmano/editor/function.js"></script>