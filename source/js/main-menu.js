var openCloseButton = document.querySelector(".main-nav__toggle");
var mainMenu = document.querySelector(".main-nav");

if (mainMenu.classList.contains("main-nav--nojs")) {
  mainMenu.classList.remove("main-nav--nojs");
}

openCloseButton.onclick = function () {
  mainMenu.classList.toggle("main-nav--opened");
  mainMenu.classList.toggle("main-nav--closed");
}
