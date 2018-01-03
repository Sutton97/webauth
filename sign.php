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
		<h1 class ="title"> Sign in or Register
			<span>Sign in or Register to your account</span>
		</h1>
	</div>
	</section>
	
	<div id ="wrapper">
	<form method ="POST" action="index.php" onsubmit="return Validate()" name="vform">
	<div>
		<input type="text" name="username" class="textInput" placeholder="Username">
		<div id = "name_error" class="val_error"</div>
	</div>
	<div>
		<input type="email" name="email" class="textInput" placeholder="Email">
		<div id = "email_error" class="val_error"</div>
	</div>
	<div>
		<input type="password" name="password" class="textInput" placeholder="Password">
	</div>
	<div>
		<input type="password" name="password_confirmation" class="textInput" placeholder="Password Confirmation">
		<div id = "password_error" class="val_error"</div>
	</div>
	<div>
		<input type="submit" value="Register" class="btn" name="Register">
	</div>
	</body>
	</html>
	
	<script type="text/javascript">
	var username = document.forms["vform"]["username"];
	var email = document.forms["vform"]["email"];
	var password = document.forms["vform"]["password"];
	var password_confirmation = document.forms["vform"]["password_confirmation"];
	
	var name_error = document.getElementById("name_error");
	var email_error = document.getElementById("email_error");
	var password_error = document.getElementById("password_error");
	
	username.addEventListener("blur", nameVerify, true);
	email.addEventListener("blur", emailVerify, true);
	password.addEventListener("blur", passwordVerify, true);
	
	//validation function
	function Validate(){
	
	//username validation
		if(username.value == ""){
		username.style.border = "1px solid red";
		name_error.textContent = "Username is required";
		username.focus();
		return false;
		}
	//email validation
		if(email.value == ""){
		email.style.border = "1px solid red";
		email_error.textContent = "Email is required";
		email.focus();
		return false;
		}
	//password validation
		if(password.value == ""){
		password.style.border = "1px solid red";
		password_error.textContent = "Password is required";
		password.focus();
		return false;
	}
	if (password.value!= password_confirmation.value){
		password.style.border = "1px solid red";
		password_confirmation.style.border = "1px solid red";
		password_error,innerHTML = "The two passwords do not match";
		return false;
		
	}
	}
	
	//Event handler
	function nameVerify(){
		if(username.value!=""){
		username.style.border = "1px solid #5E6E66";
		username_error.innerHTML ="";
		return true;
		}
	}
	
	function emailVerify(){
		if(email.value!=""){
		email.style.border = "1px solid #5E6E66";
		email_error.innerHTML ="";
		return true;
		}
	}
	
	function passwordVerify(){
		if(password.value!=""){
		password.style.border = "1px solid #5E6E66";
		password_error.innerHTML ="";
		return true;
		}
	}
	</script>