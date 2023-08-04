let A = [];
let B = [];

for (let index = 0; index < 50; index++) {
    A[index] = Math.random() * 100;
}

console.log(A);

function compararNumeros(a,b){
    if(a > b){
        return 1;
    }
    if(a == b){
        return 0;
    }
    if(a < b){
        return -1;
    }
}

A.sort(compararNumeros);
B = A.slice(0,10);

for (let index = 10; index < 20; index++) {
    B[index] = 0.5;
}

console.log(A);
console.log(B);

