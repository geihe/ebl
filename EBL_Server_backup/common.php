<?php

function getRandomIndex($array) {	
	$total_index = random_int(1, array_sum($array));
	$sum = 0;
	foreach($array as $key => $value) {
		$sum += $value;
		if ($total_index <= $sum) {
			return $key;
		}
	}
}
?>