// array svih elemenata sa klasom "target" klikom na koje se treba otvoriti modal
const targets = document.querySelectorAll(`.target`),
      modal = document.querySelectorAll(`.modal-outer`),
      close = document.querySelector(`.arrow-back`);

// let uniqueId = 0;
// for (let target of targets) {
//   uniqueId++;
//   let arrowDiv = document.createElement(`div`);
//   target.appendChild(arrowDiv);
//   arrowDiv.setAttribute(`class`, `arrow-for arrow-${uniqueId}`);
//   let arrowSpan = document.createElement(`span`);
//   arrowDiv.appendChild(arrowSpan);
//   arrowSpan.setAttribute(`class`, `fas fa-arrow-right`);
//   arrowSpan.style.position = "absolute";  
//   target.style.position = "relative";
//   arrowSpan.style.right = `10px`;
//   arrowSpan.style.bottom = `5px`;
//   arrowSpan.style.zIndex = 15;
//   arrowSpan.style.cursor = `pointer`;
//   arrowDiv.style.fontSize = `1.2rem`;
//   console.log(arrowSpan.style.color);
//   if (arrowSpan.style.color == `#FFFFF0`) {
//     arrowSpan.style.color == `#fdd325`;
//   }
// }

// adds onclik to all members of targets array
for(let i = 0; i < targets.length; i++) {
 let current = targets[i];
 current.onclick = (current) => {
  findTarget(current.target)
 }
}

// finds outer box which received the click
function findTarget(element) {
  if(element.classList.contains("target") ) {
   showModal(element.id);
  }
   else {
    findTarget(element.parentElement);
   }
}

// displays overlay and modal and halts page scroll
function showModal(query) {
 let readMore = document.querySelector(`.${query}`);
 readMore.style.display = "block";
 let arrowDiv = document.querySelector(`.arrow-back`);
  console.log(readMore);
 readMore.childNodes[1].appendChild(arrowDiv);
 arrowDiv.style.display = "block";
 // readMore.appendChild(arrowDiv);
  document.querySelector(`.modal-outer`).style.position = `relative`;
  arrowDiv.style.position = "absolute";
  arrowDiv.style.top = -11 + "px";
  arrowDiv.style.left = 28 + "px";
 arrowDiv.style.zIndex = 9999; 
 document.querySelector('html').style.overflowY = "hidden";
 readMore.style.overflowY = "scroll";
}

// adds event listener to arrow (close button)
close.onclick = () => {
  let targets = document.querySelectorAll(`.overlay`);
  for (let target of targets){
    if (target.style.display != "none") {
      target.style.display = "none";
    }
  }
  document.querySelector('html').style.overflowY = "scroll";

}

// prosiri-skupi-txt-changer
$(".procitaj-vise").click(function(){

    $(this).text($(this).text() == 'pročitaj više' ? 'skupi tekst' : 'pročitaj više');

});