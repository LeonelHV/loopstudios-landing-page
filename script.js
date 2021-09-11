
const hamburger = document.querySelector(".hamburger");
const menu=document.querySelector('.menu');
const body=document.querySelector('.body');
  hamburger.addEventListener("click", function() {
  
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("show");
    body.classList.toggle("no-scroll");
  });
