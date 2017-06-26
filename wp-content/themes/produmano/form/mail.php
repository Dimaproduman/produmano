<?php

$title = strip_tags($_POST[title])."\n";

if($_POST['name']){
    $name = 'Имя: '.strip_tags($_POST[name])."\n";
}
if($_POST['phone']){
    $phone = 'Телефон: '.strip_tags($_POST[phone])."\n";
}
if($_POST['email']){
    $email = 'Почта: '.strip_tags($_POST[email])."\n";
}
else{
	$email ='';
}




$ip = getRealIpAddr();
$message = "$title$name$phone$email\nСо страницы: ".$_SERVER['HTTP_REFERER']."\nIP: $ip\nБраузер: ".$_SERVER['HTTP_USER_AGENT']."\n";

if($_POST['d1']){
	$d1 = $_POST['d1'];
	$d2 = $_POST['d2'];
	$d3 = $_POST['d3'];
	$d4 = $_POST['d4'];
	
	$message = "$title$name$phone$email\nПлощаль квартиры:$d1\nВысота потолка:$d2\nПлощадь санузлов:$d3\nСанузел:$d4\n Со страницы: ".$_SERVER['HTTP_REFERER']."\nIP: $ip\nБраузер: ".$_SERVER['HTTP_USER_AGENT']."\n";
}


define('SHORTINIT', true);
require_once( $_SERVER['DOCUMENT_ROOT'] . '/wp-load.php' );
global $wpdb;
$admin_email = $wpdb->get_var("SELECT meta_value FROM pr_postmeta WHERE meta_key = 'email' and post_id = 6");

// отправляем email средствами php
$mail =
mail($admin_email, "$title", $message,
 "From: Produmano\r\n"
."Reply-To: Produmano\r\n"
."X-Mailer: PHP/" . phpversion());



function getRealIpAddr() {
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
			$ip=$_SERVER['HTTP_CLIENT_IP'];
	} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
			$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
	} else {
			$ip=$_SERVER['REMOTE_ADDR'];
	}
	return $ip;
}


 
//$email	= $_POST['email'];
//$phone	= $_POST['phone'];
$comment= $title;

$roistatData  = array(
	'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
	'key'     => 'MjcwNjc6NDYwNjU6NzllZGM2ZDE2ZDg4YjgxZjcyZThhZjM0ODg2YmMxOTQ=', 
	'title'   => $title,
	'name'    => $name,
	'email'   => $email,
	'phone'   => $phone,
	'comment' => '', 
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
$sms_msg = "Всплывающая форма с produmano.com: " . $name . " " . $phone . " " . $email;
file_get_contents("http://sms.ru/sms/send?api_id=" . $sms_api_id . "&to=" . $sms_to . "&text=" . urlencode($sms_msg));


 
 ?>