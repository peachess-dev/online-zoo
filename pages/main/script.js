"use strict";

alert(
  "Please be kind and give me time till Friday to finish the project. Thank you!"
);

const burgerMenu = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");
const hero = document.querySelector(".hero");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.getElementById("shadow").style.background = "#000";
  document.getElementById("shadow").style.opacity = 0.5;
});

window.addEventListener("mouseup", function (e) {
  if (
    !document.querySelector(".nav__burger").contains(e.target) &&
    !document.querySelector(".nav__menu").contains(e.target)
  ) {
    document.getElementById("shadow").style.background = "none";
    document.getElementById("shadow").style.opacity = 1;
  }
});

window.addEventListener("load", showBurgerMenu);
