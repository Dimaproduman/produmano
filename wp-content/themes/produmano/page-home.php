<?php
/*
Template Name: Главная
*/
?>



<?php get_header(); ?>


<script type="text/template" id="area-field">
    <label for="<%= id %>"><%= title %></label>
    <input type="text" class="number" name="<%= id %>" id="<%= id %>" placeholder="<%= placeholder %>" value="<%= value %>">
</script>
<div class="vi">
    <?php echo do_shortcode('[video_lightbox_youtube video_id="IAAHfzHBIkU&rel=false" width="1000" height="562" autoplay="1" anchor=" "]'); ?>
</div>


<div class="bfon">
    <div class="header-main">
        <div class="header container">

            <div class="he2"><a href="/" class="logo"><img src="<?php bloginfo('template_url'); ?>/images/logon.png" alt=""></a></div>
            <div class="he1">
                <button class="showLeftPush hidden-lg hidden-md ">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <ul class="menu hidden-xs">
                    <?php wp_nav_menu(array('theme_location' => 'header-menu', 'container' => '', 'items_wrap' => '%3$s', 'walker' => new BS3_Walker_Nav_Menu)); ?>

                </ul>

            </div>


            <div  class="he3">
                <?php if(get_field('телефон', 6) == true) { ?>
                    <div class="phone "><?php echo get_field('телефон', 6); ?></div>
                <?php }?>
                <div class="menu-block"><a href="/design" class="btn-order">рассчитать стоимость</a></div>
            </div>

            <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
                <button class="showLeftPush">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <ul><?php wp_nav_menu(array('theme_location' => 'header-menu', 'container' => '', 'items_wrap' => '%3$s')); ?>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-15"><a href="/how-work">Как это работает?</a></li></ul>
                <div class="phone"><i class="fa fa-phone" aria-hidden="true"></i> <?php echo get_field('телефон', 6); ?></div>
                <div class="address"><?php echo get_field('адрес', 6); ?></div>
            </nav>

        </div>
    </div>
    <div class="gl container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-6  sc">
                <span class="f40">Дизайнерский ремонт<br>
с материалами<br>
по фиксированной цене</span>
            </div>


            <div class="col-lg-4 col-md-4 col-sm-6  scf">
                <div class="ce">
                    <div class="play_b"><img src="/wp-content/themes/produmano/images/b_play.png"></div>
                    <div class="text_b">О ремонте с Продумано<br>за 1 минуту</div>
                </div>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="b_line"></div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-3  vcc">
                <div>
                    <div class="hg1">Популярные</div>
                    <div class="hg2">стили дизайна</div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  vcc">
                <div>
                    <div class="hg1">Индивидуальный</div>
                    <div class="hg2">проект</div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  vcc">
                <div>
                    <div class="hg1">Фиксированные</div>
                    <div class="hg2">сроки от 6 до 14 недель</div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3  vcc">
                <div>
                    <div class="hg1">Трендовые</div>
                    <div class="hg2">чистовые материалы</div>
                </div>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 but">
                <a href="#" data-target="#modCalls" data-toggle="modal" class="btn-select btn--hover">Рассчитать стоимость ремонта
                    с материалами</a>
            </div>






        </div>
    </div>
</div>
<style>
    .partner-block.container {
        display: block!important;
    }
</style>



<div class="preim ">
    <div class="container">
        <div class="col-lg-4 col-md-4 col-sm-4 it-m">
            <div><img src="/wp-content/themes/produmano/images/pp1.png"></div>
            <p class="big_b">Проверенные решения</p>
            <p>Вам не придется тратить время, мы уже подобрали лучшие сочетания материалов
                и сантехники</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 it-m">
            <div><img src="/wp-content/themes/produmano/images/ppp2.png"></div>
            <p class="big_b">фиксированная цена</p>
            <p>Вы точно знаете и планируете бюджет
                ремонта заранее</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 it-m">
            <div><img src="/wp-content/themes/produmano/images/pp3.png"></div>
            <p class="big_b">На 15% дешевле рынка</p>
            <p>Вы экономите на бесплатном дизайн-проекте
                и материалах с партнерской скидкой
            </p>
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
                        <label for="rooms">Площадь квартиры</label>
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
                            <div class="p" style="    padding-bottom: 25px;"><p>Используйте все возможные инструменты редактора
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
                                <a href="#" data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Рассчитать стоимость
                                    с материалами</a>
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
                                <a href="#" data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Рассчитать стоимость
                                    с материалами</a>
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
                                <a href="#" data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Рассчитать стоимость
                                    с материалами</a>
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
                                <a href="#" data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Рассчитать стоимость
                                    с материалами</a>
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
                                <a href="#" data-target="#modCalls" data-toggle="modal" class="btn-select" data-type="individual">Рассчитать стоимость
                                    с материалами</a>
                            </div>

                        </div>
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

            <div class="v_line"></div>
            <div class="col-lg-6 col-md-6 ik-m rig">
                <div class="stt">
                    <div class="ots1"></div>
                </div>
                <div class="stt">
                    <img src="/wp-content/themes/produmano/images/po2.png">
                    <div>
                        <p class="big_b">Разработка проекта</p>
                        <p>Наши специалисты - инженер и архитектор - готовят
                            необходимую ТЕХНИЧЕСКУЮ ДОКУМЕНТАЦИЮ.</p>
                    </div>
                </div>
                <div class="stt">
                    <div class="ots2"></div>
                </div>
                <div class="stt">
                    <img src="/wp-content/themes/produmano/images/po4.png">
                    <div>
                        <p class="big_b">Даем гарантию</p>
                        <p>Вы принимаете работы и получаете 3 ГОДА ГАРАНТИИ
                            на инженерные коммуникации и год на отделочные
                            работы.</p>
                    </div>
                </div>
            </div>



            <div class="col-lg-6 col-md-6 ik-m lef">

                <div class="stt">
                    <img src="/wp-content/themes/produmano/images/po1.png">
                    <div>
                        <p class="big_b">Вы обращаетесь в Продумано </p>
                        <p>Мы назначаем встречу в удобное для Вас время.
                            Выезжаем на инспекцию квартиры, обсуждаем ваши пожелания, находим ЛУЧШИЕ РЕШЕНИЯ, заключаем договор.</p>
                    </div>
                </div>
                <div class="stt">
                    <div class="ots3"></div>
                </div>
                <div class="stt">
                    <img src="/wp-content/themes/produmano/images/po3.png">
                    <div>
                        <p class="big_b">Ремонт от 6 до 14 недель.
                            Без хлопот и вашего участия</p>
                        <p>Вам не нужно следить за процессом, мы самостоятельно закупаем все материалы, используем ТРЕХСТУПЕНЧАТУЮ СИСТЕМУ КОНТРОЛЯ, высылаем еженедельные ФОТО и ВИДЕООТЧЕТЫ, делаем все качественно с соблюдением строительных технологий и оперативно по графику. </p>
                    </div>
                </div>
            </div>




            <div class="col-lg-6 col-md-6 ik-m rig skr">
                <div class="stt">
                    <img src="/wp-content/themes/produmano/images/po1.png">
                    <div>
                        <p class="big_b">Вы обращаетесь в Продумано </p>
                        <p>Мы назначаем встречу в удобное для Вас время.
                            Мы обсуждаем ваши пожелания, находим лучшие
                            решения, заключаем договор.</p>
                    </div>
                </div>
                <div class="stt">
                    <img src="/wp-content/themes/produmano/images/po2.png">
                    <div>
                        <p class="big_b">Разработка проекта</p>
                        <p>Наш специалист выезжает на замеры и готовит
                            необходимую техническую документацию.</p>
                    </div>
                </div>
                <div class="stt">
                    <img src="/wp-content/themes/produmano/images/po3.png">
                    <div>
                        <p class="big_b">Ремонт от 6 до 14 недель.
                            Без хлопот и вашего участия</p>
                        <p>Вам не нужно следить за процессом, мы самостоятельно закупаем все материалы, используем трехступенчатую систему контроля прораб-инженер-архитектор, высылаем еженедельные фото и видеоотчеты, делаем все качественно с соблюдением строительных технологий и оперативно по графику. </p>
                    </div>
                </div>
                <div class="stt">
                    <img src="/wp-content/themes/produmano/images/po4.png">
                    <div>
                        <p class="big_b">Даем гарантию</p>
                        <p>Вы принимаете работы и получаете 3 года гарантии
                            на инженерные коммуникации и год на отделочные
                            работы.</p>
                    </div>
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
    <p class="zvi">Мы сделали для вас видео</p>
    <?php //putRevSlider("video") ?>
    <div class="ffv">
        <img class="oth" src="/wp-content/themes/produmano/images/fvideo.jpg">
        <img class="but_p" src="/wp-content/themes/produmano/images/n_pl.png">
    </div>

</div>
<div class="container dvid">
    <p>Мы продумали ваш интерьер до дверной ручки. Пока будет делаться ремонт вы сможете на сэкономленные деньги поехать в отпуск или купить новую бытовую технику. Делайте ремонт выгодно вместе с Продумано.</p>
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



