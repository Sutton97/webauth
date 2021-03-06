//SCENT & CANDLE CUSTOMISER
window.onload = init;
var img;
var img2;
function init() 
{
	console.log("scent");
	var blue = document.getElementById("blue");
	var red = document.getElementById("red");
	var purple = document.getElementById("purple");
	var pink = document.getElementById("pink");
	
	img = document.getElementById("image");
	blue.onclick = blueFunction;
	red.onclick = redFunction;
	purple.onclick = purpleFunction;
	pink.onclick = pinkFunction;
	
	console.log(blue,red,purple,pink);
	
	console.log("candle");
	var black = document.getElementById("black");
	var red1 = document.getElementById("red1");
	var pink1 = document.getElementById("pink1");
	
	img2 = document.getElementById("image1");
        local();
	black.onclick = blackFunction;
	red1.onclick = red1Function;
	pink1.onclick = pink1Function;
	
	console.log(black,red1,pink1);
}
function blueFunction(){
	console.log("blue");
	img.src = "assets/scentblue1.jpeg";
        localStorage.setItem('scentColor', "assets/scentblue1.jpeg");
}
	
function redFunction(){
	console.log("red");
	img.src = "assets/scentred1.jpeg";
        localStorage.setItem('scentColor', "assets/scentred1.jpeg");
}

function purpleFunction(){
	console.log("purple");
	img.src = "assets/scentpurple1.jpeg";
        localStorage.setItem('scentColor', "assets/scentpurple1.jpeg");
}

function pinkFunction(){
	console.log("pink");
	img.src = "assets/scentpink1.jpeg";
        localStorage.setItem('scentColor', "assets/scentpink1.jpeg");
}


function blackFunction(){
	console.log("black");
	img2.src = "assets/blackcandle.jpg";
        localStorage.setItem('candleColor', "assets/blackcandle.jpg");
}
	
function red1Function(){
	console.log("red");
	img2.src = "assets/redcandle.jpg";
        localStorage.setItem('candleColor', "assets/redcandle.jpg");
}

function pink1Function(){
	console.log("pink");
	img2.src = "assets/pinkcandle.jpg";
        localStorage.setItem('candleColor', "assets/pinkcandle.jpg");
}


//QUIZ
function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
	
	if (question1 == "+£50"){
		correct++;
	}
	
	if(question2 == "Yes"){
		correct++;
	}
	
	if(question3 == "Yes"){
		correct++;
	}
	var pictures = ["assets/shop.png", "assets/exclamation.png","assets/cross.png"];
	var messages = ["Most definitley a Shopaholic!", "You're on your way!", "You're not a Shopaholic!"];
	var range;
	
	if(correct < 1){
		range = 2;
	}
	
	if(correct > 0 && correct < 3){
		range = 1;
	}
	
	if(correct > 2) {
		range = 0;
	}
	
	document.getElementById("after-submit").style.visibility = "visible";
	document.getElementById("picture").src= pictures[range];
	document.getElementById("messages").innerHTML = messages[range];
	//document.getElementById("number-correct").innerHTML = "You got " + correct + " correct";
}
//SIGN IN AND REGISTER
function check_info(){
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		
		if(username =="" || password =="" || password_confirmation==""){
			alert('Please enter Username or Password');
			return false;
		}
		else{
			return true;
		}
	}
//LOCAL STORAGE
function local(){
	
        img.src = localStorage.getItem('scentColor');
        img2.src = localStorage.getItem('candleColor');
	
}

//GEO-LOCATION
    function initMap() {
        var uluru = {lat: 51.508530, lng: -0.076132};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }