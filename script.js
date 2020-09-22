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

inicio.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

about.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

services.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

clients.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

footer.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  burger.classList.toggle("toggle");
});

//A Partir de esta linea se ejecuta el script para el boton que aparece para subir
window.onscroll = function () {
  if (document.documentElement.scrollTop > 400) {
    document.querySelector(".containerGoTop").classList.add("showGoTop");
    document.querySelector(".subir").classList.remove("ocultarContenido");
    document.querySelector(".up").classList.remove("ocultarContenido");
  } else {
    document.querySelector(".containerGoTop").classList.remove("showGoTop");
    document.querySelector(".subir").classList.add("ocultarContenido");
    document.querySelector(".up").classList.add("ocultarContenido");
  }
}

window.addEventListener("scroll", () => {
  let currentHeight = window.scrollY; //parte superior de la pantalla
  let homePositionY = home.scrollHeight = +400;
  if (currentHeight >= homePositionY) {
    document.querySelector(".containerbuttonWPP").classList.add("showButtonWPP");
    document.querySelector(".up").classList.remove("ocultarContenido");
  } else {
    document.querySelector(".containerbuttonWPP").classList.remove("showButtonWPP");
    document.querySelector(".up").classList.add("ocultarContenido");
  }
});

//A partir de esta linea, empieza el codigo para controlar el modal
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".openModal")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelectorAll(".modalContainer")[0];

abrir.addEventListener("click", function (event) {
  event.preventDefault();
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modalClose");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modalClose");
  //con el set timeout creo una funcion para que a 6segundos pasen los estilos que especifico antes.
  setTimeout(function () {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  }, 600);
});
//Con este script hago click en cualquier lado del modal y se cierra
window.addEventListener("click", function (event) {
  if (event.target == modalContainer) {
    modal.classList.toggle("modalClose");

    setTimeout(function () {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 600);
  }
});