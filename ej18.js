let valores = [true, 5, false, "hola", "adios", 2];
let maxLong = "";
let numeros = [];
let booleanos = [];


for (const aux of valores) {
    if(typeof aux == "number"){
        numeros.push(aux);
    }
    if(typeof aux == "string"){
        if(aux.length > maxLong.length){
            maxLong = aux;
        }
    }
    if(typeof aux == "boolean"){
        booleanos.push(aux);
    }
}
console.log(`El texto de mayor longitud es: ${maxLong}`);

let sumar = (a,b) => a + b;
let restar = (a,b) => a - b;
let multiplicar = (a,b) => a * b;
let dividir = (a,b) => a / b;
let potenciar = (a,b) => a ** b;

console.log(`Los resultados de las cinco operaciones con ${numeros[0]} y ${numeros[1]} son: 
Suma: ${sumar(numeros[0], numeros[1])}
Resta: ${restar(numeros[0], numeros[1])}
Multiplicacion: ${multiplicar(numeros[0], numeros[1])}
Division: ${dividir(numeros[0], numeros[1])}
Potencia: ${potenciar(numeros[0], numeros[1])}`);

console.log(booleanos[0] || booleanos[1]);
console.log(booleanos[0] && booleanos[1]);