<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
  
	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('uk', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('office@friedman.com.ua', 'GCG');
	//Кому отправить
	$mail->addAddress('office@friedman.com.ua');
	//Тема письма
	$mail->Subject = 'GCG';

	//Тело письма
	$body = '<h1>Запит євросерт</h1>';
  $body.= 
  'Замовник: '
  .'<h3 style="display: inline;">'
  .$_POST['name']
  .'</h3><br>';
  $body.=
  'Телефон замовника: '
  .'<h3 style="display: inline;">'
  .$_POST['phone']
  .'</h3><br>';
  $body.=
  'Email замовника: '
  .'<h3 style="display: inline;">'
  .$_POST['email']
  .'</h3><br>';
  $body.=
  'Повідомлення замовника: '
  .'<h3 style="display: inline;">'
  .$_POST['message']
  .'</h3><br>';

	//if(trim(!empty($_POST['name']))){
		//$body.='';
	//}	
	
	/*
	//Прикрепить файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//путь загрузки файла
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузим файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>