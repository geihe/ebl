<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL); 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: content-type, authorization");
	header("Access-Control-Allow-Methods: POST, GET");
	header("Content-type: application/json");

	include('./db.php');
?>

<?php
	include('./config01.php');
	include('./common.php');

	$db = new db_mysql();

	echo json_encode($db->get_data());
?>


