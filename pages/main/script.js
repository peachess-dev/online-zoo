"use strict";

alert(
  "Please be kind and give me time till Friday to finish the project. Thank you!"
);

const burgerMenu = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");
const hero = document.querySelector(".hero");
const shadow = document.querySelector("#shadow");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  shadow.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !burgerMenu.contains(e.target) &&
    !navMenu.contains(e.target)
  ) {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    shadow.classList.toggle("active");
  }
});
