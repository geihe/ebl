<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL); 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: content-type, authorization");
	header("Access-Control-Allow-Methods: POST");
	header("Content-type: application/json");

	include('./config01.php');
	include('./common.php');
	include('./db.php');
	
	$_POST = json_decode(file_get_contents('php://input'), true);
	$user_id	=$_POST["user_id"];
	$session	=$_POST["session"];
	$group_id	=$_POST["group_id"];
	$data		=$_POST["data"];
	$mail_id	=$_POST["mail_id"];
	
	if ($session==99) { //Testsession
		$session=1;
	}
	$db = new db_mysql();
	echo $db->saveData($user_id, $session, $group_id, json_encode($data));
	var_dump($user_id);
	var_dump($session);
	var_dump($group_id);
	var_dump($data);
	var_dump($mail_id);
?>