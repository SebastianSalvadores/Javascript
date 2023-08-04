/* Primer intento, sin usar funcion flecha.

let frase = prompt("Ingrese una frase o palabra");
let fraseR = "";
let revertir = (frase, index) => frase.substring(index - 1, index);
for (let index = frase.length; index >= 0; index--) {
    fraseR += revertir(frase, index);
}

alert(fraseR);
*/


let frase = prompt("Ingrese una frase o palabra");

//convierto el string a un array con split, uso el metodo reverse de los arrays para dar vuelta el array, lo paso a string, y con replaceAll borro todas las comas del string.
let revertir = (frase) => frase.split("").reverse().toString().replaceAll(",",""); 

let fraseR = revertir(frase);
alert(fraseR);