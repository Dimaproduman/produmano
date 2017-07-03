$(function(){
	
	
	
	
	
	
	
	
	
	
	
	$( ".form" ).submit(function( event ) {
		var name = $( this ).find( "input[name=name]" );
		var phone = $( this ).find( "input[name=phone]" );
		var email = $( this ).find( "input[name=email]" );
		var title = $( this ).find( "input[name=title]" ).val();
        var d1 = $( this ).find( "input[name=d1]" ).val();
        var d2 = $( this ).find( "input[name=d2]" ).val();
        var d3 = $( this ).find( "input[name=d3]" ).val();
        var d4 = $( this ).find( "input[name=d4]" ).val();
        var d5 = $( this ).find( "input[name=d5]" ).val();
        var d6 = $( this ).find( "input[name=d6]" ).val();
        
        if (name.length> 0){
        if (name.val() == "") {
            name.css({border:"1px solid #DE0000"});
            name.focus();
            return false;
        }else{
            name.css({border:"1px solid #799C53"});
        }
        }
        
        if (phone.length> 0){
        if (phone.val() == "" || phone.val() == "+7(___) ___-__-__") {
            phone.css({border:"1px solid #DE0000"});
            phone.focus();
            return false;
        }else{
            phone.css({border:"1px solid #799C53"});
        }
        }

		 
		dataString = {
			'name' : name.val(),
			'phone' : phone.val(),
			'email' : email.val(),
			'title' : title,
            'd1' : d1,
            'd2' : d2,
            'd3' : d3,
            'd4' : d4,
            'd5' : d5,
            'd6' : d6,
		};
		 
		$.ajax({
			type: "POST",
			url: "/wp-content/themes/produmano/form/mail.php",
			data: dataString,
			success: function() {
				
					//console.log(title);
					if(title == 'Новая заявка с формы "Заказать звонок"'){
						//console.log('!1');
						yaCounter39721995.reachGoal('goal_goal_zakazat_obratnyj_zvonok');
					}
					//console.log(title);
					if(title == 'Новая заявка с формы "Заказать звонок" значек слева'){
						console.log('!1');
						yaCounter39721995.reachGoal('goal_zakazat_obratnyj_zvonok_ikonka_telefona');
					}
					if(title == 'Новая заявка на "Бесплатный замер и консультацию"'){
						//console.log('!2');
						yaCounter39721995.reachGoal('goal_zajavka_na_besplatnuju_konsultaciju');
					}
				
				$('.modal').modal('hide');
                $('#thanks').modal('show');
                $("form")[0].reset();
			}
		});
		return false;
		event.preventDefault();
	});

   
	function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}
});