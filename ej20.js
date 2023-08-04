let matriz = [[3], [6], [9], [12], [15]];
let arreglo = matriz.flat();
arreglo.splice(0,1);
arreglo[arreglo.length] = 18;
console.log(arreglo);