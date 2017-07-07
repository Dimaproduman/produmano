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
    <?php if(is_front_page()) { ?>
        <link href="<?php bloginfo('template_url'); ?>/css/variant-gl.css" rel="stylesheet">
    <?php } ?>

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


