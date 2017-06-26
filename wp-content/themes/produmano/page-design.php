<?php 
/*
Template Name: Выбор дизайна
*/
?>

<?php get_header(); ?>
<style>
.menu-block.container a.btn-order {
    display: none;
}
</style>
   
   <div class="header-m">
        <div class="header container">
            <span id="vvs">Выбор стиля</span>
        </div>
    </div>

	<div class="form-select ooo">
			<p>Введите данные о квартире</p>
                <form id="param">
				<div class="input">
					<label for="rooms">Площадь квартиры</label>
					<input type="text" class="number" name="area" id="area" placeholder="25">
				</div>
				<div class="input">
					<label for="rooms">Высота потолка</label>
					<input type="text" class="number" name="height" id="height" placeholder="2.5">
				</div>
				<div class="input">
					<label for="rooms">Площадь санузлов</label>
					<input type="text" class="number" name="s_area" id="s_area" placeholder="3">
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
			
			<div id="vdesing" class="container">
				<div class="col-lg-12 col-md-12">
                    <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							СКАНДИНАВСКИЙ
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<span class="vd1"><div class="price basic1"><span>0</span>  Р.</div></span>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d1.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Скандинавский стиль - это микс белых окрашенных стен, солнечного света
и ярких акцентов. Традиционные черты стилю добавляют классические белые двери и высокий плинтус.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=1" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							КЛАССИКА
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic2"><span>0</span>  Р.</div>
							</div>
						</div>
                        <img src="/wp-content/uploads/2017/04/klassika_2.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Современная классика объединяет роскошь лепного декора и лаконизм простых крашеных стен. На полу используется инженерная доска из дуба, на стенах декоративная штукатурка, крашеный лепной декор и классические обои.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=2" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order"  data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							СОВРЕМЕННЫЙ
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic3"><span>0</span>  Р.</div>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d3.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Современный стиль, подобно конструктору, может сочетать в себе черты всех возможных стилей в минималистичном окружении. Для стиля характерны яркие акцентные стены, удобная и уютная мебель и, конечно же, ваши индивидуальные предпочтения.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=3" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							ЛОФТ
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic4"><span>0</span>  Р.</div>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d4.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Стиль лофт брутальный и урбанистичный по происхождению. В интерьере квартир крайне популярным стал благодаря акцентным кирпичным стенам и стильной мебели из дерева и металла.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=4" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							ЭКО
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic5"><span>0</span>  Р.</div>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d5.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Эко является тематическим стилем, главная задача которого – создать ощущение природы в городской квартире. В отделке интерьера применяется натуральное дерево, в декоре стен преобладают природные нейтральные цвета и экологические мотивы.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=5" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					 <div class="item">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-6 dd1">
							ИНДИВИДУАЛЬНЫЙ
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 dd2">
							<div class="price basic6">от <span>0</span>  Р.</div>
							</div>
						</div>
                        <img src="<?php bloginfo('template_url'); ?>/images/big-d6.jpg" alt="">
						<div class="top_d">
							<div class="col-lg-8 col-md-8 col-sm-8 dd1">
							<p>Индивидуальный стиль - это отражение ваших идей и предпочтений. Используйте все возможные инструменты редактора и создавайте интерьер, который подойдет именно вам.</p>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-4 dd2 menu-block">
							<a href="/editor?category=6" onclick="yaCounter39721995.reachGoal('goal_klik_na_vybrat_stil'); return true;" class="btn-order" data-type="basic">Выбрать стиль</a>
							</div>
						</div>
                        
                    </div>
					
					
					
					
					
					
                </div>
			
			</div>


			
			
			
<script type="text/javascript" src="/wp-content/themes/produmano/editor/function.js"></script>			
<?php get_footer(); ?> 