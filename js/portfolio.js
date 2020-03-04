function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown

var url = "http://example.com/products.html".split("/"); //replace string with location.href
var navLinks = document.getElementsByClass("nav_links")[0].getElementsByTagName("a");
//naturally you could use something other than the <nav> element
var i=0;
var currentPage = url[url.length - 1];
for(i;i<navLinks.length;i++){
  var lb = navLinks[i].href.split("/");
  if(lb[lb.length-1] == currentPage) {
   navLinks[i].className = "current";

  }
  }