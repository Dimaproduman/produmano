<?php
/* ==============================================
********  //Регистрируем меню
=============================================== */
function register_my_menus() {
    register_nav_menus(array('header-menu' => 'Main Menu', 'footer-menu' => 'Footer Menu'));
}

if (function_exists('register_nav_menus')){
	add_action( 'init', 'register_my_menus' );
}

class BS3_Walker_Nav_Menu extends Walker_Nav_Menu {

	function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
		$id_field = $this->db_fields['id'];

		if ( isset( $args[0] ) && is_object( $args[0] ) )
		{
			$args[0]->has_children = ! empty( $children_elements[$element->$id_field] );

		}

		return parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
	}

	function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		if ( is_object($args) && !empty($args->has_children) )
		{
			$link_after = $args->link_after;
			$args->link_after = '';
		}

		parent::start_el($output, $item, $depth, $args, $id);

		if ( is_object($args) && !empty($args->has_children) )
			$args->link_after = $link_after;
	}

	function start_lvl( &$output, $depth = 0, $args = array() ) {
		$indent = '';
		$output .= "$indent<ul class=\"dropdown-menu\">";
	}
}

add_filter('nav_menu_link_attributes', 'nav_link_att', 10, 3);

function nav_link_att($atts, $item, $args) {
	if ( $args->has_children )
	{
		$atts['class'] = 'dropdown-toggle';
        $atts['data-toggle'] = 'dropdown';
	}
	return $atts;
}


/* ==============================================
********  //Миниатюрки 
=============================================== */
   add_theme_support ('post-thumbnails'); //Добавляем миниатюры к постам;
   add_image_size( 'material-thumb', 219, 128, true );


/* ==============================================
********  //Переименовываем пункт меню «Записи» в «Товары»
=============================================== */
function wptutsplus_change_post_menu_label() {
    global $menu;
    global $submenu;
    $menu[5][0] = 'Материалы';
    $submenu['edit.php'][5][0] = 'Все материалы';
    $submenu['edit.php'][10][0] = 'Добавить материал';
}
add_action( 'admin_menu', 'wptutsplus_change_post_menu_label' );

// Редактируем подпункты меню "Продукты"
function wptutsplus_change_post_object_label() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'Материалы и отделка';
    $labels->singular_name = 'Материалы';
    $labels->add_new = 'Добавить материал';
    $labels->add_new_item = 'Добавить материал';
    $labels->edit_item = 'Редактировать материал';
    $labels->new_item = 'Новые материалы';
    $labels->view_item = 'Смотреть материал';
    $labels->search_items = 'Поиск по материалам';
    $labels->not_found = 'Нет материалов';
    $labels->not_found_in_trash = 'Нет материалов';
}
add_action( 'admin_menu', 'wptutsplus_change_post_object_label' );


/* ==============================================
********  //Добавление слайдов в слайдер
=============================================== */
add_action( 'init', 'create_slider_post_type_feedback' );
 
function create_slider_post_type_feedback()
{
	register_post_type('slider', 
		array(	
			'label' => 'Слайдер',
			'public' => TRUE,
			'rewrite' => array( 'slug' => 'slider', 'with_front' => true ), //вместе с параметром 'has_archive' необходим для архива постов 
			'has_archive' => true, //вместе с параметром 'rewrite' необходим для архива постов
			'public' => true,
			'labels'=> array(
				'name'=>'Слайдер', //Переопределяет название в меню, а также, если есть таксономия, то отображается на странице таксономии как заголовок к графе с количеством постов в терме таксономии
				'singular_name'=>'Слайдер', //Название одного экземпляра этого поста
				'add_new'=>'Добавить слайд', //Название меню для добавления нового поста данного типа
				'add_new_item'=>'Страница добавления нового слайда', //Заголовок страницы, на которой добавляются новые посты
				'edit_item'=>'Редактировать слайд', //Заголовок страницы, на которой посты редактируются
				'new_item'=>'Добавить слайд', //Не найдено
			),
			'supports' => array('title','editor','thumbnail','excerpt'),
			'menu_icon' => 'dashicons-images-alt2',
			'menu_position' => 5,
		)
	);
	flush_rewrite_rules(false); //Специальная функция, которая сделает так, чтобы изменения вступили в силу сразу же (не нужно было обновлять настройки с постоянными ссылками)
}

/* ==============================================
********  //Добавление вопрос и ответов
=============================================== */
add_action( 'init', 'create_faq_post_type' );
 
function create_faq_post_type()
{
	register_post_type('faq', 
		array(	
			'label' => 'Вопросы-Ответы',
			'public' => TRUE,
			'rewrite' => array( 'slug' => 'faq', 'with_front' => true ), //вместе с параметром 'has_archive' необходим для архива постов 
			'has_archive' => true, //вместе с параметром 'rewrite' необходим для архива постов
			'public' => true,
			'labels'=> array(
				'name'=>'Вопросы-Ответы', //Переопределяет название в меню, а также, если есть таксономия, то отображается на странице таксономии как заголовок к графе с количеством постов в терме таксономии
				'singular_name'=>'Вопросы-Ответы', //Название одного экземпляра этого поста
				'add_new'=>'Добавить вопрос', //Название меню для добавления нового поста данного типа
				'add_new_item'=>'Страница добавления нового вопроса', //Заголовок страницы, на которой добавляются новые посты
				'edit_item'=>'Редактировать вопрос', //Заголовок страницы, на которой посты редактируются
				'new_item'=>'Добавить вопрос', //Не найдено
			),
			'supports' => array('title'),
			'menu_icon' => 'dashicons-welcome-learn-more',
			'menu_position' => 5,
		)
	);
	flush_rewrite_rules(false); //Специальная функция, которая сделает так, чтобы изменения вступили в силу сразу же (не нужно было обновлять настройки с постоянными ссылками)
}


/* ==============================================
********  //Удаляем мусор в head WordPress
=============================================== */
remove_action( 'wp_head', 'feed_links', 2 ); // Удаляет ссылки RSS-лент записи и комментариев
remove_action( 'wp_head', 'feed_links_extra', 3 ); // Удаляет ссылки RSS-лент категорий и архивов

remove_action( 'wp_head', 'rsd_link' ); // Удаляет RSD ссылку для удаленной публикации
remove_action( 'wp_head', 'wlwmanifest_link' ); // Удаляет ссылку Windows для Live Writer

remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0); // Удаляет короткую ссылку
remove_action( 'wp_head', 'wp_generator' ); // Удаляет информацию о версии WordPress
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 ); // Удаляет ссылки на предыдущую и следующую статьи

// Отключаем загрузку скриптов и стилей Emoji
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );	
remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );	
remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );


/* ==============================================
********  //Установить favicon для бекенда
=============================================== */
add_action('admin_head', 'set_admin_favicon');
function set_admin_favicon() {
    echo '<link rel="shortcut icon" href="'.get_bloginfo('stylesheet_directory').'/favicon.ico" />';
}


// запрет обновления выборочных плагинов
function filter_plugin_updates( $update ) {    
    global $DISABLE_UPDATE; // см. wp-config.php
    if( !is_array($DISABLE_UPDATE) || count($DISABLE_UPDATE) == 0 ){  return $update;  }
    foreach( $update->response as $name => $val ){
        foreach( $DISABLE_UPDATE as $plugin ){
            if( stripos($name,$plugin) !== false ){
                unset( $update->response[ $name ] );
            }
        }
    }
    return $update;
}
add_filter( 'site_transient_update_plugins', 'filter_plugin_updates' );



?>