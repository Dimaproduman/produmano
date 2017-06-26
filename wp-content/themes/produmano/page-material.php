<?php 
/*
Template Name: Материалы и отделка
*/
?>

<?php get_header(); ?>
    <div class="content-main">
        <div class="content-page container">
            <h1><?php the_title(); ?></h1>
            
            <div class="col-lg-12">
                <?php if(have_posts()); ?>
                <?php while(have_posts()) : the_post(); ?>
                    <?php the_content(); ?>
                <?php endwhile; ?>
            </div>
            <div class="clearfix"></div>
            
           
        </div>
    </div>
    
    
 
 <div class="content-main">
        <div class="content-page container" style="padding-top:30px;">
            <div class="btns">
                <a href="/design" class="btn-design">Выбрать дизайн</a>
                <a href="/order" class="btn-order">оформить заказ</a>
            </div>
        </div>
    </div>
	
	
	<style>
	body {
    zoom: 100%;
	}
	.menu-m.fixed {
    position: fixed!important;
    width: 100%!important;
    left: 0!important;
    z-index: 9;
    top: 0;
    margin-left: 0px;
}
.header-main {
    position: relative;
}
.content-main {
    padding-top: 0;
}
	</style>
	
	
<?php get_footer(); ?> 
<script>
var menu_selector = ".menu-b ul"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top-80
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});




jQuery(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>325){
	                $('#menu-m').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<325){
	                $('#menu-m').removeClass('fixed');
	            }
	        });
	    });
	</script>