<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL); 

include('./db_private.php');	
$db_private = new db_private();

echo $_POST["mailto"];

$mailto='michael@geihe.net';
$subject='subject: private-Test';
$body='body: Nur ein erster Test.';

$db_private->add_mail(
	$_POST["mailto"],
	'Ihr psychologisches Experiment geht morgen weiter...',
	'Sehr geehrte(r) Teilnehmer*in. Morgen geht es weiter.',
	60
 );
$db_private->add_mail(
	$_POST["mailto"],
	'Es ist soweit.',
	'Unter diesem Link können Sie das Experiment fortführen.',
	120
 );
$db_private->add_mail(
	$_POST["mailto"],
	'Haben Sie das Experiment schon gemacht?',
	'Falls Sie noch nicht an der zweiten Phase mitgemacht haben, hier noch einmal der Link:',
	240
 );

?>