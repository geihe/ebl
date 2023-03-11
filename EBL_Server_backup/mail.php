<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL); 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

	include('./db_private.php');	
	$db = new db_private();

foreach ($db->get_mail_list() as $mail) {
	$smtp = getMail();
	$smtp->isHTML(true); 
	$smtp->addAddress($mail["mailto"]);    
	$smtp->Subject = $mail["subject"];
	$smtp->Body = $mail["body"];
	//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
	$smtp->send();
	$db->delete_mail($mail["id"]);
}
	
function getMail() {
	$mail = new PHPMailer();
	//Server settings
	$mail->SMTPDebug = 2;                      // Enable verbose debug output
	$mail->isSMTP();                                            // Send using SMTP
	$mail->Host       = 'smtp.strato.de';                    // Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
	$mail->Username   = 'psychologie@geihe.net';                     // SMTP username
	$mail->Password   = '=S6DM&+{Xkq~';                               // SMTP password
	$mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
	$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
	$mail->setFrom('psychologie@geihe.net');		
	$mail->addReplyTo('psychologie@geihe.net', 'Frage zum Experiment');
		
//  $mail->addAddress('ellen@example.com');               // Name is optional
//  $mail->addCC('cc@example.com');
//  $mail->addBCC('bcc@example.com');

// Attachments
//  $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//  $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name		
		
	return $mail;
}
?>