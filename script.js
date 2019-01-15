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

  if (window.pageYOffset > 1560) {
		document.querySelector(".hr-black-double").style.width = "80%";
		document.querySelector(".title-usluge").style.fontSize = "77px";
		document.querySelector(".title-usluge").style.transition = "1.5s";
	}
	else {
		document.querySelector(".hr-black-double").style.width = "20%";
		document.querySelector(".hr-black-double").style.transition = "1.5s";
		document.querySelector(".title-usluge").style.fontSize = "55px";
		document.querySelector(".title-usluge").style.transition = "1.5s";
	}
}

//  active link on click
$(document).on('click', 'ul li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});