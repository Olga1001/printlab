<?
if (!function_exists('set_magic_quotes_runtime')) {
    function set_magic_quotes_runtime($new_setting) {
        return true;
    }
}
$name=$_POST['name'];
$phone=$_POST['phone'];
$link=$_POST['link'];
$comment=$_POST['comment'];
$place_form=$_POST['place_form'];
$message="<p><b>Собственный макет</b></p>
<p><b>Имя:</b> $name</p>
<p><b>Телефон:</b> $phone</p>
<p><b>Ссылка:</b> $link</p>
<p><b>Комментарий:</b> $comment</p>";


require 'class.phpmailer.php';
$mail = new PHPMailer();
$mail->From = 'mail@logreel.xyz';
$mail->FromName = 'logreel.xyz';
$mail->AddAddress('newaitix0@gmail.com', 'Имя');
$mail->AddAddress('evgeniykamenkin1992@gmail.com', 'Имя');
$mail->IsHTML(true);
$mail->Subject = "Собственный макет";
if(isset($_FILES['fileFF'])) {
if($_FILES['fileFF']['error'] == 0){
$mail->AddAttachment($_FILES['fileFF']['tmp_name'], $_FILES['fileFF']['name']);
}
}
$mail->Body = $message;
$mail->Send();


echo json_encode(
	array(
		'error'=>0
	)
);
?>