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

// displays overlay and modal
function showModal(query) {
 let readMore = document.querySelector(`.${query}`);
 readMore.style.display = "block";
 window.addEventListener('scroll', noScroll);
}

// prevents background scrolling while modal is open
function noScroll() {
 let pos = window.pageYOffset;
 window.scrollTo(0, pos);
}

// adds event listener to before element (close button)
for(let i = 0; i < close.length; i++) {
 let current = close[i];
 current.onclick = (current) => {
  closeModal(current.target.parentElement);
 }
}

// closes the modal, and releases page scroll
function closeModal(modal) {
   window.removeEventListener('scroll', noScroll);
   modal.style.display = "none";
}