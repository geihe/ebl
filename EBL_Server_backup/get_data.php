<?php
	ini_set('display_errors', 'On');
	error_reporting(E_ALL); 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: content-type, authorization");
	header("Access-Control-Allow-Methods: POST, GET");
//	header("Content-type: application/json");

	include('./db.php');
?>

<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
		table {border: 1px solid blue; border-collapse: collapse; margin-top: 20px;}
		td, th {border: 1px solid green; padding: 2px}
	</style>
    <title>EBL 01</title>
  </head>
  <body>
<?php
	include('./config01.php');
	include('./common.php');

	$db = new db_mysql();

	echo $db->get_html_summary();
	echo $db->get_html_meta();

?>
  </body>
</html>

