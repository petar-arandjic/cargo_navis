<?php
	/**
	 * 
	 */
	class Receiver extends Database{
		
		private $collums;
		private $table_name;
		private $where_fun;

		function set_collums($s1, $s2){
			$this->collums = $s1;
			$this->table_name = $s1[0];

			if ($s2 != false) {
				$this->where_fun = "WHERE " . $s2;
			}else{
				$this->where_fun = '';
			}
			
			$this->prepare_var();
		}
		function prepare_var(){

			array_shift($this->collums);

			$this->collums = implode(',', $this->collums);

		}
		function get_db_data(){
			$stmt = $this->connect()->query("
					SELECT
						".$this->collums."
					FROM 
						".$this->table_name."
						".$this->where_fun."
					ORDER BY 
						id
					");

			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				$result[] = $row;
			}
			if (isset($result)) {
				return $result;
			}else{
				return '110'; #no data
			}
		}		
	}