jQuery(function($){$.mask.definitions['~']='[+-]';$('input[name=phone]').mask('+7(999) 999-99-99');});$('.showLeftPush').click(function(){$(this).toggleClass('active');$('body').toggleClass('cbp-spmenu-push-toright');$('#cbp-spmenu-s1').toggleClass('cbp-spmenu-open');$('.bg-site').toggleClass('active');});$('.bg-site').click(function(){$('.showLeftPush').toggleClass('active');$('body').toggleClass('cbp-spmenu-push-toright');$('#cbp-spmenu-s1').toggleClass('cbp-spmenu-open');$('.bg-site').toggleClass('active');});jQuery(document).ready(function(){jQuery(".niceCheck input").change(function(){changeCheck(jQuery(this));});jQuery(".niceCheck").each(function(){changeCheckStart(jQuery(this));});});function changeCheck(el){var label=el.parent(),input=el;if(!input.attr("checked")){label.css("background-position","0 -199px");input.attr("checked",true)}else{label.css("background-position","0 0");input.attr("checked",false)}return true;}function changeCheckStart(el){var el=el,input=el.find("input").eq(0);if(input.attr("checked")){el.css("background-position","0 -199px");}return true;}jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}expires='; expires='+date.toUTCString();}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}return cookieValue;}};jQuery(document).ready(function(){jQuery(window).scroll(function(){});jQuery('.unit_price_15').html('Указать кол-во окон');});