const burger = document.querySelector(".burger");
const closebtn = document.querySelector(".menu__close");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");

let isOpen = false;

burger.addEventListener("click", () => {
    
    
  isOpen = !isOpen;
  overlay.classList.toggle("open");
  if (isOpen) {  
    overlay.style.position  = "block";
    overlay.style.zIndex = 2;
  } else {
    overlay.style.zIndex = -1;
  }
  /*не заморачивался с отступом элементов при скрытии полосы прокрутки, поэтому закомментил её выключение
  if (isOpen) {
    document.body.style.overflow = "hidden";
  }
  if (!isOpen) {
    document.body.style.overflow = "auto";
  }*/
});
closebtn.addEventListener("click", () => {
    overlay.classList.remove("open");
    overlay.style.zIndex = -1;
  /*document.body.style.overflow = "auto"; */ 
});
