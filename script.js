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
//  //    if (window.pageYOffset > 1560) {
// 	// 	document.querySelector(".hr-black-double").style.width = "80%";
// 	// 	document.querySelector(".title-usluge").style.fontSize = "77px";
// 	// 	document.querySelector(".title-usluge").style.transition = "1.5s";
// 	// }
// 	// else {
// 	// 	document.querySelector(".hr-black-double").style.width = "20%";
// 	// 	document.querySelector(".hr-black-double").style.transition = "1.5s";
// 	// 	document.querySelector(".title-usluge").style.fontSize = "55px";
// 	// 	document.querySelector(".title-usluge").style.transition = "1.5s";
// 	// }
// }

//  active link on click
$(document).on('click', 'ul li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});


///       snippets      ///
// var $ = (el) => document.querySelector(el);
// var log = (param) => console.log(param);
///       *******      ///







	
	
// function apoeni(suma) {

// 	var arr = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10]

// 	for (var i = 0; i < arr.length; i++) {
		
// 		apoen = (suma - (suma % arr[i])) / arr[i]
// 		suma = suma % arr[i]

// 		if (apoen > 0) {
// 			console.log(apoen + " apoena od " + arr[i] + "din")
// 		}

// 		if (suma < 10) {
// 			console.log("ostatak je " + suma + "din")
// 		}
// 	}
// }

// apoeni(10678)















