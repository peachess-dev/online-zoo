"use strict";

// alert(
//   "Please be kind and give me time till Friday to finish the project. Thank you!"
// );

// show and hide burger menu

const burgerMenu = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");
const hero = document.querySelector(".hero");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !burgerMenu.contains(e.target) &&
    !navMenu.contains(e.target)
  ) {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  }
});

// show and hide pop up in testimonials
const reviews = document.querySelectorAll(".testimonials__card");
const popUps = document.querySelector(".testimonials__container");

for (let i = 0; i < reviews.length; i++) {
  reviews[i].addEventListener("click", () => {
    const popUpWindow = document.createElement("div");
    popUpWindow.className = "popup";
    popUps.append(popUpWindow);
    popUpWindow.innerHTML = reviews[i].innerHTML;
    overlay.classList.toggle("active");
    overlay.addEventListener("click", () => {
      popUpWindow.remove();
      overlay.classList.toggle("active");
    });
  });
}
