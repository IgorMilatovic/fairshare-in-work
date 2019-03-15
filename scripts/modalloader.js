// array svih elemenata sa klasom "target" klikom na koje se treba otvoriti modal
const targets = document.querySelectorAll(`.target`),
      close = document.querySelectorAll(`.modal-outer`);

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
 document.querySelector('html').style.overflowY = "hidden";
}

// adds event listener to before element (close button), see also css for both element and before
for(let i = 0; i < close.length; i++) {
 let current = close[i];
 current.onclick = (current) => {
  closeModal(current.target.parentElement);
 }
}

// closes the modal, and releases page scroll
function closeModal(modal) {
  modal.style.display = "none";
  document.querySelector('html').style.overflowY = "auto";
}