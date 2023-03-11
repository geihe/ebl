<?php
class db_mysql {
	private $db;
	
	public function __construct() {
		$servername = 'rdbms.strato.de';
		$dbname= 'DB4377255';
		$username = 'U4377255';
		$password = 'FfyQmTQrm7yf43U';		
		$this->db = new mysqli($servername, $username, $password, $dbname);
	}
	
	public function __destruct() {
        $this->db->close();
    }
	
	public function get_html_meta() {
		$query = "SELECT * ";
		$query.= "FROM EBL01 ";
		$query.= "ORDER by group_id ";
		$result = $this->db->query($query);

		$html = '<table style="border: 1px solid red; text-align: center">';
		$html.= "<tr><th>Proband</th><th>Start</th><th>Gruppe</th><th>Gruppenbeschreibung</th><th>Abgeschlossen</th></tr>";
		
		while ($row = $result->fetch_row()) {
			$html.= "<tr><td>$row[1]</td><td>$row[2]</td><td>$row[3]</td><td>$row[4]</td><td>$row[5]</td></tr>";
		}
		
		$result->close();	
		
		$html .= "</table>";
		return $html;
	}
	
	public function get_html_summary() {
		$query = "SELECT group_id, ";
		$query.= "count(group_id), ";
		$query.= "count(end) ";
		$query.= "FROM EBL01 GROUP BY group_id ";
		$query.= "ORDER by group_id ";
		$result = $this->db->query($query);

		$html = '<table style="border: 1px solid blue; text-align: center">';
		$html.= "<tr><th>Gruppe</th><th>Ziel</th><th>begonnen</th><th>abgeschlossen</th></tr>";
		
		$target_count = getConfig()->group_count;	
		 
		while ($row = $result->fetch_row()) {
			$group_id = $row[0];
		
			$target = $target_count[$group_id];
			$group_count = $row[1];
			$end = $row[2];
			$html.= "<tr><td>$group_id</td><td>$target</td><td>$group_count</td><td>$end</td></tr>";
		}	
	}

	public function get_data() {
		$query = "SELECT user, group_id, start, end, data ";
		$query.= "FROM EBL01 ";
		$query.= "ORDER by group_id ";
		$result = $this->db->query($query);
		
		$myArray = array();
		while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
		}
		$result->close();

		return $myArray;
}
	
	public function insertGroupAndUser($group_id, $user_id) {
		$insert_query = "INSERT INTO EBL01 (user, group_id) VALUES (?,?)";
		$stmt = $this->db->prepare($insert_query);
		$stmt->bind_param("si", $user_id, $group_id);
		$stmt->execute();
		$stmt->close();	
	}
	
	public function getGroupCounts() {
		$query = "SELECT group_id, count(group_id) AS count ";
		$query.= "FROM EBL01 ";
  		$query.= "WHERE end IS NOT NULL "; //**********************************************************************
		$query.= "GROUP BY group_id ";
		$result = $this->db->query($query);
		$n = count(getConfig()->group_count);

		$group_counts = [];
		while ($row = $result->fetch_row()) {
			$group_counts[$row[0]] = (int) $row[1];
		}
		$result->close();

		return $group_counts;
	}
			
	public function isUser($user_id) {
		$query = "SELECT count(1) AS count FROM EBL01 WHERE user=?";
		$stmt = $this->db->prepare($query);
		$stmt->bind_param("s", $user_id);
		$stmt->execute();
		$stmt->bind_result($exists);
		$stmt->fetch();
		$stmt->close();	
		return $exists>0;
	}		
	
	public function saveData($user_id, $session, $group_id, $data) {
		$insert_query = "UPDATE EBL01 ";
		$insert_query .= "SET end=now(), data=? ";
		$insert_query .= "WHERE user=? AND session=?";
		$stmt = $this->db->prepare($insert_query);
		
		$stmt->bind_param("ssi", $data, $user_id, $session);
		$feedback = $stmt->execute();
		$stmt->close();	
		return $feedback;
	}
}
?>