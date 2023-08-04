let sum = 0;
let cont = 0;
let num = parseInt(prompt("Ingrese un numero entero. Ingrese 0 para finalizar."));
let max = num;
let min = num;
while(num != 0){
    if(num > max){
        max = num;
    }
    if(num < min){
        min = num;
    }
    sum += num;
    cont++;
    num = parseInt(prompt("Ingrese otro numero entero. Ingrese 0 para finalizar."));
}
if(cont != 0){
    let prom = sum / cont;
}else{
    prom = 0;
}
alert(`El mayor numero ingresado fue: ${max}
El menor numero ingresado fue: ${min}
El promedio es de ${prom}`);
