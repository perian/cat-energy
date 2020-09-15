var openCloseButton = document.querySelector(".main-nav__toggle");
var mainMenu = document.querySelector(".main-nav");

if (mainMenu !== null ) {
  mainMenu.classList.add("main-nav--js");
}

if (mainMenu.classList.contains("main-nav--opened")) {
  mainMenu.classList.remove("main-nav--opened");
  mainMenu.classList.add("main-nav--closed");
}

openCloseButton.onclick = function () {
  mainMenu.classList.toggle("main-nav--opened");
  mainMenu.classList.toggle("main-nav--closed");
};
