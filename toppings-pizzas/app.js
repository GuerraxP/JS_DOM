//para seleccionar ids de HTML
const contenedor = document.getElementById(contenedor);
console.log(contenedor)
const contenedor2 = document.getElementById(contenedor);
console.log(contenedor.innerHTML)
const titulo = document.getElementById(titulo);
console.log(typeof titulo);
const titulo2 = document.getElementById(titulo);
console.log(titulo.innerText);
const titulo3 = document.getElementById(titulo);
console.log(titulo.tagName);

//para seleccionar clases de HTML
const toppings = document.getElementsByClassName(toppings);
console.log(toppings);
const toppings2 = document.getElementsByClassName(toppings);
console.log(toppings[0].id); //se usan los principios de arreglo en JS

//para seleccionar por el nombre de la etiqueta HTML
const mistoppings = document.getElementsByTagName("li");
console.log(mistoppings);

const toppingsfm = document.getElementsByTagNameNS("fondo-marron");
console.log(toppingsfm);

const aceituna = querySelector("#aceituna")
console.log(aceituna);

const aceituna2 = querySelector(".toppings")
console.log(aceituna);

const primerTN = querySelector(".toppings.fondo-naranja")
console.log(primerTN);

const primerTN2 = querySelector("ul li.fondo-naranja")
console.log(primerTN2);

const primerTN3 = querySelector("ul li.:not(fondo-marron)")
console.log(primerTN3);

const toppingsNar = querySelectorAll(".toppings.fondo-naranja");
console.log(toppingsNar);

const primertopping = document.querySelector(".topping")
primertopping.style.backgrounfColor = "blue";
primertopping.style.color = "#6dff00";
primertopping.style.textTransform = "uppercase"

//acceder al texto
console.log("> innerText");
console.log(listaDeToppings.innerText);

console.log("> textContent");
console.log(listaDeToppings.textContent);

console.log("> innerHTML");
console.log(listaDeToppings.innerHTML);

const titulo4 = document.getElementById("titulo")
titulo4.innerText = "Mis toopings favoritos"

const enlace = document.getElementsByTagName("a")
console.log(enlaces[0].removeAttribute("href"))
console.log(enlaces[0].getAttribute("href"))

console.log(enlaces[0].setAttribute("href", "https://www.frecodecamp.org"))

//agregar o modificar clases desde JS
const primerToppings = document.querySelector(".topping")
primerToppings.classList.add("texto-verde")

