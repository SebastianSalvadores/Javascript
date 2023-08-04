let boton = document.getElementById("boton");
let perimetro = document.getElementById("perimetro");
let radio;
let respuesta = document.getElementById("respuesta");

boton.onclick = function (){
    radio = calcularRadio(perimetro.value);
    respuesta.innerHTML = "El radio del circulo es: " + radio;
}

perimetro.onkeyup = function (){
    radio = calcularRadio(perimetro.value);
    respuesta.innerHTML = "El radio del circulo es: " + radio;
}


function calcularRadio(perimetro){
    return perimetro / (2 * Math.PI);
}