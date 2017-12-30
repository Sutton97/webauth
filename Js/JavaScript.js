/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

//window load
window.onload=function(){
	
	
/* function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
 */
// Close the dropdown menu if the user clicks outside of it
/* window.onclick = function(event) {
	console.log("test");
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */
$('.dropdown').click(function(){
	$('#myDropdown').toggle();
	
	
});
$('#myDropdown a').click(function(){
	console.log('change class');
	$('#myDropdown a').removeClass('selected');
	$(this).addClass('selected');
	var size = $(this).data('size');
	console.log(size);
	
});

}//leave


//CUSTOMISER
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
	
	document.getElementById("messages").innerHTML = messages[range];
	//document.getElementById("number-correct").innerHTML = "You got " + correct + " correct";
}
