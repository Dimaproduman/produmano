<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<title><?php bloginfo('name'); ?> <?php wp_title(); ?> </title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="format-detection" content="telephone=no">

	<!-- Bootstrap -->
	<link href="<?php bloginfo('template_url'); ?>/css/bootstrap.css" rel="stylesheet">

	<!-- Font Awesome 4.4.0 -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<link href="<?php bloginfo('template_url'); ?>/css/nice-select.css" rel="stylesheet">
	<link href="<?php bloginfo('template_url'); ?>/style.css" rel="stylesheet">
    <link href="<?php bloginfo('template_url'); ?>/css/edit-style.css" rel="stylesheet">

	<?php if ( is_user_logged_in() ) { echo '<style>.to_top{top:32px !important;}</style>'; } ?>

	<?php if(is_page('order')) { ?>
	<script type="text/javascript">
        <?php
        #if(!isset($_POST['ser_rooms'])) {
        #    header('location: /design');
        #    die;
        #}

        $rooms = isset($_POST['ser_rooms']) ? $_POST['ser_rooms'] : '{}';
        ?>
        var rooms = JSON.parse("<?php echo $rooms; ?>");
        var post_data = <?php echo json_encode($_POST); ?>;
    </script>
    <?php } ?>

	<?php //comments_popup_script(); // off by default ?>
	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
	<?php wp_head(); ?>
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

</head>

<body>
    <?php if(is_front_page()) { ?>
        <script type="text/template" id="area-field">
            <label for="<%= id %>"><%= title %></label>
            <input type="text" class="number" name="<%= id %>" id="<%= id %>" placeholder="<%= placeholder %>" value="<%= value %>">
        </script>


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
                    <span class="f40">Дизайнерский ремонт по фиксированной цене и без вашего участия</span>
                    <span class="f24">Выберите один из 6 стилей.<br> А мы разработаем проект, закупим материалы<br> и реализуем ремонт в срок до 14 недель.</span>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6  scf">
                    <div class="form-order-block form-gl">
                        <p class="zform">Расскажите о квартире</p>
                        <form class="form">
                            <div class="input">
                                <div class="input-row">
                                    <input type="text" class="number input-animate input--number" name="area_h" id="area_h"   data-input="Площадь квартиры, м2" data-calc="area">
                                </div>
                                    <div class="input__error area_h--error"> Максимальная площадь 500 м2</div>
                            </div>

                            <div class="input-row">
                                <input type="text" class="number input-animate input--number" name="height_h" id="height_h" data-input="Высота потолка, м" data-calc="height">
                            </div>
                            <div class="input__error height_h--error"> Высота потолков от 2 до 4м</div>

                            <div class="input-row">
                                <input type="text" class="number input-animate input--number" name="s_area_h" id="s_area_h" data-input="Площадь санузлов, м2" data-calc="s_area">
                            </div>
                            <div class="input__error s_area_h--error"> площадь от 2 до 40 м</div>
                            <div class="input__error s_area_h--error-squer"> Не может быть больше площади квартиры</div>


                            <div class="input">
                                <select name="bathrooms_type_h" id="bathrooms_type_h" class="select-beauty">
                                    <option value="v1" selected="selected" data-display="Общий">Общий</option>
                                    <option value="v2">Раздельный</option>
                                    <option value="v3">Два санузла</option>
                                </select>
                            </div>
                            <div>
                                <span class="ddx">Ремонт от</span>
                                <span class="ddx2"><span>250 000<span> Р.</span>
                            </div>
                            <input type="hidden" name="title"
                                   value="Новая заявка на &quot;Бесплатный замер и консультацию&quot;">
                            <a href="#di" class="btn-select btn--hover" data-type="individual">Выбрать стиль</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php }



	// ниже не на главной!!!
else{	?>


	<div class="header-main sr">
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



    <?php
}


	if(is_front_page()){ ?>
        <div class="slider-wrap">
            <?php //putRevSlider("sl") ?>
        </div>
		<div class="vi">
		<?php //echo do_shortcode('[video_lightbox_youtube video_id="IAAHfzHBIkU&rel=false" width="1170" height="658" autoplay="1" anchor=" "]'); ?>
		</div>
		<style>
		.partner-block.container {
    display: block!important;
}
		</style>
    <?php } ?>