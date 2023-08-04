const limite = parseInt(prompt("Ingrese un valor limite positivo"));
let suma = 0;
let num;
while(suma <= limite){
    num = parseInt(prompt("Ingrese numero"));
    suma += num;
    alert(`La sumatoria es de ${suma}`);
}
alert(`La suma sobrepasó el limite!
Suma = ${suma}
Limite = ${limite}`);