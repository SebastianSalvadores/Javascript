let num1 = parseInt(prompt("Ingrese el primer numero"));
let operacion;

do {
    operacion = prompt(`Ingrese letra de la operacion a realizar:
    'S' o 's' para Sumar
    'R' o 'r' para Restar
    'M' o 'm' para Multiplicar
    'D' o 'd' para Dividir`).toUpperCase();
} while (operacion != "S" && operacion != "R" && operacion != "M" && operacion != "D");

let num2 = parseInt(prompt("Ingrese el segundo numero"));
let resultado;

switch (operacion) {
    case 'S':
        resultado = num1 + num2;
        break;
    case 'R':
        resultado = num1 - num2;
        break;
    case 'M':
        resultado = num1 * num2;
        break;
    case 'D':
        resultado = num1 / num2;
        break;
}

alert(`El resultado es ${resultado}`);