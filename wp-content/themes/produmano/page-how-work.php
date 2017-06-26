<?php 
/*
Template Name: Как это работает
*/
?>

<?php get_header(); ?>
<div class="content-main">
		<div class="content-block container">
			
				<?php if (function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
                <?php if(have_posts()); ?>
                <?php while(have_posts()) : the_post(); ?>
                   
                    <?php the_content(); ?>
                <?php endwhile; ?>
			
		</div>
	</div>
<?php get_footer(); ?> 