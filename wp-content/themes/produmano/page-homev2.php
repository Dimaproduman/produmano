<?php
/*
Template Name: Главная вариант 2
*/
?>
<?php get_header(); ?>

    <div class="slider-wrap">
        <ul class="slider">
            <?php query_posts('post_type=slider&posts_per_page=-1'); ?>
            <?php if(have_posts()); ?>
            <?php while(have_posts()) : the_post(); ?>
                <li>
                    <?php
                    if ( has_post_thumbnail()) {
                        $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full');
                        echo '<div style="background: url(' . $large_image_url[0] . ') center top no-repeat;" class="image"></div>';
                    }
                    ?>
                    <div class="text">
                        <h2><?php the_title(); ?></h2>
                        <?php the_content(); ?>

                        <?php if(get_field('ссылка_слайдер') == true) { ?>
                            <a href="<?php echo get_field('ссылка_слайдер'); ?>" class="read-more">Подробнее</a>
                        <?php } ?>
                    </div>
                </li>
            <?php endwhile; wp_reset_query(); ?>
        </ul>
    </div>



<div class="steps-work-main" style="border-bottom:0;">
    <div class="step-block container">
        <h2><span><?php echo get_field('заголовок_сервис', 6); ?></span></h2>

        <div class="work-steps-list">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <?php echo get_field('текст_1_сервис', 6); ?>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <?php echo get_field('текст_2_сервис', 6); ?>
                </div>
            </div>
        </div>

        <p><?php echo get_field('текст_3_сервис', 6); ?></p>
    </div>
</div>

<div class="steps-work-main">
    <div class="step-block container">
        <h2><span><?php echo get_field('заголовок_дизайн', 6); ?></span></h2>

        <div class="imagess row">
            <div class="col-lg-12">
                <img src="<?php bloginfo('template_url'); ?>/images/img-design-main.jpg" alt="">
            </div>
        </div>

        <!--<div class="grid">
                <div class="item size-1"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-1.jpg" alt=""></a></div>
                <div class="item size-2"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-2.jpg" alt=""></a></div>
                <div class="item hidden-xs"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-3.jpg" alt=""></a></div>
                <div class="item hidden-xs"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-4.jpg" alt=""></a></div>
                <div class="item"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-3.jpg" alt=""></a></div>
                <div class="item"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-4.jpg" alt=""></a></div>
                <div class="item"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-3.jpg" alt=""></a></div>
            </div>-->

        <p><?php echo get_field('текст_дизайн', 6); ?></p>
    </div>
</div>

<div class="steps-work-main">
    <div class="step-block container">
        <h2><span><?php echo get_field('заголовок_ремонт', 6); ?></span></h2>

        <div class="imagess row">
            <div class="col-lg-12">
                <img src="<?php bloginfo('template_url'); ?>/images/img-remont-main.jpg" alt="">
            </div>
        </div>

        <!--<div class="grid">
                <div class="item size-2 hidden-xs"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-2.jpg" alt=""></a></div>
                <div class="item hidden-xs"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-3.jpg" alt=""></a></div>
                <div class="item size-1"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-1.jpg" alt=""></a></div>
                <div class="item"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-4.jpg" alt=""></a></div>
                <div class="item"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-3.jpg" alt=""></a></div>
                <div class="item"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-4.jpg" alt=""></a></div>
                <div class="item"><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/img-design-3.jpg" alt=""></a></div>
            </div>-->

        <p><?php echo get_field('текст_ремонт', 6); ?></p>
    </div>
</div>
<div class="select-design-main">
    <div class="select-design-block container">
        <h2>Выбор стиля</h2>


        <div class="form-select">
            <p>Введите данные о квартире</p>
            <form id="param">
                <div class="input">
                    <label for="rooms">Площаль квартиры</label>
                    <input type="text" class="number" name="area" id="area" placeholder="30">
                </div>
                <div class="input">
                    <label for="rooms">Высота потолка</label>
                    <input type="text" class="number" name="height" id="height" placeholder="2.7">
                </div>
                <div class="input">
                    <label for="rooms">Площадь санузлов</label>
                    <input type="text" class="number" name="s_area" id="s_area" placeholder="6">
                </div>
                <div class="input">
                    <label for="rooms">Санузел
                    </label>
                    <select name="bathrooms_type" id="bathrooms_type">
                        <option value="v1" selected="selected">Общий</option>
                        <option value="v2">Раздельный</option>
                        <option value="v3">Два санузла</option>
                    </select>
                </div>

            </form>
        </div>

        <div class="design-plans row">
            <div class="col-lg-4 col-md-4">
                <div class="item">
                    <img src="<?php bloginfo('template_url'); ?>/images/va1.jpg" alt="">
                    <div class="text">
                        <h3>Скандинавский</h3>
                        <div class="p"><p>Скандинавский стиль - это микс белых окрашенных стен, солнечного света
                                и ярких акцентов. Традиционные черты стилю добавляют классические белые двери и плинтус.российского производства.</p></div>
                        <div class="price basic1"><span>250 000</span></div>
                        <a href="/editor?category=1" class="btn-select" data-type="basic">Выбрать</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="item">
                    <img src="<?php bloginfo('template_url'); ?>/images/va2.jpg" alt="">
                    <div class="text">
                        <h3>Классика</h3>
                        <div class="p"><p>
                                Современная классика объединяет роскошь лепного декора и лаконизм простых крашеных стен. На полу используется инженерная доска из дуба, на стенах декоративная штукатурка, крашеный лепной декор
                                и классически обои.</p></div>
                        <div class="price basic2"><span>250 000</span></div>
                        <a href="/editor?category=2" class="btn-select" data-type="designer">Выбрать</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="item">
                    <img src="<?php bloginfo('template_url'); ?>/images/va3.jpg" alt="">
                    <div class="text">
                        <h3>Современный</h3>
                        <div class="p"><p>Современный стиль подобно конструктору может сочетать в себе черты всех возможных стилей
                                в минималистичном окружении. Для стиля характерны яркие акцентные стены, удобная и уютная мебель
                                и, конечно же, ваши индивидуальные предпочтения.</p></div>
                        <div class="price basic3"><span>250 000</span></div>
                        <a href="/editor?category=3" class="btn-select" data-type="individual">Выбрать</a>
                    </div>
                </div>
            </div>


            <div class="col-lg-4 col-md-4">
                <div class="item">
                    <img src="<?php bloginfo('template_url'); ?>/images/va4.jpg" alt="">
                    <div class="text">
                        <h3>Лофт</h3>
                        <div class="p"><p>Стиль лофт брутальный
                                и урбанистичный по происхождению.
                                В интерьере квартир крайне популярным стал благодаря акцентным кирпичным стенам и стильной мебели из дерева и металла. </p></div>
                        <div class="price basic4"><span>250 000</span></div>
                        <a href="/editor?category=4" class="btn-select" data-type="individual">Выбрать</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="item">
                    <img src="<?php bloginfo('template_url'); ?>/images/va5.jpg" alt="">
                    <div class="text">

                        <h3>Эко</h3>
                        <div class="p"><p>Эко является тематическим стилем, главная задача которого - создать ощущение природы в городской квартире. В отделке интерьера применяется натуральное дерево,
                                в декоре стен преобладают природные и нейтральные цвета и экологические мотивы.</p></div>
                        <div class="price basic5"><span>250 000</span></div>
                        <a href="/editor?category=5" class="btn-select" data-type="individual">Выбрать</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="item">
                    <img src="<?php bloginfo('template_url'); ?>/images/va6.jpg" alt="">
                    <div class="text">

                        <h3>Индивидуальный</h3>
                        <div class="p"><p>Индивидуальный стиль - это отражение ваших идей
                                и предпочтений. Используйте все возможные инструменты редактора
                                и создавайте интерьер который подойдет именно вам.</p></div>
                        <div class="price basic6"><span>250 000</span></div>
                        <a href="/editor?category=6" class="btn-select" data-type="individual">Выбрать</a>
                    </div>
                </div>
            </div>






        </div>
    </div>
</div>

<div class="preference-main">
    <div class="preference-block container">
        <div class="pref-list row">
            <?php if( have_rows('преимущества') ): ?>
                <?php while( have_rows('преимущества') ): the_row();
                    $image = get_sub_field('изображение');
                    $title = get_sub_field('заголовок');
                    $text = get_sub_field('текст');
                    ?>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <div class="item">
                            <div class="image"><span><img src="<?php echo $image['url']; ?>" alt=""></span></div>
                            <h4><?php echo $title; ?></h4>
                            <p><?php echo $text; ?></p>
                        </div>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</div>


<div class="faq-main">
    <div class="faq-block container">
        <h2>Ответы на часто задаваемые вопросы</h2>

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
<style>
    form#param {
        padding-bottom: 20px;
    }
    .design-plans .item .text .p {
        min-height: 160px !important;
    }
    @media (max-width: 767px) {
        .design-plans .item .text .p {
            min-height: 70px !important;
        }
    }
</style>


<?php get_footer(); ?>