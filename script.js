let burger = document.querySelector(".burger");
let topbar = document.querySelector(".links");
let inicio = document.getElementById("homeI");
let about = document.getElementById("aboutI");
let services = document.getElementById("servicesI");
let clients = document.getElementById("clientsI");
let footer = document.getElementById("footerI");

burger.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  //Animacion del menu hamburguesa, pasa a ser una X
  burger.classList.toggle("toggle");
});

inicio.addEventListener("click", ()=>{
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

about.addEventListener("click", ()=>{
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

services.addEventListener("click", ()=>{
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

clients.addEventListener("click", ()=>{
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

footer.addEventListener("click", ()=>{
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});