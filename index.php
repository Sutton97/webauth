<!DOCTYPE html>
<!DOCTYPE html>
<head>
  <link rel="stylesheet" href="css/style1.css">
 <script src="Js/JavaScript.js"></script>
 <script src ="php/index.php"></script>
</head>

<header>
<img src="assets/TBlogo.jpg" class="logo">
<img src="assets/basket1.png" class="basket">
<img src="assets/help.png" class="help">

<a href ="https://www.facebook.com/TedBaker/">
<img src="assets/facebook.png" class="facebook">
</a>

<a href="https://twitter.com/ted_baker?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
<img src="assets/twitter.png" class="twitter">
</a>

<nav>
	<ul>
		<li><a href ="index.html">Home</a></li>
		<li><a href ="woman.html">Women</a></li>
		<li><a href ="men.html">Men</a></li>
		<li><a href ="gifts.html">Gifts</a></li>
		<li><a href ="sign.php">Sign In / Register</a></li>
		<li><a href ="quiz.html">Quiz</a></li>
	</ul>
</header>

<body>
<section class="home-area">
		<h1 class ="title"> My Account
			<span> Welcome to your account</span>
		</h1>
		
<?php
if(isset($_POST['register'])){
	$user = $_POST['username'];
	echo "Welcome".$user;
}

?>
</body>
</html>