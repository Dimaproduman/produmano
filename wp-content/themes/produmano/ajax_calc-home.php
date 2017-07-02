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
    $txt = str_replace(array("\r","\n"),"",$zn['0']->meta_value);
    echo $txt;

}







?>

<html>
<body>





<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="/wp-content/themes/produmano/editor/fun_calc.js"></script>




<script>

    <?php
$g[] = array("гостинная", "кухня", "прихожая", "санузел_общ");
$g[] =  array("гостинная_копировать", "кухня_копировать", "прихожая_копировать", "санузел_общ_копировать");
//$g[]= array("прихожая", "прихожая_копировать", "прихожая_копировать2", "прихожая_копировать3", "прихожая_копировать4", "прихожая_копировать5");
//$g[]=array("санузел_общ", "санузел_общ_копировать", "санузел_общ_копировать2", "санузел_общ_копировать3", "санузел_общ_копировать4", "санузел_общ_копировать5");
//print_r($g);

foreach ($g as $value) {

    $dd1 = $value[0];
    $dd2 = $value[0];
    $dd3 = $value[0];
    $dd4 = $value[0];
    ?>

    inf_cat ='645';
    c_rad = 0;
   g_area = 30.5;
   g_height = 3;
   g_s_area = 3;
    g_bathrooms_type = 'v1';
    gos = '<?php toprice('560',$dd1); ?>';
    kuh = '<?php toprice('560',$dd2); ?>';
    pri = '<?php toprice('560',$dd3); ?>';
    san = '<?php toprice('560',$dd4); ?>';

    //alls =gos + kuh + pri + san;
    allsm ={};
    allsm[0] = gos;
    allsm[1] = kuh;
    allsm[2] = pri;
    allsm[3] = san;

    //console.log(allsm);
    fun_calc();

    <?php

    }
    ?>

</script>




</body>
</html>