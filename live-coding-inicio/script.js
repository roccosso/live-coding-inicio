// Vamos a construir la interactividad paso a paso durante la clase.

console.log("Introduccion a JavaScript");

console.log("Segundo Mensaje");

const botonMostrarSaludo = document.querySelector("#boton-saludo");
const mensajeBienvenida = document.querySelector("#mensaje");
const botonTema = document.querySelector("#boton-tema");

const miNombre = "Rocco";

console.log(botonMostrarSaludo);

botonMostrarSaludo.addEventListener("click", function(){
    console.log("Hiciste Click");
    mensajeBienvenida.textContent = "Hola " + miNombre;
});

botonTema.addEventListener("click", function(){

(document.body.classList.toggle("tema-oscuro"));
});