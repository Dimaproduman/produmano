<?php

if($_POST['im']){

	$im = $_POST['im'];
	
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$html = $_POST['html'];
	$ar = $_POST['ar'];
	$ars = $_POST['ars'];
	$h = $_POST['h'];
	$ss = $_POST['ss'];
	
	$so1 = $_POST['so1'];
	$so2 = $_POST['so2'];
	$so3 = $_POST['so3'];
	$so4 = $_POST['so4'];
	$so5 = $_POST['so5'];
	$so6 = $_POST['so6'];
	$so7 = $_POST['so7'];
	$so8 = $_POST['so8'];
	$so9 = $_POST['so9'];
	$so10 = $_POST['so10'];
	
	$so12 = $_POST['so12'];
	$so13 = $_POST['so13'];
	$so14 = $_POST['so14'];
	$so15 = $_POST['so15'];
	$so16 = $_POST['so16'];
	$so17 = $_POST['so17'];
	$so18 = $_POST['so18'];
	$so19 = $_POST['so19'];
	$so20 = $_POST['so20'];
	$so21 = $_POST['so21'];
	$so22 = $_POST['so22'];
	
	$op1 = $_POST['op1'];
	$op2 = $_POST['op2'];
	$op3 = $_POST['op3'];
	$op4 = $_POST['op4'];
	$op5 = $_POST['op5'];
	$op6 = $_POST['op6'];
	$op7 = $_POST['op7'];
	$op8 = $_POST['op8'];
	$op9 = $_POST['op9'];
	$op10 = $_POST['op10'];
	
	
	
	$to0 = $_POST['to0'];
	
	//$im = $oJson->decode($im);
	//$im = json_encode($im);
	//echo $im;
	//print_r($im);
	
	//$iq = $_POST['im'];
	//$iq = str_replace('data:image/jpeg;base64,', '',$im[0]);
	
	//foreach( $im as $img ){
	//	$rand = md5(rand(5, 1015).mktime());
	//	print_r($rand);
		
	//	$img = str_replace('data:image/jpeg;base64,', '', $img);
	//	$img = str_replace(' ', '+', $img);
	//	$img = base64_decode($img);
	//	$fpng = fopen("tmp/".$rand."img.jpg", "w");
	//	fwrite($fpng,$img);
		//fclose($fpng);
		//$result = file_put_contents(rand(5, 115).'img.png', base64_decode($img));
	//	$rez[].="tmp/".$rand."img.jpg";
	//}
	//print_r($rez);
	
// Кому
$to  = 'info@produmano.com';
//$to  = 'sashazmz@gmail.com';

// картинки
//$attach = $rez;
// чтобы отображалась картинка и ее не было в аттаче
// путь к картинке задается через CID: - Content-ID
// тестовый текст
$text = '
    <div style="width: 700px; margin: 0 auto;">
	
	<p>Добрый день!<br>
Благодарим за выбор сервиса Продумано! </p>
<br>

	<p style="text-decoration: underline;">Данные по вашей квартире: </p>
	<p>Площадь: '.$ar.' м<sup><small>2</small></sup></p>
		<p>Площадь санузла: '.$ars.' м<sup><small>2</small></sup></p>
		<p>Высота потолка: '.$h.' м</p>
		<p>Санузел: '.$ss.'</p>
		
		<p>Стоимость ремонта: <b>'.$html.'</b></p>
		
		<br>
		
		<p>Ниже детальное описание чистовых материалов и оборудования по комнатам и краткая смета.</p>
		<br>
	
	'.$to0.'
	<br>
	
	
	<h2>Дополнительные опции</h2>
	
	<p>Не нужна стяжка и наливной пол: '.$so1.'</p>
	<p>Не нужно оштукатуривание стен по маякам: '.$so2.'</p>
	<p>Не нужна электрика базовая: '.$so3.'</p>
	<p>Эскиз планировки квартиры с расстановкой мебели: '.$so4.'</p>
	<p>Эскизный проект объединения санузлов: '.$so5.'</p>
	<p>Демонтаж покрытия стен, пола, потолка: '.$so6.'</p>
	<p>Возведение стен из пазогребневых блоков: '.$so7.'</p>
	<p>Монтаж/замена электропроводки стандартная: '.$so8.'</p>
	<p>Монтаж/замена электропроводки по индивидуальному проекту: '.$so9.'</p>
	<p>Материал труб сшитый полиэтилен (Rehau) вместо полипропилена: '.$so10.'</p>
	<p>Замена смесителей Lemark (Чехия) на смесители Grohe (Германия): '.$so22.'</p>
	<p>Установка кондиционера (инверторный, белого цвета): '.$so12.'</p>
	<p>Система защиты от протечек «Аквасторож»: : '.$so13.'</p> 
	<p>Теплый пол санузел: '.$so14.'</p>
	<p>Теплый пол (кухня): '.$so15.'</p>
	<p>Теплый пол в комнаты: '.$so16.'</p>
	<p>Индивидуальный подбор мебели в стиль интерьера (спецификация): '.$so17.'</p>
	<p>Установка штор: '.$so18.'</p>
	<p>Замена окон: '.$so19.'</p>
	<p>Отделка балкона: '.$so20.'</p>
	<p>Установка кухни: '.$so21.'</p>
	
	<br>
	<h2>Краткая смета</h2>
	
	
		<p>Работы по полу: '.$op1.'</p>
		<p>Работы по потолку: '.$op2.'</p>
		<p>Работы по стенам: '.$op3.'</p>
		<p>Электромонтажные работы: '.$op4.'</p>
		<p>Сантехнические работы: '.$op5.'</p>
		<p>Прочие работы (укрытие пленкой, подъем, уборка и пр): '.$op6.'</p>
		<p>Черновые материалы с сантехникой и электрикой: '.$op7.'</p>
		<p>Чистовые материалы комнат: '.$op8.'</p>
		<p>Чистовые материалы санузла: '.$op9.'</p>
		<p>Дополнительные материалы и работы: '.$op10.'</p>
		<br>
        
        <p>
           Телефон: '.$phone.'
        </p>
		<p>
		Почта: '.$email.'
		</p>
		
		<br>
		<p>Хорошего дня!</p>
    </div>
';
 
$from = "produmano.com@produmano.com";
$subject = "Заявка на дизайн";
 
// Заголовки письма === >>>
$headers = "From: $from\r\n";
//$headers .= "To: $to\r\n";
$headers .= "Subject: $subject\r\n";
$headers .= "Date: " . date("r") . "\r\n";
$headers .= "X-Mailer: zm php script\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative;\r\n";
$baseboundary = "------------" . strtoupper(md5(uniqid(rand(), true)));
$headers .= "  boundary=\"$baseboundary\"\r\n";
// <<< ====================
 
// Тело письма === >>>
$message  =  "--$baseboundary\r\n";
$message .= "Content-Type: text/plain;\r\n";
$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$message .= "--$baseboundary\r\n";
$newboundary = "------------" . strtoupper(md5(uniqid(rand(), true)));
$message .= "Content-Type: multipart/related;\r\n";
$message .= "  boundary=\"$newboundary\"\r\n\r\n\r\n";
$message .= "--$newboundary\r\n";
$message .= "Content-Type: text/html; charset=utf-8\r\n";
$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$message .= $text . "\r\n\r\n";
// <<< ==============
 
// прикрепляем файлы ===>>>
foreach($im as $img){
    $mimeType='image/jpeg';
	$img = str_replace('data:image/jpeg;base64,', '', $img);
    //$fileContent = file_get_contents($filename,true);
	$rand = md5(rand(5, 1015).mktime()).'.jpg';
    $filename=basename($rand);
    $message.="--$newboundary\r\n";
    $message.="Content-Type: $mimeType;\r\n";
    $message.=" name=\"$filename\"\r\n";
    $message.="Content-Transfer-Encoding: base64\r\n";
    $message.="Content-ID: <$filename>\r\n";
    $message.="Content-Disposition: inline;\r\n";
    $message.=" filename=\"$filename\"\r\n\r\n";
    $message.=chunk_split($img);
	//echo '<br><br>';
	//print_r($iq);
	//echo '<br><br>';
	//print_r(base64_encode($fileContent));
}
// <<< ====================
 
// заканчиваем тело письма, дописываем разделители
$message.="--$newboundary--\r\n\r\n";
$message.="--$baseboundary--\r\n";
 
// отправка письма
$result = mail($to, $subject, $message , $headers);

$to2 = 'sashazmz@gmail.com';
// отправка письма
$result = mail($to2, $subject, $message , $headers);
//var_dump($result);






// Данные должны быть в кодировке UTF-8! Иначе — это может привести к ошибке.
  
// ...
// где-то здесь вызывается текущая функция создания лида, например, функция mail()
// ...

$name	= ''; 
//$email	= $_POST['email'];
//$phone	= $_POST['phone'];
$comment= 'Площадь: '.$ar.'м2; Площадь санузла: '.$ars.'м2; Высота потолка: '.$h.'м; Санузел: '.$ss.'; Стоимость ремонта: '.$html;

$roistatData  = array(
	'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
	'key'     => 'MjcwNjc6NDYwNjU6NzllZGM2ZDE2ZDg4YjgxZjcyZThhZjM0ODg2YmMxOTQ=', 
	'title'   => 'Новая заявка',
	'name'    => $name,
	'email'   => $email,
	'phone'   => $phone,
	'comment' => $comment,
	);

file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));


// Эти переменные уже есть
//$name	= $_POST['name'];
//$email	= $_POST['email'];
//$phone	= $_POST['phone'];
//$comment= $_POST['comment'];

// API ID и кому отправляем
$sms_api_id = "F4CC1E90-2324-6A86-E565-A16C38A0E6ED";
$sms_to     = "79261099111";

// Отправка SMS
$sms_msg = "Заявка с produmano.com: " . $name . " " . $phone . " " . $email . " " . $comment;
file_get_contents("http://sms.ru/sms/send?api_id=" . $sms_api_id . "&to=" . $sms_to . "&text=" . urlencode($sms_msg));



}