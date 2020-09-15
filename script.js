let burger = document.querySelector(".burger");
let topbar = document.querySelector(".links");
let inicio = document.getElementById("homeI");
let sobreMi = document.getElementById("aboutI");
let contact = document.getElementById("contactI");
let menu = document.getElementById("menuI");

burger.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  //Animacion del menu hamburguesa, pasa a ser una X
  burger.classList.toggle("toggle");
});