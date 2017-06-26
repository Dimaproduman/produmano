<?php get_header(); ?>
	<div class="content-main">
		<div class="content-block container">
			<?php include('sidebar-page.php'); ?>
			
			<div class="content">
				<?php if (function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
                <?php if(have_posts()); ?>
                <?php while(have_posts()) : the_post(); ?>
                    <h1><?php the_title(); ?></h1>
                    <?php the_content(); ?>
                <?php endwhile; ?>
			</div>
		</div>
	</div>
<?php get_footer(); ?>