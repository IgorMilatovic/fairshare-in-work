// array svih elemenata sa klasom "target" klikom na koje se treba otvoriti modal
const targets = document.querySelectorAll(`.target`),
      modal = document.querySelectorAll(`.modal-outer`),
      close = document.querySelector(`.arrow-back`);


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
 arrowDiv.style.display = "block";
 readMore.appendChild(arrowDiv);
 arrowDiv.style.position = "absolute";
 arrowDiv.style.top = 15 + "px";
 arrowDiv.style.left = 90 + "px";
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