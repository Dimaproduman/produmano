<?php 
/*
Template Name: Оформление заказа
*/
?>

<?php get_header(); ?>
    <script type="text/template" id="area-bathrooms-template">
        <div class="input">
            <label for="area_bathrooms">Санузел</label>
            <select name="bathrooms_type" id="bathrooms_type">
                <option value="common"<% if(bathrooms_type.toLowerCase() == "common") { %>
                    selected="selected"
                <% } %>
                >Общий</option>
                <option value="separate"<% if(bathrooms_type.toLowerCase() == 'separate') { %>
                selected="selected"
                <% } %>>Раздельный</option>
            </select>
		
        </div>    
    </script>
    
    <script type="text/template" id="opt-template">
        <% if(price_type == 'unit') { %>
        <label class="checkbox">
            <span class="niceCheck"><input type="checkbox" data-group="<%= group %>" data-title="<%= title %>" name="op<%= id %>" id="op<%= id %>" data-id="<%= id %>" class="num_option"> <em><%= title %><em id="nn2" class="unit_price_<%= id %>"><%= display_price %></em><i class="fa fa-question-circle-o" aria-hidden="true" title="<%= 1 %>"></i></em></span>    
        </label>
        <div class="input">
            <input type="text" name="op<%= id %>_num" id="op<%= id %>_num" class="number" data-id="<%= id %>" data-unit-price="<%= price %>" placeholder="" value="1">
        </div>
        <% } else { %>
        <label class="checkbox">
            <span class="niceCheck"><input type="checkbox" data-group="<%= group %>" data-title="<%= title %>" class="fix_option" data-id="<%= id %>" data-old-price="<%= origin_price %>" name="op<%= id %>" id="op<%= id %>" data-price="<%= price %>"> <em><%= title %> <em id="nn2"><%= display_price %></em></em></span>
        </label>
        <% } %>
    </script>
    
    <script type="text/template" id="group-template">
        <div>
            <div class="list-op">
                <h4><%= title %></h4>
            </div>
        </div>
    </script>
    
    <script type="text/template" id="area-field">
        <label for="<%= id %>"><%= title %></label>
        <input type="text" class="number" name="<%= id %>" id="<%= id %>" placeholder="<%= placeholder %>" value="<%= value %>">
    </script>
    
    <script type="text/template" id="price-block">
        <label><%= label %></label>
        <div class="price"><%= prepare_price(price) %> р.</div>
    </script>
    
    <script type="text/template" id="slide-item">
        <img class="image" src="<%= image %>">
        <a class="back-design" href="/design">Скорректировать дизайн</a>
        <div class="title"><%= title %></div>
        <a href="#" class="btn-zoom"></a>
    </script>

    <div class="content-main">
        <div class="content-page container design-page order-page">
            <h1><?php the_title(); ?></h1>
            
            <div class="form-select-design">
                <form>
                    <div class="input input-full">
                        <label for="address">Адрес</label>
                        <input type="text" name="address" id="address" placeholder="">
                    </div>
                    
                    <div class="input input-full">
                        <label for="phone">Телефон</label>
                        <input type="text" name="phone" id="phone" placeholder="">
                    </div>
                    
                    <div id="area_list" class="sticky"></div>
                </form>
            </div>
            
            <h2>Выбранные комнаты</h2>
            
            <div class="slider-select-design-wrap">
                <ul class="slider-select-design slider-select-block"></ul>
            </div>
            
            <div id="option_list"></div>
            
            <div class="btns">
                <a href="#" class="btn-order">оформить заказ</a>
            </div>
        </div>
    </div>
    
	<style>
	    .menu-block .btn-order {font-size: 18px;  padding: 16px;}
	</style>
	
<?php get_footer(); ?> 
 
<script>
<?php for ($x=0; $x<34; $x++) { 
$jj = get_field('op'.$x, 11);
$jj = addslashes($jj);
?>
jQuery("input#op<?php echo $x; ?>").before("<div id='zv' class=o<?php echo $x; ?>><a class='tooltip1' ><div>?</div><span class='classic'><?php echo $jj; ?></span></a></div>");
<?php } ?>
</script>