<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 30.06.2017
 * Time: 15:36
 */
require_once("../../../wp-load.php");


//get_header();
function toprice($id, $mkey)
{
    global $wpdb;
    $zn = $wpdb->get_results("SELECT meta_value FROM pr_postmeta WHERE post_id = $id AND meta_key = '$mkey'");
    echo $zn['0']->meta_value;
}



?>

<html>
<body>



<form id="param">
    <div class="input">
        <label for="rooms">Площадь квартиры</label>
        <input type="text" class="number" name="area" id="area" placeholder="25" value="30.5">
    </div>
    <div class="input">
        <label for="rooms">Высота потолка</label>
        <input type="text" class="number" name="height" id="height" placeholder="2.5"  value="3">
    </div>
    <div class="input">
        <label for="rooms">Площадь санузлов</label>
        <input type="text" class="number" name="s_area" id="s_area" placeholder="3" value="3">
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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="/wp-content/themes/produmano/editor/fun_calc.js"></script>





<ul id="menu-l" class="active">
    <li class="menu-post visable"><?php toprice('560','гостинная'); ?></li>
    <li class="menu-post visable"><?php toprice('560','кухня'); ?></li>
    <li class="menu-post visable"><?php toprice('560','прихожая'); ?></li>
    <li class="menu-post visable"><?php toprice('560','санузел_общ'); ?></li>
</ul>
<script>
    inf_cat ='645';
    c_rad = 0;
    fun_calc();

</script>




</body>
</html>