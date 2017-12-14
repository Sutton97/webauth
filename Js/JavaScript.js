/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

//window load
window.onload=function(){
	
	
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

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

$('#myDropdown a').click(function(){
	console/lo('chnage class');
	$('#myDropdown a').removeClass('selected');
	$(this).addClass('selected');
	
});

}//leave