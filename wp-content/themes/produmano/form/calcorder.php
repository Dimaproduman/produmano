<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$static_files_host = 'http://produmano.com';
$message = "";
$currency = ' руб.';
$bathrooms_type = "";
if(strcasecmp($_POST['bathrooms_type'], 'common') == 0) {
    $bathrooms_type = 'Общий';
} elseif(strcasecmp($_POST['bathrooms_type'], 'separate') == 0) {
    $bathrooms_type = 'Раздельный';
}
$nl = '<br>';

$message .= "<html><body>Адрес: ".strip_tags($_POST['address']) . $nl .
            "Телефон: ".strip_tags($_POST['phone']) . $nl .
            "Комнаты: ".intval($_POST['rooms']) . $nl .
            "Площадь КВ.М: ".floatval($_POST['area']) . $nl .
            "Площадь санузлов: ".floatval($_POST['area_bathrooms']) . $nl .
            "Санузел: ". $bathrooms_type . $nl .
            "Базовая цена: " . floatval($_POST['basic_price']) . $currency . $nl .
            "Цена за опции: " . floatval($_POST['option_price']) . $currency . $nl . 
            "Итоговая цена: " . floatval($_POST['total_price']) . $currency . $nl;

$rooms = json_decode($_POST['rooms_list'], true);
$message .= '<br><h2>Комнаты</h2><br>';
foreach ($rooms as $key => $value) {
    $row = '<b>'.$value['title'] . '</b>' . $nl . "Потолочный карниз: " . ($value['cornices'] ? 'да' : 'нет') . $nl . 
           'Цвет: ' . $value['color']['title'] . $nl . 'Код цвета: ' . $value['color']['color'] . '<div style="border: 1px solid black; width: 30px; height: 30px; background-color: ' . $value['color']['color'] . ';">&nbsp;</div>' . $nl . '<a href="' . $static_files_host.$value['image'] . '"><img src="' . $static_files_host.$value['thumb'] . '" alt="' . $value['title'] . '" /></a>' . $nl;
    $message .= $row . '<hr>';
}

$options = json_decode($_POST['options'], true);
$message .= '<br><h2>Опции</h2><br>';
foreach ($options as $key => $value) {
    $row = '<b>'.strip_tags($value['group']).'</b>: ' . strip_tags($value['title']) . $nl;
    
    if(isset($value['quantity'])) {
        if($value['unit-price'] && intval($value['quantity']) > 0) {
            $row .= 'Цена за ед.:' . floatval($value['unit-price']) . $currency . $nl;
            $row .= 'Количество: ' . floatval($value['quantity']) . $nl;
        } else {
            continue;
        }
    }
    $price_out = floatval($value['price']) . $currency;
    if(floatval($value['price']) == 0) {
        $price_out = 'Бесплатно (включено)';
    }
    $row .= '<b>Итоговая цена</b>: ' . $price_out . $nl;
    $message .= $row . '<hr>';
}
$message .'</body></html>';

$to = 'Volkov.million@gmail.com';#'vladmaxi2011@gmail.com';# 'vladmaxi2011@gmail.com';
$to2 = 'info@semyadesign.ru';
//$to = 'sashazmz@gmail.com';#'vladmaxi2011@gmail.com';# 'vladmaxi2011@gmail.com';

$subject = 'Заказ с калькулятора';

$headers = "From: admin@produmano.mcdir.ru\r\n";
$headers .= "Reply-To: admin@produmano.mcdir.ru\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

echo mail($to, $subject, $message, $headers);
echo mail($to2, $subject, $message, $headers);
 
 ?>