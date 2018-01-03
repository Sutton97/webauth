<!DOCTYPE html>

<body>
<?php
if(isset($_POST['register'])){
	$user = $_POST['username'];
	echo "Welcome".$user;
}

?>
</body>
</html>