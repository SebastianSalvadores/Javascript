let frase = prompt("Ingrese una frase");
let array = frase.split(" ");
let resultado = "";

for (const palabra of array) {
    if(palabra.length > resultado.length){
        maxLong = resultado.length;
        resultado = palabra;
    }
}

alert(`La palabra mas larga es: ${resultado}`);