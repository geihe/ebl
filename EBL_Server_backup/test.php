<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL); 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: content-type, authorization");
	header("Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS");
	header("Content-type: application/json");

	include('./config01.php');
	include('./common.php');
	include('./db.php');

	$db = new db_mysql();

	$user_id = uniqid('EBL01', TRUE) ;
	$target = getConfig()->group_count;
	$n	 = count($target);
	$group_count = $db->getGroupCounts();

	$rest = [];
	$rest_sum = 0;
	for ($i=0; $i<$n; $i++) {
		if(isset($group_count[$i+1]) ){
			$rest[$i] = $target[$i] - $group_count[$i+1];			
		} else {
			$rest[$i] = $target[$i];
		}
		$rest_sum += $rest[$i];
	}

	$rest_sum>0 ? $group_id = getRandomIndex($rest) : $group_id = -1;
	
	if ($group_id>=0) {
		$db->insertGroupAndUser($group_id+1, $user_id);
	};	
		
			$test=[0,0,0,0,0];
	for ($i=1; $i<=1000; $i++) {
		$test[getRandomIndex($rest)]++;
	}
	
	$ret = (object) [
			"language" => getConfig()->language,
			"session" => 1,
			"user_id" => $user_id,
			"group_id" => $group_id + 1,
			"finished" => $group_id < 0
		];	
	echo json_encode($test);
	

?>
		

