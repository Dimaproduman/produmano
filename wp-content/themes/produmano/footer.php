    <div class="form-order-main">
	
        <div class="gl container foo">
			
			<div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12  sc foo1">
                        <span class="f36">ВНИМАНИЕ! НЕ НАЧИНАЙТЕ РЕМОНТ!</span>
<span  class="fpo">СНАЧАЛА ПОЛУЧИТЕ БЕСПЛАТНО ЗАМЕР<br>
С КОНСУЛЬТАЦИЕЙ НАШЕГО АРХИТЕКТОРА И ПРОРАБА.</span>

<span class="fpoo" >Сделать для вас ремонт продуманным – основная наша задача.<br>
Просто позвоните нам сейчас: <span class="roistat-phone">8 (495) 255-45-99</span><br>
Или оставьте заявку на консультацию.</span>
						
					</div>
											
					<div class="col-lg-4 col-md-4 col-sm-12  scf ">
						
						<div class="form-order-block form-gl form-foo">
						
						<p class="zform">Заявка на бесплатный замер
и консультацию</p>
							<form class="form">
								<input type="text" name="name" placeholder="Ваше имя">
								<input type="text" name="phone" placeholder="Телефон">
								
				
								
									<input type="hidden" name="title" value="Новая заявка на &quot;Бесплатный замер и консультацию&quot;">
									
									
									
									<button type="submit">Отправить</button>
								
							</form>
							
						
					</div>
						
                    </div>
            </div>
		
		
		</div>
    </div>
    
    <div class="partner-main">
	
        <div class="partner-block container">
            <ul>
                <?php if( have_rows('парнеры') ): ?>
                    <?php while( have_rows('парнеры') ): the_row(); 
                        $image = get_sub_field('изображение');
                        $link = get_sub_field('ссылка');
                        ?>
                        <li><img src="<?php echo $image['url']; ?>" alt=""></li>
                    <?php endwhile; ?>
                <?php endif; ?>
            </ul>
        </div>
    </div>
    
    <div class="footer-main">
        <div class="footer-block container">
		<a href="#" style="    bottom: 45px;" id="h_phone" data-toggle="modal" data-target="#modCall2" class="btn-consult"></a> 
            <div class="row">
                <ul class="footer-menu hidden-xxs">
                    <li class="logo hidden-sm hidden-xs"><a href="/"><img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt=""></a></li>
                    <?php wp_nav_menu(array('theme_location' => 'footer-menu', 'container' => '', 'items_wrap' => '%3$s')); ?>
                    <li class="hidden-md hidden-sm hidden-xs">
                        <?php if(get_field('телефон', 6) == true) { ?>
                            <div class="phone"><?php echo get_field('телефон', 6); ?><span><?php echo get_field('адрес', 6); ?></span></div>
							
                        <?php }?>
                    </li>
                </ul>
                
                <?php if(get_field('телефон', 6) == true) { ?>
                    <div class="phone hidden-lg"><?php echo get_field('телефон', 6); ?><span><?php echo get_field('адрес', 6); ?></span></div>
                <?php }?>
                
                <a class="logo hidden-lg hidden-md" href="/"><img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt=""></a>
            </div>
        </div>
    </div>
    
    <div class="copyright-main">
        <div class="copyright container">
            <p>© ООО "АСК Продумано", 2016-2017</p>
        </div>
    </div>

    <div class="bg-site"></div>
    
	<div id="modCalls" class="modal fade bs-example-modal-sm" data-toggle="modCalls">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
                <h3>Получить смету</h3>
                <form class="form" id="zv1" >
                    <input type="text" name="name" placeholder="Ваше имя">
                    <input type="text" name="phone" placeholder="Ваш номер телефона">
					<input type="text" name="email" placeholder="Ваш email">
                    <input type="hidden" name="title" value='Новая заявка с формы "Получить смету"'>
					  <input type="hidden" name="d1" >
					  <input type="hidden" name="d2" >
						<input type="hidden" name="d3" >
						<input type="hidden" name="d4" >
                    <input type="hidden" name="d5" >
                    <input type="hidden" name="d6" >
                    <button type="submit">Отправить</button>
                </form>
				<p id="fz" style="font-size: 12px;
    line-height: 16px;
    padding-top: 20px;"> Нажимая кнопку "Отправить", я подтверждаю своё согласие на обработку персональных данных в соответствии с указанным <a href="#" data-toggle="modal" data-target="#modz">здесь</a> текстом.
</p>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
      </div>
    </div>
	
	
	
	
	
    <div id="modCall" class="modal fade bs-example-modal-sm" data-toggle="modCall">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
                <h3>Заказать звонок</h3>
                <form class="form" id="zv1" >
                    <input type="text" name="name" placeholder="Ваше имя">
                    <input type="text" name="phone" placeholder="Ваш номер телефона">
                    <input type="hidden" name="title" value='Новая заявка с формы "Заказать звонок"'>
                    <button type="submit">Отправить</button>
                </form>
				<p id="fz" style="font-size: 12px;
    line-height: 16px;
    padding-top: 20px;"> Нажимая кнопку "Отправить", я подтверждаю своё согласие на обработку персональных данных в соответствии с указанным <a href="#" data-toggle="modal" data-target="#modz">здесь</a> текстом.
</p>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
      </div>
    </div>
	
	
	<div id="modCall2" class="modal fade bs-example-modal-sm" data-toggle="modCall2">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
                <h3>Заказать звонок</h3>
                <form class="form" id="zv1" >
                    <input type="text" name="name" placeholder="Ваше имя">
                    <input type="text" name="phone" placeholder="Ваш номер телефона">
                    <input type="hidden" name="title" value='Новая заявка с формы "Заказать звонок" значек слева'>
                    <button type="submit">Отправить</button>
                </form>
				<p id="fz" style="font-size: 12px;
    line-height: 16px;
    padding-top: 20px;"> Нажимая кнопку "Отправить", я подтверждаю своё согласие на обработку персональных данных в соответствии с указаным <a href="#" data-toggle="modal" data-target="#modz">здесь</a> текстом.
</p>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
      </div>
    </div>
	
	
	<div id="modz" class="modal fade bs-example-modal-sm" data-toggle="modCall">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-body">
                <h3>Cогласие на обработку персональных данных</h3>
                <p>Своей волей и в своем интересе Я подтверждаю свою дееспособность и даю согласие на обработку, в т.ч. на сбор, систематизацию, накопление, хранение, (уточнение, обновление, изменение), использование, передачу третьим лицам, обезличивание, блокирование, уничтожение, моих персональных данных, которые в зависимости от документа (анкета, заявление и т.п.) включают, но не ограничиваются следующими ПДн: ФИО, дата рождения, пол, паспортные данные (серия, номер, кем и когда выдан), адрес регистрации или пребывания (фактический адрес проживания), номер контактного телефона, адрес электронной почты, Обществу с ограниченной ответственностью «АСК Продумано», ОГРН 1167746492847  (111033, Россия, Москва, ул. Золоторожский Вал, 22), с целью предоставления мне своих товаров и услуг (продуктов), включая, но не ограничиваясь: осуществление доставки, предоставление сервисных услуг, распространения рекламных сообщений (в т.ч. о проводимых акциях и специальных предложениях через любые каналы коммуникации, в том числе по почте, SMS, электронной почте, телефону, иным средствам связи), сбора мнения о работе сервиса ремонта ООО «АСК Продумано». 
Я согласен(на), что мои персональные данные будут обрабатываться способами, соответствующими целям обработки персональных данных, в т.ч. с использованием средств автоматизации или без использования таких средств. А так же я согласен(на) с тем, что согласие данное мной в электронной форме на сайте является согласием, полностью отвечающим требованиям законодательства о персональных данных и позволяющим подтвердить факт его получения ООО «АСК Продумано». 
Согласие дается мной на все время действия сервиса. 
При этом я проинформирован (-а) и согласен (-а) с тем, что отзыв настоящего согласия будет автоматически прекращать мое участие в Программе лояльности, так же мне придется повторно давать согласие на обработку ПДн в случае, если я снова решу воспользоваться услугами или продуктами ООО «АСК Продумано», требующими заполнения анкет, заявлений и т.п., содержащих мои ПДн.
</p>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
      </div>
    </div>
	

	
	
   


   <div id="hhh" style="    height: 100%;
    position: fixed;"></div>


   
    <div id="thanks" class="modal fade">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
                <h3>Спасибо</h3>
                <p>Ваше сообщение успешно отправлено! Мы свяжемся с Вами в самое ближайшее время.</p>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
      </div>
    </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	

	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="<?php bloginfo('template_url'); ?>/js/bootstrap.js"></script>

    <!-- Custom Javascript file -->
    <script src="https://npmcdn.com/masonry-layout@4.0/dist/masonry.pkgd.min.js"></script>
    <script>
        $('.grid').masonry({
            itemSelector: '.item',
            singleMode: false,
                isResizable: true,
                isAnimated: true,
                animationOptions: { 
                    queue: false, 
                    duration: 500 
                },
            columnWidth: 160,
            gutter: 8
        });
		if ($(window).width() <= '420'){
			document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=1, maximum-scale=0.75, user-scalable=no, width=device-width');
		}
    </script>

	<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/custom.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.maskedinput.js"></script>
	<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/form/form.js"></script>
	
	<!-- bxSlider Javascript file -->
    <script src="<?php bloginfo('template_url'); ?>/js/jquery.bxslider.js"></script>
    <script>
        $(document).ready(function(){
            $('.slider').bxSlider({
              controls: true,
              pager: ($(".slider>li").length > 1) ? true: false,
              infiniteLoop: false,
              hideControlOnEnd: true,
              nextText: '<i class="fa fa-angle-right"></i>',
              prevText: '<i class="fa fa-angle-left"></i>',
                touchEnabled: false
            });
        });
    </script>
    <?php if(is_page('design')) { ?>
        <script>
            $(document).ready(function(){

                if (document.body.clientWidth <= '768') {
                    window.slider_select_design = $('.slider-select-design').bxSlider({
                      controls: false,
                      pager: true,
                      maxSlides: 1,
                      infiniteLoop: false,
                      hideControlOnEnd: true,
                      nextText: '<i class="fa fa-angle-right"></i>',
                      prevText: '<i class="fa fa-angle-left"></i>',
                      touchEnabled: false
                    });
                    window.slider_select_design2 = $('.slider-select-design2').bxSlider({
                      controls: false,
                      pager: true,
                      maxSlides: 1,
                      infiniteLoop: false,
                      hideControlOnEnd: true,
                      nextText: '<i class="fa fa-angle-right"></i>',
                      prevText: '<i class="fa fa-angle-left"></i>',
                      touchEnabled: false
                    });


                    function quickView() {
                      window.sliderModal = $('.select-desing-image').bxSlider({
                          //controls: false,
                          mode:'fade',
                          pager: true,
                          infiniteLoop: false,
                          hideControlOnEnd: true,
                          nextText: '<i class="fa fa-angle-right"></i>',
                          prevText: '<i class="fa fa-angle-left"></i>',
                          touchEnabled: false,
                           onSlideBefore: function(a) {
                            var id = jQuery(a).data('id');
                            var cor = jQuery(a).data('cornice');
                            jQuery('.list-colors a[data-id=' + parseInt(id) + ']').click();

                            var el = jQuery('#ceiling_cornices');
                            var label = el.parent();
                            if(cor == 'with') {
                                label.css("background-position","0 -199px");    
                                el.attr("checked", true)
                                console.log(cor,true)
                            } else {
                                label.css("background-position","0 0");    
                                el.attr("checked", false)
                                console.log(cor,false)
                            }
                          },
                      });
                      setTimeout(function() { sliderModal.reloadSlider();}, 200);

                    }
                    $(".select-design-block").on("click", ".btn-edit", quickView);

                }else{
                    window.slider_select_design = $('.slider-select-design').bxSlider({
                      controls: true,
                      pager: false,
                      maxSlides: 1,
                      infiniteLoop: false,
                      hideControlOnEnd: true,
                      nextText: '<i class="fa fa-angle-right"></i>',
                      prevText: '<i class="fa fa-angle-left"></i>',
                      touchEnabled: false
                    });
                    window.slider_select_design2 = $('.slider-select-design2').bxSlider({
                      controls: true,
                      pager: false,
                      maxSlides: 1,
                      infiniteLoop: false,
                      hideControlOnEnd: true,
                      nextText: '<i class="fa fa-angle-right"></i>',
                      prevText: '<i class="fa fa-angle-left"></i>',
                      touchEnabled: false
                    });

                    function quickView() {
                      window.sliderModal = $('.select-desing-image').bxSlider({
                          controls: true,
                          mode:'fade',
                          pager: false,
                          infiniteLoop: false,
                          hideControlOnEnd: true,
                          nextText: '<i class="fa fa-angle-right"></i>',
                          prevText: '<i class="fa fa-angle-left"></i>',
                          touchEnabled: false,
                          onSlideBefore: function(a) {
                            var id = jQuery(a).data('id');
                            var cor = jQuery(a).data('cornice');
                            jQuery('.list-colors a[data-id=' + parseInt(id) + ']').click();

                            var el = jQuery('#ceiling_cornices');
                            var label = el.parent();
                            if(cor == 'with') {
                                label.css("background-position","0 -199px");    
                                el.attr("checked", true)
                                console.log(cor,true)
                            } else {
                                label.css("background-position","0 0");    
                                el.attr("checked", false)
                                console.log(cor,false)
                            }
                          },

                      });
                      setTimeout(function() { sliderModal.reloadSlider();}, 200);

                    }
                    $(".select-design-block").on("click", ".btn-edit", quickView);
                }
            });
        </script>
    <?php }elseif(is_page('order')) { ?>
        <script>
            $(document).ready(function(){
                if (document.body.clientWidth <= '768') {
                    window.slider_select_design = $('.slider-select-design').bxSlider({
                      controls: false,
                      pager: true,
                      infiniteLoop: false,
                      hideControlOnEnd: true,
                      nextText: '<i class="fa fa-angle-right"></i>',
                      prevText: '<i class="fa fa-angle-left"></i>',
                      touchEnabled: false
                    });
                    window.slider_select_design2 = $('.slider-select-design2').bxSlider({
                      controls: false,
                      pager: true,
                      infiniteLoop: false,
                      hideControlOnEnd: true,
                      nextText: '<i class="fa fa-angle-right"></i>',
                      prevText: '<i class="fa fa-angle-left"></i>',
                      touchEnabled: false
                    });

                    function quickView() {
                      var sliderModal = $('.slider-select-design-modal').bxSlider({
                          controls: false,
                          pager: true,
                          infiniteLoop: false,
                          hideControlOnEnd: true,
                          nextText: '<i class="fa fa-angle-right"></i>',
                          prevText: '<i class="fa fa-angle-left"></i>',
                          touchEnabled: false
                      });
                      setTimeout(function() { sliderModal.reloadSlider();}, 200);

                    }
                    $(".btn-edit").on("click", quickView);

                }else{
                    window.slider_select_design = $('.slider-select-design').bxSlider({
                      controls: true,
                      pager: false,
                      infiniteLoop: false,
                      hideControlOnEnd: true,
                      nextText: '<i class="fa fa-angle-right"></i>',
                      prevText: '<i class="fa fa-angle-left"></i>',
                      touchEnabled: false
                    });
                     window.slider_select_design2 = $('.slider-select-design2').bxSlider({
                      controls: true,
                      pager: false,
                      infiniteLoop: false,
                      hideControlOnEnd: true,
                      nextText: '<i class="fa fa-angle-right"></i>',
                      prevText: '<i class="fa fa-angle-left"></i>',
                      touchEnabled: false
                    });

                    function quickView() {
                      var sliderModal = $('.slider-select-design-modal').bxSlider({
                          controls: true,
                          pager: false,
                          infiniteLoop: false,
                          hideControlOnEnd: true,
                          nextText: '<i class="fa fa-angle-right"></i>',
                          prevText: '<i class="fa fa-angle-left"></i>',
                          touchEnabled: false
                      });
                      setTimeout(function() { sliderModal.reloadSlider();}, 200);

                    }
                    $(".btn-edit").on("click", quickView);
                }
            });
        </script>
    <?php } ?>
    
    <!-- Jquery UI file -->
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    <script>
        $(document).ready(function(){
            if (document.body.clientWidth <= '768') {
                $(function() {
                    $( "#material" ).accordion({
                      header: "h3",
                      heightStyle: "content",
                      collapsible: true,
                      active: false,
                      activate: function( event, ui ) {
                          if(!$.isEmptyObject(ui.newHeader.offset())) {
                              $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top }, 'slow');
                          }
                      }
                    });
                });
            }
			
			
			
			
		jQuery(document).on('click','.sh h4', function(){
			gg = jQuery(this).parent().parent().parent();
			console.log(gg[0]); 
			
			if(jQuery(gg[0]).hasClass('active')){
				jQuery(gg[0]).removeClass('active');
			}
			else{
				jQuery(gg[0]).addClass('active');
			}
			 
		
		});		
		
		
		
			
			
			
        });
    </script>

    <!-- calc -->
    <?php if(is_front_page()){ ?>
        <script type="text/javascript">
            var page = 'home';
            
            jQuery('.select-type').click(function() {
                jQuery('#f_select_repair input').each(function() {
                    var def = jQuery(this).attr('placeholder');
                    if(def && !jQuery(this).val()) {
                        jQuery(this).val(def);
                    }
                });

                jQuery('#repair_type').val(jQuery(this).data('type'));
                jQuery('#f_select_repair').submit();

                return false;
            });
        </script>
		<style>
		.partner-main {
    display: block;
}
		</style>
    <?php }elseif(is_page('design')){ ?>
        <script type="text/javascript">
            var page = 'design';
        </script>
    <?php }elseif(is_page('order')){ ?>
        <script type="text/javascript">
            var page = 'order';
        </script>
    <?php } ?>
    
	  <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/underscore-min.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/backbone-min.js"></script>
  
   <!-- <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/application.js"></script> -->
    
    <?php if(is_page('order!!')){ ?>
        <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/calc-order.js"></script>
    <?php } ?>
    
    <?php if(is_page('design!!')){ ?>
        <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/calc.js"></script>
        <script type="text/javascript">
            // Запуск приложения
            //var app = new ApplicationView();
        </script>
		
    <?php } ?>
   
   
   
   
   
   
   
<script type="text/javascript"> 
(function (d, w, c) { 
(w[c] = w[c] || []).push(function() { 
try { 
w.yaCounter39721995 = new Ya.Metrika({ 
id:39721995, 
clickmap:true, 
trackLinks:true, 
accurateTrackBounce:true, 
webvisor:true 
}); 
} catch(e) { } 
}); 

var n = d.getElementsByTagName("script")[0], 
s = d.createElement("script"), 
f = function () { n.parentNode.insertBefore(s, n); }; 
s.type = "text/javascript"; 
s.async = true; 
s.src = "https://mc.yandex.ru/metrika/watch.js"; 

if (w.opera == "[object Opera]") { 
d.addEventListener("DOMContentLoaded", f, false); 
} else { f(); } 
})(document, window, "yandex_metrika_callbacks"); 
</script> 
<noscript><div><img src="https://mc.yandex.ru/watch/39721995" style="position:absolute; left:-9999px;" alt="" /></div></noscript> 


<script> 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ 
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), 
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) 
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); 

ga('create', 'UA-84497749-1', 'auto'); 
ga('send', 'pageview'); 

</script>

   
    <?php wp_footer(); ?>
	
	
	<script>(function(w, d, s, h, id) { w.roistatProjectId = id; w.roistatHost = h; var p = d.location.protocol == "https:" ? "https://" : "http://"; var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init"; var js = d.createElement(s); js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);})(window, document, 'script', 'cloud.roistat.com', 'caefb39946e22487bcad963d0e46393d');</script>
	
	
	<!-- Код тега ремаркетинга Google -->

<script type="text/javascript">

/* <![CDATA[ */

var google_conversion_id = 860446919;

var google_custom_params = window.google_tag_params;

var google_remarketing_only = true;

/* ]]> */

</script>

<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>

<noscript>

<div style="display:inline;">

<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/860446919/?guid=ON&amp;script=0"/>

</div>

</noscript>

<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.nice-select.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/edit-script.js"></script>


    <!-- BEGIN JIVOSITE CODE {literal} -->
    <script type='text/javascript'>
        (function(){ var widget_id = 'ThHEFcE3Q9';var d=document;var w=window;function l(){
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
    <!-- {/literal} END JIVOSITE CODE -->
    <!-- BEGIN JIVOSITE INTEGRATION WITH ROISTAT -->
    <script>
        (function(w, d, s, h) {
            var p = d.location.protocol == "https:" ? "https://" : "http://";
            var u = "/static/marketplace/JivoSite/script.js";
            var js = d.createElement(s); js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
        })(window, document, 'script', 'cloud.roistat.com');
    </script>
    <!-- END JIVOSITE INTEGRATION WITH ROISTAT -->



    </body>
</html>