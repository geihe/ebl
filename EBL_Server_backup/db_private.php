<?php
class db_private {
	private $db;
	
	public function __construct() {
		$servername = 'rdbms.strato.de';
		$dbname= 'DB4400947';
		$username = 'U4400947';
		$password = 'Yphqu8Hsv3pVWXE';		
		$this->db = new mysqli($servername, $username, $password, $dbname);
	}
	
	public function __destruct() {
        $this->db->close();
    }

	public function get_mail_list() {
		$query = "SELECT id, mailto, subject, body ";
		$query.= "FROM mail_queue ";
		$query.= "WHERE timestamp<CURRENT_TIMESTAMP() ";
		$result = $this->db->query($query);
 
		$mails = [];
		while ($row = $result->fetch_assoc()) {
			$mails[] = $row;
		}
		return  $mails;
	}
	
	public function delete_mail($id) {
		$delete_query = "DELETE FROM mail_queue WHERE id=?";
		$stmt = $this->db->prepare($delete_query);
		$stmt->bind_param("i", $id);
		$stmt->execute();
		$stmt->close();	
	}
		
	public function delete_all_mails_for_user($user_id) {
		$delete_query = "DELETE FROM mail_queue WHERE user_id=?";
		$stmt = $this->db->prepare($delete_query);
		$stmt->bind_param("s", $user_id);
		$stmt->execute();
		$stmt->close();	
	}	
				
	public function add_mail($mailto, $subject, $body, $delay_in_minutes) {
		$timestamp = time()+$delay_in_minutes*60;
		var_dump($timestamp);
		$insert_query = "INSERT INTO mail_queue (timestamp, mailto, subject, body) VALUES (FROM_UNIXTIME(?),?,?,?)";
		$stmt = $this->db->prepare($insert_query);
		$stmt->bind_param("isss", $timestamp , $mailto, $subject, $body);
		$stmt->execute();
		$stmt->close();	
	}	
}



?>