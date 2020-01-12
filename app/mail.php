<?
$sex=$_POST['sex'];
$mySize=$_POST['mySize'];
$size_quanty_sw=$_POST['size-quanty-sw'];
$size_quanty_bh=$_POST['size-quanty-bh'];
$size_quanty_hd=$_POST['size-quanty-hd'];
$size_quanty_kg=$_POST['size-quanty-kg'];
$side=$_POST['side'];
$text_style=$_POST['text_style'];
$text=$_POST['text'];
$number=$_POST['number'];
$standart_number_font=$_POST['standart-number-font'];
$type=$_POST['type'];
$gender=$_POST['gender'];
$sweatshirt_color=$_POST['sweatshirt_color'];
$size=$_POST['size'];
$price=$_POST['price'];
$font=$_POST['font'];
$text=$_POST['text'];
$standart_number=$_POST['standart_number'];
$text_color=$_POST['text_color'];
$print=$_POST['print'];
$print_color=$_POST['print_color'];
$uteplitel=$_POST['uteplitel'];
$place_form=$_POST['place_form'];
$name=$_POST['name'];
$phone=$_POST['phone'];
$comment=$_POST['comment'];
$message="<p><b>Гендер:</b> ".($sex=='M'?'Мужчина':'Женщина')."</p>
<p><b>Размер:</b> $mySize</p>
<p><b>Сторона:</b> $side</p>
<p><b>Стиль текста:</b> $text_style</p>
<p><b>Текст:</b> $text</p>
<p><b>Номер:</b> $number</p>
<p><b>Стандартный шрифт номера:</b> $standart_number_font</p>
<p><b>Тип:</b> $type</p>
<p><b>Цвет свитшота:</b> $sweatshirt_color</p>
<p><b>Цена:</b> $price</p>
<p><b>Стандартный номер:</b> $standart_number</p>
<p><b>Цвет текста:</b> $text_color</p>
<p><b>Принт:</b> $print</p>
<p><b>Цвет принта:</b> $print_color</p>
<p><b>Утеплитель:</b> $uteplitel</p>
<p><b>Имя:</b> $name</p>
<p><b>Телефон:</b> $phone</p>
<p><b>Комментарий:</b> $comment</p>";


require 'class.phpmailer.php';
$mail = new PHPMailer();
$mail->From = 'mail@logreel.xyz';
$mail->FromName = 'logreel.xyz';
$mail->AddAddress('newaitix0@gmail.com', 'Имя');
$mail->AddAddress('evgeniykamenkin1992@gmail.com', 'Имя');
$mail->IsHTML(true);
$mail->Subject = "Заказ на фунболку";
$mail->Body = $message;
$mail->Send();


echo json_encode(
	array(
		'error'=>0
	)
);
?>