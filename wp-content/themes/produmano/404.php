<?php get_header(); ?>
	<div class="content-main">
		<div class="content-block container">
			<?php include('sidebar-page.php'); ?>
			
			<div class="content">
				<?php if (function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
                <h1>404 - Упс! Страница не найдена!</h1>
			    <p>Извините, страница к которой вы обратились удалена либо не существует. Попробуйте перейти на <a href="/">главную</a>.</p>
			</div>
		</div>
	</div>
<?php get_footer(); ?>



