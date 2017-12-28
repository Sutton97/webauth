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

window.onload=function(){
var imgList = ["scentblue2.jpeg","scentred2.jpeg", "scentpink2.jpegg" ];

var myButton = document.getElementById("myButton");
myButton.onclick = function( e ){
    var elem = e.target,
    imageIndex = parseInt(elem.dataset.img,10);
    if( imageIndex <= (imgList.length -1) ) {
        elem.src = imgList[imageIndex++];
        elem.dataset.img = imageIndex;
    } else {
        elem.src = imgList[0];
        elem.dataset.img = 1;
    }
}
