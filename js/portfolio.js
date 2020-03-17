function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("nav_links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown

var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}



// var slideIndex = 1;

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides2");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
// // https://www.w3schools.com/w3css/w3css_slideshow.asp
// var motionQuery = matchMedia('(prefers-reduced-motion)');
// function handleReduceMotionChanged(){
// 	if (motionQuery.matches){
// 		 carousel('disabled');


// }else{
// 	showDivs('disabled');

// }
// }
// https://justmarkup.com/articles/2019-02-19-adapting-to-user-preferences/


function mail(){
	window.location.href="mailto:lillianliauthor@gmai.com";
}