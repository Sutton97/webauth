//WINDOW LOAD
window.onload=function(){
function getSelectValue()
{
	var selectedValue = document.getElementById("drop").value;
	console.log(selectedValue);
	}	
	getSelectValue();	
	
}

//SCENT CUSTOMISER
window.onload = init;
var img;
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
}
function blueFunction(){
	console.log("blue");
	img.src = "assets/scentblue1"+ ".jpeg";
}
	
function redFunction(){
	console.log("red");
	img.src = "assets/scentred1"+ ".jpeg";
}

function purpleFunction(){
	console.log("purple");
	img.src = "assets/scentpurple1"+ ".jpeg";
}

function pinkFunction(){
	console.log("pink");
	img.src = "assets/scentpink1"+ ".jpeg";
}

{
console.log("candle");
	var black = document.getElementById("black");
	var red1 = document.getElementById("red1");
	var pink1 = document.getElementById("pink1");
	
	img = document.getElementById("image1");
	black.onclick = blackFunction;
	red1.onclick = red1Function;
	pink1.onclick = pink1Function;
	
	console.log(black,red1,pink1);
}
function blackFunction(){
	console.log("black");
	img.src = "assets/blackcandle"+ ".jpg";
}
	
function red1Function(){
	console.log("red");
	img.src = "assets/redcandle"+ ".jpg";
}

function pink1Function(){
	console.log("pink");
	img.src = "assets/pinkcandle"+ ".jpg";
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
