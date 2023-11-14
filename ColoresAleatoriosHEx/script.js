const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHex() {
    let digitos = "0123456789ABCDEF"
    let colorHex = "#"
    
    for (let i = 0; i < 6; i++) {
        let indAlea = Math.floor(Math.random() * 16);
        colorHex += digitos[indAlea];
    }
    return colorHex;
}

boton.addEventListener("click", function () {
    let colorAlea = generarColorHex();
    color.textContent = colorAlea;
    document.body.style.backgroundColor = colorAlea;
});