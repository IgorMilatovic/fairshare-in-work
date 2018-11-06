//  NavBar appear of scrolling up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

//  active link on click
$(document).on('click', 'ul li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});