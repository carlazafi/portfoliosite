/* Burger menu */
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

document.querySelector("#Work").addEventListener("click", infoWork);

function infoWork() {
  console.log("infoWork");
}

Hobby;
Funfact;
