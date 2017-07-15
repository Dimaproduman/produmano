<?php error_reporting(0); ?>
<?php get_header(); ?>
<style>
div#stick_menu, .header > div:not(:nth-child(1)), .form-order-main, .partner-main, .footer-main, .copyright-main {
    display: none;
}
body{
    padding: 0px!important;
}

.header > div:not(:nth-child(1)) {
    display: none!important;
}
body {
    min-width: 420px;
}
@media (max-width: 520px){
.header {
    padding-top: 11px!important;
}
.three.container > h3 {
    /* display: none; */
    font-size: 12px;
        padding: 22px;
    text-align: center;
    padding-right: 100px;
}

form#param {
    display: block;
    padding: 10px 5px 40px;
}

	.three {
    padding-top: 23px;
    padding-bottom: 0px;
	}
	a.logo img {
    width: 100px;
}
	.header-main {
    background: #F7F5F1;
    height: 50px;
}
}

.header-main.sr {
    border-bottom: 0px solid #f9f8f8;
    background: #F7F5F1;
}
form#param {
    padding-top: 9px;
}
.header {
    display: block;
    padding-top: 14px;
    padding-bottom: 14px;
}
.header-main {
    position: initial;
}
.content-main {
    padding-top: 0;
}
@media (max-width: 1024px)
{
.he2 {
    width: 14%;
    padding-top: 0px;
}
.three {
    margin-top: -77px;
}
}
@media (max-width: 767px){
	.header-main {
    height: 64px;
}
.he2 {
    width: 25%;
    padding-top: 0px;
}
}

@media (max-width: 520px)
{
.header > div:first-child {
    margin-top: 13px;
}
.three {
    margin-top: -84px;
    padding-bottom: 5px;
}
.three.container a {
    top: 27px;
}
}
</style>


<div class="content-main ed">
	<div class="three container">
		<h3>Редактор стиля</h3>
		<h2><a><span id="hel" title="Помощь">?</span></a><a href="/design"><span id="xx" title="Закрыть"></span></a></h2>
	</div>
	
	<div class="two container">
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
		
	<div id="step1">
		<?php 
		$gg1 = get_field('картинки_для_3-й_шаг1', 560);
		$i = 1;
		foreach( $gg1  as $gg_val  ){
			$gr1 .= 'im_'.$i++.'='.'"'.$gg_val['title'].';'.$gg_val['caption'].';'.$gg_val['url'].'" ';
		}
		$gg2 = get_field('картинки_для_3-й_шаг2', 560);
		$i = 1;
		foreach( $gg2  as $gg_val  ){
			$gr2 .= 'im_'.$i++.'='.'"'.$gg_val['title'].';'.$gg_val['caption'].';'.$gg_val['url'].'" ';
		}
		$gg3 = get_field('картинки_для_3-й_шаг3', 560);
		$i = 1;
		foreach( $gg3  as $gg_val  ){
			$gr3 .= 'im_'.$i++.'='.'"'.$gg_val['title'].';'.$gg_val['caption'].';'.$gg_val['url'].'" ';
		}
		$gg4 = get_field('картинки_для_3-й_шаг4', 560);
		$i = 1;
		foreach( $gg4  as $gg_val  ){
			$gr4 .= 'im_'.$i++.'='.'"'.$gg_val['title'].';'.$gg_val['caption'].';'.$gg_val['url'].'" ';
		}
		$gg5 = get_field('картинки_для_3-й_шаг5', 560);
		$i = 1;
		foreach( $gg5  as $gg_val  ){
			$gr5 .= 'im_'.$i++.'='.'"'.$gg_val['title'].';'.$gg_val['caption'].';'.$gg_val['url'].'" ';
		}
		$gg6 = get_field('картинки_для_3-й_шаг6', 560);
		$i = 1;
		foreach( $gg6  as $gg_val  ){
			$gr6 .= 'im_'.$i++.'='.'"'.$gg_val['title'].';'.$gg_val['caption'].';'.$gg_val['url'].'" ';
		}
					?>
		
		<div class="m-edit">
			<div class="container">
				<ul id="menu-ed" class="menu">
					<li id="menu-item" class="menu-in"> 
					
						<a id-category="14" <?php echo $gr1; ?> class="active">Скандинавский</a>
						<span class="645"> 
							<?php echo get_field('гостинная', 560);	?>
						</span>	 
						<span class="567"> 						
							<?php echo get_field('кухня', 560);	?>
						</span>
						<span class="559">
							<?php echo get_field('прихожая', 560);	?>
						</span>	
						<span class="915"> 
							<?php echo get_field('санузел_общ', 560);	?>
						</span>
						<span class="569"> 
							<?php echo get_field('санузел_1', 560);	?>
						</span>	
						<span class="570"> 
							<?php echo get_field('санузел_2', 560);	?>
						</span>
						<span class="568"> 
							<?php echo get_field('спальня_1', 560);	?>
						</span>	
						<span class="1138"> 
							<?php echo get_field('спальня_2', 560);	?>
						</span>	
						<span class="1139"> 
							<?php echo get_field('спальня_3', 560);	?>
						</span>		
						<span class="850"> 
							<?php echo get_field('детская_1', 560);	?>
						</span>	
						<span class="1134"> 
							<?php echo get_field('детская_2', 560);	?>
						</span>	
						<span class="1135"> 
							<?php echo get_field('детская_3', 560);	?>
						</span>	
						<span class="851"> 
							<?php echo get_field('кабинет_1', 560);	?>
						</span>	
						<span class="1136"> 
							<?php echo get_field('кабинет_2', 560);	?>
						</span>	
						<span class="1137"> 
							<?php echo get_field('кабинет_3', 560);	?>
						</span>	

					</li> 
					
					<li id="menu-item" class="menu-in"> 
						<a id-category="15"  <?php echo $gr2; ?> class="">Классика</a>
						<span class="645"> 
							<?php echo get_field('гостинная_копировать', 560);	?>
						</span>	 
						<span class="567"> 						
							<?php echo get_field('кухня_копировать', 560);	?>
						</span>
						<span class="559">
							<?php echo get_field('прихожая_копировать', 560);	?>
						</span>	
						<span class="915"> 
							<?php echo get_field('санузел_общ_копировать', 560);	?>
						</span>
						<span class="569"> 
							<?php echo get_field('санузел_1_копировать', 560);	?>
						</span>	
						<span class="570"> 
							<?php echo get_field('санузел_2_копировать', 560);	?>
						</span>
						<span class="568"> 
							<?php echo get_field('спальня_1_копировать', 560);	?>
						</span>	
						<span class="1138"> 
							<?php echo get_field('спальня_2_копировать', 560);	?>
						</span>	
						<span class="1139"> 
							<?php echo get_field('спальня_3_копировать', 560);	?>
						</span>		
						<span class="850"> 
							<?php echo get_field('детская_1_копировать', 560);	?>
						</span>	
						<span class="1134"> 
							<?php echo get_field('детская_2_копировать', 560);	?>
						</span>	
						<span class="1135"> 
							<?php echo get_field('детская_3_копировать', 560);	?>
						</span>	
						<span class="851"> 
							<?php echo get_field('кабинет_1_копировать', 560);	?>
						</span>	
						<span class="1136"> 
							<?php echo get_field('кабинет_2_копировать', 560);	?>
						</span>	
						<span class="1137"> 
							<?php echo get_field('кабинет_3_копировать', 560);	?>
						</span>	
					</li> 
					
					<li id="menu-item" class="menu-in"> 
						<a id-category="16"  <?php echo $gr3; ?>  class="">Современный</a>
						<span class="645"> 
							<?php echo get_field('гостинная_копировать2', 560);	?>
						</span>	 
						<span class="567"> 						
							<?php echo get_field('кухня_копировать2', 560);	?>
						</span>
						<span class="559">
							<?php echo get_field('прихожая_копировать2', 560);	?>
						</span>	
						<span class="915"> 
							<?php echo get_field('санузел_общ_копировать2', 560);	?>
						</span>
						<span class="569"> 
							<?php echo get_field('санузел_1_копировать2', 560);	?>
						</span>	
						<span class="570"> 
							<?php echo get_field('санузел_2_копировать2', 560);	?>
						</span>
						<span class="568"> 
							<?php echo get_field('спальня_1_копировать2', 560);	?>
						</span>	
						<span class="1138"> 
							<?php echo get_field('спальня_2_копировать2', 560);	?>
						</span>	
						<span class="1139"> 
							<?php echo get_field('спальня_3_копировать2', 560);	?>
						</span>		
						<span class="850"> 
							<?php echo get_field('детская_1_копировать2', 560);	?>
						</span>	
						<span class="1134"> 
							<?php echo get_field('детская_2_копировать2', 560);	?>
						</span>	
						<span class="1135"> 
							<?php echo get_field('детская_3_копировать2', 560);	?>
						</span>	
						<span class="851"> 
							<?php echo get_field('кабинет_1_копировать2', 560);	?>
						</span>	
						<span class="1136"> 
							<?php echo get_field('кабинет_2_копировать2', 560);	?>
						</span>	
						<span class="1137"> 
							<?php echo get_field('кабинет_3_копировать2', 560);	?>
						</span>	

					</li> 
					<li id="menu-item" class="menu-in">
						<a id-category="17"  <?php echo $gr4; ?> class="">Лофт</a>
						<span class="645"> 
							<?php echo get_field('гостинная_копировать3', 560);	?>
						</span>	 
						<span class="567"> 						
							<?php echo get_field('кухня_копировать3', 560);	?>
						</span>
						<span class="559">
							<?php echo get_field('прихожая_копировать3', 560);	?>
						</span>	
						<span class="915"> 
							<?php echo get_field('санузел_общ_копировать3', 560);	?>
						</span>
						<span class="569"> 
							<?php echo get_field('санузел_1_копировать3', 560);	?>
						</span>	
						<span class="570"> 
							<?php echo get_field('санузел_2_копировать3', 560);	?>
						</span>
						<span class="568"> 
							<?php echo get_field('спальня_1_копировать3', 560);	?>
						</span>	
						<span class="1138"> 
							<?php echo get_field('спальня_2_копировать3', 560);	?>
						</span>	
						<span class="1139"> 
							<?php echo get_field('спальня_3_копировать3', 560);	?>
						</span>		
						<span class="850"> 
							<?php echo get_field('детская_1_копировать3', 560);	?>
						</span>	
						<span class="1134"> 
							<?php echo get_field('детская_2_копировать3', 560);	?>
						</span>	
						<span class="1135"> 
							<?php echo get_field('детская_3_копировать3', 560);	?>
						</span>	
						<span class="851"> 
							<?php echo get_field('кабинет_1_копировать3', 560);	?>
						</span>	
						<span class="1136"> 
							<?php echo get_field('кабинет_2_копировать3', 560);	?>
						</span>	
						<span class="1137"> 
							<?php echo get_field('кабинет_3_копировать3', 560);	?>
						</span>	
					</li> 
					<li id="menu-item" class="menu-in"> 
						<a id-category="18"  <?php echo $gr5; ?> class="">Эко</a>
						<span class="645"> 
							<?php echo get_field('гостинная_копировать4', 560);	?>
						</span>	 
						<span class="567"> 						
							<?php echo get_field('кухня_копировать4', 560);	?>
						</span>
						<span class="559">
							<?php echo get_field('прихожая_копировать4', 560);	?>
						</span>	
						<span class="915"> 
							<?php echo get_field('санузел_общ_копировать4', 560);	?>
						</span>
						<span class="569"> 
							<?php echo get_field('санузел_1_копировать4', 560);	?>
						</span>	
						<span class="570"> 
							<?php echo get_field('санузел_2_копировать4', 560);	?>
						</span>
						<span class="568"> 
							<?php echo get_field('спальня_1_копировать4', 560);	?>
						</span>	
						<span class="1138"> 
							<?php echo get_field('спальня_2_копировать4', 560);	?>
						</span>	
						<span class="1139"> 
							<?php echo get_field('спальня_3_копировать4', 560);	?>
						</span>		
						<span class="850"> 
							<?php echo get_field('детская_1_копировать4', 560);	?>
						</span>	
						<span class="1134"> 
							<?php echo get_field('детская_2_копировать4', 560);	?>
						</span>	
						<span class="1135"> 
							<?php echo get_field('детская_3_копировать4', 560);	?>
						</span>	
						<span class="851"> 
							<?php echo get_field('кабинет_1_копировать4', 560);	?>
						</span>	
						<span class="1136"> 
							<?php echo get_field('кабинет_2_копировать4', 560);	?>
						</span>	
						<span class="1137"> 
							<?php echo get_field('кабинет_3_копировать4', 560);	?>
						</span>	
					</li> 
					<li id="menu-item" class="menu-in"> 
						<a id-category="19"  <?php echo $gr6; ?> class="">Индивидуальный</a> 
						<span class="645"> 
							<?php echo get_field('гостинная_копировать5', 560);	?>
						</span>	 
						<span class="567"> 						
							<?php echo get_field('кухня_копировать5', 560);	?>
						</span>
						<span class="559">
							<?php echo get_field('прихожая_копировать5', 560);	?>
						</span>	
						<span class="915"> 
							<?php echo get_field('санузел_общ_копировать5', 560);	?>
						</span>
						<span class="569"> 
							<?php echo get_field('санузел_1_копировать5', 560);	?>
						</span>	
						<span class="570"> 
							<?php echo get_field('санузел_2_копировать5', 560);	?>
						</span>
						<span class="568"> 
							<?php echo get_field('спальня_1_копировать5', 560);	?>
						</span>	
						<span class="1138"> 
							<?php echo get_field('спальня_2_копировать5', 560);	?>
						</span>	
						<span class="1139"> 
							<?php echo get_field('спальня_3_копировать5', 560);	?>
						</span>		
						<span class="850"> 
							<?php echo get_field('детская_1_копировать5', 560);	?>
						</span>	
						<span class="1134"> 
							<?php echo get_field('детская_2_копировать5', 560);	?>
						</span>	
						<span class="1135"> 
							<?php echo get_field('детская_3_копировать5', 560);	?>
						</span>	
						<span class="851"> 
							<?php echo get_field('кабинет_1_копировать5', 560);	?>
						</span>	
						<span class="1136"> 
							<?php echo get_field('кабинет_2_копировать5', 560);	?>
						</span>	
						<span class="1137"> 
							<?php echo get_field('кабинет_3_копировать5', 560);	?>
						</span>	
					</li>  
				</ul>
			</div>
		</div>
		
		<div class="container editor-page" id="editor">
		
			<span id="fooс" class="">Введите площадь квартиры.</span>
            <div id="content-1">
				<ul id="menu-l" class="menux">
					<li class="menu-post visable">
							<a id-post="645">Гостиная</a>
					</li>
					<li class="menu-post visable">
							<a id-post="567">Кухня</a>
					</li>
					<li class="menu-post visable">
							<a id-post="559">Прихожая</a>
					</li>
					<li class="menu-post sv1">
									<a id-post="915">Санузел общ.</a>
								</li>
					<li class="menu-post sv2">
									<a id-post="569">Санузел </a>
								</li>
					<li class="menu-post sv3">
									<a id-post="570">Санузел 2</a>
								</li>
								
					<li class="dropdown">
						<a id-post="">+</a>
						<ul class="dropdown-m">
							<ul class="ss">
								<li class="s1 clos menu-post"><span class="s1"></span><a id-post="568">Спальня</a></li>
								<li class="s2 clos menu-post"><span class="s2"></span><a id-post="1138">Спальня 2</a></li>
								<li class="s3 clos menu-post"><span class="s3"></span><a id-post="1139">Спальня 3</a></li>
							</ul>
							<ul class="dd">
								<li class="d1 clos menu-post"><span  class="d1"></span><a id-post="850">Детская</a></li>
								<li class="d2 clos menu-post"><span  class="d2"></span><a id-post="1134">Детская 2</a></li>
								<li class="d3 clos menu-post"><span  class="d3"></span><a id-post="1135">Детская 3</a></li>
							</ul>
							<ul class="kk">
								<li class="k1 clos menu-post"><span  class="k1"></span><a id-post="851">Кабинет</a></li>
								<li class="k2 clos menu-post"><span  class="k2"></span><a id-post="1136">Кабинет 2</a></li>
								<li class="k3 clos menu-post"><span  class="k3"></span><a id-post="1137">Кабинет 3</a></li>
							</ul>
						</ul>
					</li>

                </ul>
			</div>
			<div id="content-2">
				<div id="img">
					
				</div>
				<div id="img2" style="display:none;">
					
					
				</div>
				<div id="pad"><?php echo get_field('текст_под_картинкой', 560);	?></div>
				<span id="foo">Загрузка...</span>
				
			</div>
			<div id="content-3">
				<div class="min">
				<div id="edit_r">
					<a>РЕДАКТИРОВАТЬ СТИЛЬ</a>
				</div>
				
				<div class="accordion-container">
				
				<!-- <span id="red"><a href="#" class="btn-order">Редактировать</a></span> -->
 				  <div class="set set1" >
					<a class="active">
					  <b>Пол </b>
					  <i class="fa stbo"></i>
					</a>
					<div class="tcontent" id="option1" style="display: block;">
					</div>
				  </div>
				  <div class="set set2">
					<a>
					  Cтены
					  <i class="fa stb"></i>
					</a>
					<div class="tcontent" id="option2">
					</div>
				  </div>
				  <div class="set san">
					<a>
					  Плитка
					  <i class="fa stb"></i>
					</a>
					<div class="tcontent" id="option8">
					</div>
				  </div>
				  <div class="set san">
					<a>
					  Сантехника
					  <i class="fa stb"></i>
					</a>
					<div class="tcontent" id="option9">
					</div>
				  </div>
				  <div class="set  set3">
					<a>
					  Двери
					  <i class="fa stb"></i>
					</a>
					<div class="tcontent" id="option3">
					</div>
				  </div>
				   <div class="set  set4">
					<a >
					  Плинтус
					  <i class="fa stb"></i> 
					</a>
					<div class="tcontent"  id="option7">
					  
					</div>
				  </div>
				  <div class="set  set5">
					<a >
					  Потолок
					  <i class="fa stb"></i> 
					</a>
					<div class="tcontent" id="option4" >
					</div>
				  </div>
				  <div class="set  set6">
					<a >
					  Акцентная стена
					  <i class="fa stb"></i> 
					</a>
					<div class="tcontent" id="option5">
					</div>
				  </div>
				  <div class="set  set7">
					<a >
					  Инженерия
					  <i class="fa stb"></i> 
					</a>
					<div class="tcontent" id="option6">
					</div>
				  </div>
				  <div class="set  set8">
					<a >
					  Мебель
					  <i class="fa stb"></i> 
					</a>
					<div class="tcontent" id="option10">
					</div>
				  </div>
				 
				  </div>
				</div>
				
				<div id="next" class="menu-block step1">
				<a  class="btn-order">Продолжить</a>
			</div>
			</div>
			
			
        </div>
		<div id="pad1"><?php echo get_field('текст_под_картинкой', 560);	?></div>
			
	</div>

	<div id="step2">
		<div class="m-edit">
				<div class="container">
					<p>Выберите необходимые опции</p>
				</div>
		</div>
		<div class="container option-page" id="option">
			<h4>Уменьшить стоимость</h4>
			<div class="field_o">
				<label class="checkbox">
					<span class="niceCheck" id="so1">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc1', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so1"  data-price="-30500"> 
						<em>Не нужна стяжка и наливной пол  
						<em id="nn2">-30 500 Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so2">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc2', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so2"  data-price="15000"> 
						<em>Не нужно оштукатуривание стен по маякам   
						<em id="nn2">-90 000 Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so3">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc3', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so3"  data-price="15000"> 
						<em>Не нужна электрика базовая   
						<em id="nn2">-90 000 Р.</em>
						</em>
						</span>
				</label>
			</div>
			<h4>Планировка</h4>
			<div class="field_o">
				<label class="checkbox">
					<span class="niceCheck"  id="so4">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc4', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so4"  data-price="15000"> 
						<em>Эскиз планировки квартиры с расстановкой мебели 
						<em id="nn2">Бесплатно</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so5">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc5', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so5"  data-price="15000"> 
						<em>Эскизный проект объединения санузлов  
						<em id="nn2">Бесплатно</em>
						</em>
						</span>
				</label>
			</div>
			
			<h4>ЧЕРНОВЫЕ РАБОТЫ</h4>
			<div class="field_o">
				<label class="checkbox">
					<span class="niceCheck"  id="so6">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc6', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so6"  data-price="15000"> 
						<em>Демонтаж покрытия стен, пола, потолка
						<em id="nn2">+29 000 Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so7">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc7', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so7"  data-price="15000"> 
						<em>Возведение стен из пазогребневых блоков 
						<em id="nn2">+29 000 Р.</em>
						</em>
						</span>
				</label>
			</div>
			
			
			<h4>Инженерия</h4>
			<div class="field_o">
				<label class="checkbox">
					<span class="niceCheck"  id="so8">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc8', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so8"  data-price="15000"> 
						<em>Монтаж/замена электропроводки стандартная (3-5 точек на комнату)
						<em id="nn2">Бесплатно</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so9">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc9', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so9"  data-price="15000"> 
						<em>Монтаж/замена электропроводки по индивидуальному проекту
						<em id="nn2">+ Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so10">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc10', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so10"  data-price="15000"> 
						<em>Материал труб сшитый полиэтилен (Rehau) вместо полипропилена
						<em id="nn2">+ Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so22">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc11', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so22"  data-price="15000"> 
						<em>Замена смесителей Lemark (Чехия) на смесители Grohe (Германия)
						<em id="nn2">8 000 Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so12">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc13', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so12"  data-price="15000"> 
						<em>Установка кондиционера (инверторный, белого цвета) Указать количество блоков

						<em id="nn2">+35 000 Р.</em>
						</em>
						</span>
						<em id="nnr"><input type="text"  class="i_option"  name="iso12"></em>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so13">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc14', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so13"  data-price="15000"> 
						<em>Установка система защиты от протечек (Аквасторож)
						<em id="nn2">+19 900 Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so14">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc15', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so14"  data-price="15000"> 
						<em>Теплый пол санузел
						<em id="nn2">+ Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so15">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc16', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so15"  data-price="15000"> 
						<em>Теплый пол (кухня) (указать кол-во метров)
						<em id="nn2">+ Р.</em>
						</em>
						</span>
						<em id="nnr"><input type="text"  class="i_option"  name="iso15"></em>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so16">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc17', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so16"  data-price="15000"> 
						<em>Теплый пол в комнаты (указать кол-во метров)
						<em id="nn2">+ Р.</em>
						</em>
						</span>
						<em id="nnr"><input type="text"  class="i_option"  name="iso16"></em>
				</label>
			</div>
			
			
			<h4>Комплектация</h4>
			<div class="field_o">
				<label class="checkbox">
					<span class="niceCheck"  id="so17">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc18', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so17"  data-price="15000"> 
						<em>Индивидуальный подбор мебели в стиль интерьера (спецификация)
						<em id="nn2">+25 000 Р.</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so18">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc19', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so18"  data-price="15000"> 
						<em>Установка штор (указать кол-во окон) 
						
						<em id="nn2">+10 000 Р.</em>
						</em>
					</span>
					<em id="nnr"><input type="text"  class="i_option"  name="iso18"></em>
				</label>
			</div>
			
			<h4>Индивидуальный расчет</h4>
			<div class="field_o">
				<label class="checkbox">
					<span class="niceCheck"  id="so19">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc20', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so19"  data-price="15000"> 
						<em>Замена окон
						<em id="nn2">Индивидуально</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so20">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc21', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so20"  data-price="15000"> 
						<em>Отделка балкона
						<em id="nn2">Индивидуально</em>
						</em>
						</span>
				</label>
				<label class="checkbox">
					<span class="niceCheck"  id="so21">
						<div id="zv" class="o1">
							<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc22', 560);	?></span></a>
						</div>
						<input type="checkbox"  class="fix_option"  name="so21"  data-price="15000"> 
						<em>Установка кухни (с бытовой техникой)
						<em id="nn2">Индивидуально</em>
						</em>
						</span>
				</label>
			</div>
			
			
			
		</div>
		<br><br>
		<div class="container" id="cni">
			<div class="col-lg-offset-2 col-md-offset-2 col-lg-7 col-md-7 col-sm-12 col-xs-12">
							<p>Чтобы увидеть сокращенную смету и посмотреть картинки дизайна каждой комнаты нажмите «ПРОДОЛЖИТЬ».</p>
							</div>
			
			<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<div id="next" class="menu-block step2">
				<a href="#" class="btn-order">Выбрать опции</a>
			</div>
			
							</div>
							</div>
	</div>
	
	<div id="step3">
		<div class="m-edit">
				<div class="container">
					<p>Выбранный дизайн</p>
				</div>
		</div>
		<div class="container option-page" id="option">
			<div class="slider-select-design-wrap slider-parent-block">
				<div id="c-img" class="sliders">  
				
				 </div>
				 <div class="slider-txt">Гостиная</div>
			</div>
			
			<h4>Индивидуальный расчет</h4>
			
			<div id="line_r" class="st1">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc23', 560);	?></span></a>
				</div>
				<em>Работы по полу
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			<div id="line_r"  class="st2">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc24', 560);	?></span></a>
				</div>
				<em>Работы по потолку
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			<div id="line_r"  class="st3">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc25', 560);	?></span></a>
				</div>
				<em>Работы по стенам
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
				<div id="line_r"  class="st4">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc26', 560);	?></span></a>
				</div>
				<em>Электромонтажные работы
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			<div id="line_r"  class="st5">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc27', 560);	?></span></a>
				</div>
				<em>Сантехнические работы
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			<div id="line_r"  class="st6">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc28', 560);	?></span></a>
				</div>
				<em>Прочие работы(укрытие пленкой, подъем, уборка и пр)
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			<div id="line_r"  class="st7">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc29', 560);	?></span></a>
				</div>
				<em>Черновые материалы с сантехникой и электрикой
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			<div id="line_r"  class="st8">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc30', 560);	?></span></a>
				</div>
				<em>Чистовые материалы комнат
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			<div id="line_r"  class="st9">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc31', 560);	?></span></a>
				</div>
				<em>Чистовые материалы санузла
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			<div id="line_r"  class="st10">
				<div id="zv" class="o1">
					<a class="tooltip1"><div>?</div><span class="classic"><?php echo get_field('opc32', 560);	?></span></a>
				</div>
				<em>Дополнительные материалы и работы
				<em id="nn2">Индивидуально</em>
				</em>
			</div>
			
				
		</div>
		<div id="line_r"  class="it">
				<div class="container  option-page" id="option">
					<em>Итого:
					<em id="nn2">-</em>
					</em>
				</div>
			</div>
			
			<div class="form-order-block container" id="send_r">
            
            <div class="col-lg-8 col-lg-offset-2 col-md-12">
			
			<div class="col-lg-12 col-md-12"><p>Чтобы получить на электронную почту выбранный дизайн каждой комнаты и сокращенную смету, оставьте заявку в форме ниже.</p></div>
			
                <form class="form">
					<div class="col-lg-4 col-md-4 col-sm-4"><input type="text" name="phone" placeholder="Ваш телефон"></div>
                    <div class="col-lg-4 col-md-4 col-sm-4"><input type="text" name="email" placeholder="Электронная почта"></div>
                    
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        
						<a class="btn-order">Получить расчет</a>
                    </div>
					
					<p id="comp"></p>
                </form>
				<div class="col-lg-12 col-md-12"><span>Нажимая кнопку "Получить расчет", я подтверждаю свое согласие на обработку персональных данных в соответствии с указанным <a href="#" data-toggle="modal" data-target="#modz">здесь</a> текстом. 
</span></div>
				<span id="send1" class="">Пожалуйста подождите идет отправка на почту...</span>
				<span id="send2" class="">Спасибо, ваша заявка принята!</span>
            </div>
        </div>
	</div>
	

	
	<div id="result">
		<div class="container">
		
			<span id="ph1">
				<span id="ph">
					<span id="fo">
					<div class="form-order-block">
					<form class="form">
					
						<input type="text" name="phone" placeholder="Телефон">
						
							<input type="hidden" name="title" value="Новая заявка на &quot;Бесплатный замер и консультацию&quot;">
							<button type="submit">Заказать звонок</button>
						
					</form>
            
				</div></span>
				</span> 
				<span id="no">8 (495) 255-45-99</span>
				
			</span>
			<div id="bead">
				<a  class="active st1">1. Редактор стиля</a>
				<a  class=" st2">2. Опции</a>
				<a  class=" st3">3. Получить расчет</a>
			</div>
			
			<a id="back" style="     background: #FAE029;
    color: #3E3E3E;
    font: 12px 'GothaProMedium';
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    padding: 7px 5px;
    float: left;
    margin-top: 8px;
    font-size: 25px;
    line-height: 24px;
    padding-bottom: 12px;
    padding-left: 20px;
    padding-right: 20px;
    position: absolute;
    right: 200px;" class="btn-order">&lsaquo;</a>
			
			<div id="pric">
				0 Р.
			</div>
			
		</div>
	</div>

	
</div>


<div id="help">
	<div id="help_1">
		<div id="str1"></div>
		<div class="info_h">Укажите данные по квартире</div>
		<div class="b_next menu-block"><a  class="btn-order">Далее</a></div>
	</div>
	<div id="help_2">
		<div id="str1"></div>
		<div class="info_h">Выберите один из стилей</div>
		<div class="b_next menu-block"><a  class="btn-order">Далее</a></div>
	</div>
	<div id="help_3">
		<div id="str3"></div>
		<div class="info_h">Добавьте необходимые<br>комнаты и изучите стиль каждой</div>
		<div class="b_next menu-block"><a  class="btn-order">Далее</a></div>
	</div>
	<div id="help_4">
		<div id="str4"></div>
		<div class="info_h">Нажмите кнопку "Редактировать стиль"<br>и меняйте элементы стиля на свой вкус</div>
		<div class="b_next menu-block"><a  class="btn-order">Далее</a></div>
	</div>
	
	<div id="mask"></div>

</div>


    <script type="text/javascript" src="/wp-content/themes/produmano/editor/fun_calc.js"></script>
<script type="text/javascript" src="/wp-content/themes/produmano/editor/all.js"></script>



<div id="modv" class="modal fade bs-example-modal-sm" data-toggle="modv">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
                <h3>Подтвердите действие</h3>
                При изменении стиля некоторые выбранные Вами опции будут заменены. Продолжить?  
               
			<div class="modal-footer">
				<button class="btn btn-default" type="button" data-dismiss="modal" id="no">Нет</button>
				<button class="btn btn-primary" type="button" data-dismiss="modal" id="yes">Да</button>
			</div>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="ck = 0">×</button>
        </div>
      </div>
</div>
	
<?php get_footer(); ?>