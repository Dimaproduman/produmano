<?php 
error_reporting(E_ALL);
require_once("../../../wp-load.php"); 
require_once("Services_JSON.php"); 

$oJson = new Services_JSON();

session_start();

//$key_1_values = get_field_object('неокрашенные_опция_2', 559); 
//print_r($key_1_values);


//функции вывода слоев
//простой вывод фото
function variant_1($id_p, $field, $label_p, $res){
	$valuef = get_field( $field, $id_p );
	//addslashes($str)
	if($valuef){
			$label = get_field_object($field, $id_p );
			$ii = 1;
			foreach( $valuef  as $values  ){
				$ndes = htmlspecialchars($values['description']);
				$ntit = htmlspecialchars($values['title']);
				
				$mass_img = '<li><a  data-s="'.$ii.'" data-num="'.$label['ID'].'_'.$ii++.'" data-id_post="'.$id_p.'" data-class="'.$label['wrapper']['class'].'" data-id_categ="'.$label['ID'].'" data-caption="'.$values['caption'].'" data-alt="'.$values['alt'].'" data-title="'.$ndes.'" data-pic="'.$ntit.'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
				
				$opf.= $mass_img;		
			}
			//отправляем результат
			return $aRes[$res] = '<div class="title-e name_o'.$label['ID'].'"><span>'.$label_p.'</span><p id="cal"></p><p  class="de">'.$valuef['0']['description'].'</p><ul class="op">'.$opf.'</ul></div>';
	}
}
//простой вывод фото,+ с вводом площади
function variant_1s($id_p, $field, $label_p, $res){
	$valuef = get_field( $field, $id_p );
	if($valuef){
			$label = get_field_object($field, $id_p );
			$ii = 1;
			foreach( $valuef  as $values  ){
				$mass_img = '<li><a  data-s="'.$ii.'" data-num="'.$label['ID'].'_'.$ii++.'" data-id_post="'.$id_p.'" data-class="'.$label['wrapper']['class'].'" data-id_categ="'.$label['ID'].'" data-caption="'.$values['caption'].'" data-alt="'.$values['alt'].'"  data-title="'.$values['description'].'"  data-pic="'.$values['title'].'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
				
				$opf.= $mass_img;		
			}
			//отправляем результат
			return $aRes[$res] = '<div class="title-e name_o'.$label['ID'].'"><span>'.$label_p.'</span><p id="cal"></p><p class="ar"><span>Укажите площадь</span> <input type="text" class="area_d" value="1" name="'.$res.'"></p><p class="de">'.$valuef['0']['description'].'</p><ul class="op">'.$opf.'</ul></div>';
	}
}
//простой вывод фото,+ с вводом площади
function variant_1p($id_p, $field, $label_p, $res){
	$valuef = get_field( $field, $id_p );
	if($valuef){
			$label = get_field_object($field, $id_p );
			$ii = 1;
			foreach( $valuef  as $values  ){
				$mass_img = '<li><a  data-s="'.$ii.'" data-num="'.$label['ID'].'_'.$ii++.'" data-id_post="'.$id_p.'" data-class="'.$label['wrapper']['class'].'" data-id_categ="'.$label['ID'].'" data-caption="'.$values['caption'].'" data-alt="'.$values['alt'].'"  data-title="'.$values['description'].'"  data-pic="'.$values['title'].'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
				
				$opf.= $mass_img;		
			}
			//отправляем результат
			return $aRes[$res] = '<div class="title-e name_o'.$label['ID'].'"><span>'.$label_p.'</span><p id="cal"></p><p class="ar"><span>Периметр комнаты</span> <input type="text" class="area_d" value="1" name="'.$res.'"></p><p class="de">'.$valuef['0']['description'].'</p><ul class="op">'.$opf.'</ul></div>';
	}
}

//простой вывод фото,+ с вводом площади
function variant_1n_akc($id_p, $field, $label_p, $res){
	$valuef = get_field( $field, $id_p );
	if($valuef){
			$label = get_field_object($field, $id_p );
			$ii = 1;
			foreach( $valuef  as $values  ){
				$mass_img = '<li><a   data-s="'.$ii.'" data-num="'.$label['ID'].'_'.$ii++.'"  data-id_post="'.$id_p.'" data-class="'.$label['wrapper']['class'].'" data-id_categ="'.$label['ID'].'" data-caption="'.$values['caption'].'" data-title="'.$values['description'].'" data-alt="'.$values['alt'].'"  data-pic="'.$values['title'].'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
				
				$opf.= $mass_img;		
			}
			//отправляем результат
			return $aRes[$res] = '<div class="title-e name_o'.$label['ID'].'"><span>'.$label_p.'</span><p id="cal"></p><p class="ar"><span>Укажите длину стены</span> <input type="text" class="area_d" value="1" name="akc_a"></p><p class="de">'.$valuef['0']['description'].'</p><ul class="op">'.$opf.'</ul></div>';
			
	}
}



//простой вывод фото + название картинки
function variant_1n($id_p, $field, $label_p, $res){
	$valuef = get_field( $field, $id_p );
	if($valuef){
			$label = get_field_object($field, $id_p);
			$ii = 1;
			foreach( $valuef  as $values  ){
				$mass_img = '<li><a   data-s="'.$ii.'" data-num="'.$label['ID'].'_'.$ii++.'"  data-id_post="'.$id_p.'" data-class="'.$label['wrapper']['class'].'" data-id_categ="'.$label['ID'].'" data-caption="'.$values['caption'].'" data-title="'.$values['description'].'" data-alt="'.$values['alt'].'"  data-pic="'.$values['title'].'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
				
				$opf.= $mass_img;		
			}
			//отправляем результат
			
			return $aRes[$res] = '<div class="title-e name_o'.$label['ID'].'"><span>'.$label_p.'</span><p id="cal"></p><p  class="de">'.$valuef['0']['description'].'</p><ul class="op">'.$opf.'</ul></div>';
	}
}

//вывод с выбором цвета + площадь
function variant_2_akc($id_p, $field_1, $field_mass1, $label_p, $res){
	$valuef = get_field( $field_1, $id_p );		
	if($valuef){
		$label = get_field_object($field_1, $id_p ); 
		$valuemass1 = get_field( $field_mass1, $id_p );
		//первая опция
		if($valuemass1){
			$ii = 1;
			foreach( $valuemass1  as $values  ){
				$mass_img = '<li><a   data-s="'.$ii.'"  data-num="'.$label['ID'].'_'.$ii++.'"  data-id_post="'.$id_p.'" data-class="'.$label['wrapper']['class'].'"  data-id_categ="'.$label['ID'].'"  data-caption="'.$values['caption'].'" data-alt="'.$values['alt'].'"   data-title="'.$values['description'].'" data-pic="'.$values['title'].'"  data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
				$op_mass1 .= $mass_img;		
			}
			$ops_mass1 = '<ul class="op">'.$op_mass1.'</ul>';
		}
		
		$mass_img = '<li data-id_categ="'.$label['ID'].'"><a data-class="'.$label['wrapper']['class'].'"   data-id_categ="'.$label['ID'].'"  data-caption="'.$valuef['caption'].'" data-alt="'.$valuef['alt'].'" data-img="'.$valuef['url'].'" ><img src="'.$valuef['sizes']['thumbnail'].'"/></a>'.$ops_mass1.'</li>';
		$op_mass1glob .= $mass_img;		
		
		//отправляем результат
		return $aRes[$res] = '<div class="title-e name_o'.$label['ID'].'"><span>'.$label_p.'</span><p id="cal"></p><p class="ar"><span>Укажите длину стены</span> <input type="text" class="area_d" value="1" name="akc_a"></p><p  class="de">'.$valuef['description'].'</p><ul class="ba">'.$op_mass1glob.'</ul></div>';
		
	}
}
//вывод с выбором цвета
function variant_2($id_p, $field_1, $field_mass1, $label_p, $res){
	$valuef = get_field( $field_1, $id_p );		
	if($valuef){
		$label = get_field_object($field_1, $id_p ); 
		$valuemass1 = get_field( $field_mass1, $id_p );
		//первая опция
		if($valuemass1){
			$ii = 1;
			foreach( $valuemass1  as $values  ){
				$mass_img = '<li><a   data-s="'.$ii.'"  data-num="'.$label['ID'].'_'.$ii++.'"  data-id_post="'.$id_p.'" data-class="'.$label['wrapper']['class'].'"  data-id_categ="'.$label['ID'].'"  data-caption="'.$values['caption'].'" data-alt="'.$values['alt'].'"  data-title="'.$values['description'].'"  data-pic="'.$values['title'].'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
				$op_mass1 .= $mass_img;		
			}
			$ops_mass1 = '<ul class="op">'.$op_mass1.'</ul>';
		}
		
		$mass_img = '<li data-id_categ="'.$label['ID'].'"><a data-class="'.$label['wrapper']['class'].'"   data-id_categ="'.$label['ID'].'"  data-caption="'.$valuef['caption'].'" data-alt="'.$valuef['alt'].'" data-img="'.$valuef['url'].'" ><img src="'.$valuef['sizes']['thumbnail'].'"/></a>'.$ops_mass1.'</li>';
		$op_mass1glob .= $mass_img;		
		
		//отправляем результат
		return $aRes[$res] = '<div class="title-e name_o'.$label['ID'].'"><span>'.$label_p.'</span><p id="cal"></p><p  class="de">'.$valuef['description'].'</p><ul class="ba">'.$op_mass1glob.'</ul></div>';
		
	}
}

//вывод с выбором цвета три варианта
function variant_3($id_p, $field_1, $field_mass1, $field_2, $field_mass2, $field_3, $field_mass3,$label_p, $res){
	$valuef1 = get_field( $field_1, $id_p );
	$valuef2 = get_field( $field_2, $id_p );	
	$valuef3 = get_field( $field_3, $id_p );	
	
	if($valuef1){
		$label1 = get_field_object($field_1, $id_p ); 
		$label2 = get_field_object($field_2, $id_p ); 
		$label3 = get_field_object($field_3, $id_p ); 
		$valuemass1 = get_field( $field_mass1, $id_p );
		$valuemass2 = get_field( $field_mass2, $id_p );
		$valuemass3 = get_field( $field_mass3, $id_p );
		//первая опция
		if($valuemass1){
			$ii = 1;
			foreach( $valuemass1  as $values  ){
				$mass_img = '<li><a  data-s="'.$ii.'"   data-num="'.$label1['ID'].'_'.$ii++.'"   data-id_post="'.$id_p.'" data-class="'.$label1['wrapper']['class'].'"  data-id_categ="'.$label1['ID'].'"  data-caption="'.$values['caption'].'" data-alt="'.$values['alt'].'"   data-title="'.$values['description'].'" data-pic="'.$values['title'].'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
				$op_mass1 .= $mass_img;		
			}
			$ops_mass1 = '<ul class="op">'.$op_mass1.'</ul>';
		}
		
		$mass_img = '<li data-id_categ="'.$label1['ID'].'"><a data-class="'.$label1['wrapper']['class'].'"  data-id_post="'.$id_p.'"  data-id_categ="'.$label1['ID'].'"  data-caption="'.$valuef1['caption'].'" data-alt="'.$valuef1['alt'].'" data-img="'.$valuef1['url'].'" ><img src="'.$valuef1['sizes']['thumbnail'].'"/></a>'.$ops_mass1.'</li>';
		$op_mass1glob .= $mass_img;		
		
		//если есть вторая опция
		if($valuef2){
			if($valuemass2){
				$ii = 1;
				foreach( $valuemass2  as $values  ){
					$mass_img = '<li><a  data-s="'.$ii.'"  data-num="'.$label2['ID'].'_'.$ii++.'"  data-id_post="'.$id_p.'" data-class="'.$label1['wrapper']['class'].'"  data-id_categ="'.$label2['ID'].'"  data-caption="'.$values['caption'].'" data-alt="'.$values['alt'].'"  data-title="'.$values['description'].'"  data-pic="'.$values['title'].'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
					$op_mass2 .= $mass_img;		
				}
				$ops_mass2 = '<ul class="op">'.$op_mass2.'</ul>';
			}
			
			$mass_img = '<li data-id_categ="'.$label2['ID'].'"><a  data-class="'.$label2['wrapper']['class'].'"  data-id_post="'.$id_p.'" data-id_categ="'.$label2['ID'].'"  data-caption="'.$valuef2['caption'].'" data-alt="'.$valuef2['alt'].'" data-img="'.$valuef2['url'].'" ><img src="'.$valuef2['sizes']['thumbnail'].'"/></a>'.$ops_mass2.'</li>';
			$op_mass2glob .= $mass_img;		
		}
		//если есть третья опция
		if($valuef3){
			if($valuemass3){
				foreach( $valuemass3  as $values  ){
					$mass_img = '<li><a  data-s="'.$ii.'"  data-num="'.$label3['ID'].'_'.$ii++.'"   data-id_post="'.$id_p.'" data-class="'.$label1['wrapper']['class'].'"  data-id_categ="'.$label3['ID'].'"  data-caption="'.$values['caption'].'" data-alt="'.$values['alt'].'"  data-title="'.$values['description'].'"  data-pic="'.$values['title'].'" data-img="'.$values['url'].'" ><img src="'.$values['sizes']['thumbnail'].'"/></a></li>';
					$op_mass3 .= $mass_img;		
				}
				$ops_mass3 = '<ul class="op">'.$op_mass3.'</ul>';
			}
			
			$mass_img = '<li data-id_categ="'.$label3['ID'].'"><a data-class="'.$label3['wrapper']['class'].'"  data-num="'.$ii++.'" data-id_post="'.$id_p.'"  data-id_categ="'.$label3['ID'].'"  data-caption="'.$valuef3['caption'].'" data-alt="'.$valuef3['alt'].'" data-img="'.$valuef3['url'].'" ><img src="'.$valuef3['sizes']['thumbnail'].'"/></a>'.$ops_mass3.'</li>';
			$op_mass3glob .= $mass_img;		
		}
		
		//отправляем результат
		return $aRes[$res] = '<div class="title-e name_o'.$label1['ID'].' name_o'.$label2['ID'].'  name_o'.$label3['ID'].'"><span>'.$label_p.'</span><p id="cal"></p><p  class="de">'.$valuef1['description'].'</p><ul class="ba">'.$op_mass1glob.$op_mass2glob.$op_mass3glob.'</ul></div>';
	}
}
	

	
	
//Получаем список материалов
if($_POST['categ']==true){
	// параметры по умолчанию
	$args = array(
		'order'   => 'ASC',
		'tax_query' => array(
				'relation' => 'AND',
				array(
					'taxonomy' => 'categor',
					'terms' => $_POST['categ'],
					),
		)
	);
				
			  $posts  =   query_posts($args);
	foreach( $posts as $pst ){
		echo '
		<li class="menu-post">
			<a id-post="'. $pst->ID .'" >'. $pst->post_title .'</a>
		</li>';
	}
} 



//Получаем значение с материала
if($_POST['post']==true){
	
	//картинку поста
	$id_p = $_POST['post'];
	$thumb = get_the_post_thumbnail_url( $id_p, 'full' );
	$img = '<img src="'.$thumb.'" >';	

	//пол
	$aRes['pol_op1'] = variant_1($id_p, 'ламинат_однополосный', 'Ламинат однополосный', 'pol_op1');
	$aRes['pol_op2'] = variant_1($id_p, 'паркетная_доска', 'Инженерная доска', 'pol_op2');
	$aRes['pol_op3'] = variant_1s($id_p, 'плитка_керамическая', 'Керамогранит', 'pol_op3');
	
	//плитка
	$aRes['pli_op1'] = variant_1($id_p, 'плитка_базовая', 'Базовая', 'pli_op1');
	$aRes['pli_op2'] = variant_1($id_p, 'плитка_дизайнерская', 'Дизайнерская', 'pli_op2');
	
	//стены
	$aRes['stena_po_op1'] = variant_2($id_p, 'покраска_стен_опция_1', 'покраска_стен', 'Покраска стен', 'stena_po_op1');
	$aRes['ne_sten_op1'] = variant_1($id_p, 'неокрашенные_опция_2_копиров', 'Обои под покраску неокрашенные', 'ne_sten_op1');
	$aRes['im_sten_op1'] = variant_3($id_p, 
	'неокрашенные_опция_1', 'обои_под_покраску_неокрашенные_опция_1', 
	'неокрашенные_опция_2', 'обои_под_покраску_неокрашенные_опция_2', 
	'неокрашенные_опция_3', 'обои_под_покраску_неокрашенные_опция_3', 
	'Обои под покраску окрашенные', 'im_sten_op1');
	$aRes['ant_im_sten_op1'] = variant_3($id_p, 
	'обои_антивандальные_окрашенные_1', 'обои_антивандальные_окрашенные_опция_1', 
	'обои_антивандальные_окрашенные_2', 'обои_антивандальные_окрашенные_опция_2', 
	'обои_антивандальные_окрашенные_3', 'обои_антивандальные_окрашенные_опция_3', 
	'Обои антивандальные окрашенные', 'ant_im_sten_op1');
	$aRes['v_sten_op1'] = variant_1($id_p, 'обои_виниловые', 'Обои виниловые', 'v_sten_op1');
	 
	//двери
	$aRes['dver_op1'] = variant_1($id_p, 'эко-шпон', 'Дверь экошпон', 'dver_op1');
	$aRes['dver_op2'] = variant_1($id_p, 'крашеные_хайтек', 'Дверь эмаль белая', 'dver_op2');
	$aRes['dver_op3'] = variant_1($id_p, 'мдф_эмалированная', 'Дверь эмаль с фрезеровкой', 'dver_op3');
	$aRes['dver_op4'] = variant_1($id_p, 'входная_двер', 'Входная дверь', 'dver_op4');		
	 
	//плинтус
	$aRes['plin_op1'] = variant_1($id_p, 'цвет_пола', 'Цвет пола', 'pol_op1');
	$aRes['plin_op2'] = variant_1($id_p, 'цвет_двери', 'Цвет двери', 'plin_op2');
	$aRes['plin_op3'] = variant_1($id_p, 'цвет_стены', 'Цвет стены', 'plin_op3');
	$aRes['plin_op4'] = variant_1($id_p, 'белый_классический', 'Белый классический', 'plin_op4');
	
	//потолок
	$aRes['potol_op1'] = variant_1($id_p, 'окрашенный', 'Окрашенный', 'potol_op1');
	$aRes['potol_op2'] = variant_1($id_p, 'натяжной', 'Натяжной', 'potol_op2');
	$aRes['potol_op3'] = variant_1($id_p, 'натяжной_со_скрытым_карнизом', 'Натяжной со скрытым карнизом', 'potol_op3');
	$aRes['potol_op4'] = variant_1p($id_p, 'потолочный_карниз', 'Потолочный карниз', 'potol_op4');
	$aRes['potol_op5'] = variant_1($id_p, 'натяжной_с_врезными_светильниками', 'Светильники', 'potol_op5');
	$aRes['potol_op6'] = variant_1($id_p, 'натяжной_с_накладным_светильником', 'Потолок с накладным светильником', 'potol_op6'); 
	
	//акценты
	$aRes['akc_op6'] = variant_1n_akc($id_p, 'стена_с_ламинат', 'Ламинат', 'akc_op6');
	$aRes['akc_op1'] = variant_1n_akc($id_p, 'стена_с_паркетной_доской', 'Инженерная доска', 'akc_op1');
	$aRes['akc_op2'] = variant_1n_akc($id_p, 'стена_с_декоративным_кирпичом', 'Декоративный кирпич', 'akc_op2');
	$aRes['akc_op3'] = variant_1n_akc($id_p, 'стена_с_декоративной_штукатуркой', 'Стена с декоративной краской', 'akc_op3');
	$aRes['akc_op7'] = variant_2_akc($id_p, 'акценты_покраска', 'стена_с_покраска', 'Покраска', 'akc_op7');
	$aRes['akc_op4'] = variant_1n_akc($id_p, 'стена_с_обоями', 'Стена с обоями', 'akc_op4');
	$aRes['akc_op5'] = variant_2_akc($id_p, 'молдинг_гл_фото', 'стена_с_молдингами', 'Стена с молдингами', 'akc_op5');
	 
	//сантехника
	$aRes['san_op1'] = variant_1($id_p, 'раковина', 'Раковина', 'san_op1');
	$aRes['san_op2'] = variant_1($id_p, 'ванная', 'Ванна', 'san_op2');
	$aRes['san_op3'] = variant_1n($id_p, 'унитаз', 'Унитаз', 'san_op3');
	$aRes['san_op4'] = variant_1($id_p, 'гигиенический_душ', 'Гигиенический душ', 'san_op4');
	 
	//инженерия
	$aRes['ingen_op1'] = variant_1($id_p, 'розетки_и_выключатели', 'Розетки и выключатели', 'ingen_op1');
	$aRes['ingen_op3'] = variant_2($id_p, 'розетки_и_выключатели_цветные_гл_фото', 'розетки_и_выключатели_цветные', 'Розетки и выключатели окрашенные', 'ingen_op3');
	$aRes['ingen_op2'] = variant_1n($id_p, 'радиаторы_отопления', 'Радиаторы отопления', 'ingen_op2');
	$aRes['ingen_op4'] = variant_1($id_p, 'полотенцесушитель', 'Полотенцесушитель', 'ingen_op4');
	$aRes['ingen_op5'] = variant_1($id_p, 'вентилятор', 'Вентилятор', 'ingen_op5');
	
	//мебель
	$aRes['meb'] = variant_1($id_p, 'мебель', '', 'meb');		
		
		$aRes['img'] = $img.'<img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs"><img class="abs">';
		
		echo $oJson->encode($aRes);
	 
} 
 
?>
