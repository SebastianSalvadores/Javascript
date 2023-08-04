let parrafo = document.getElementById("parrafo").innerHTML;

let arreglo = parrafo.split(" ");
let i = 0;

for (const palabra of arreglo) {
    if(palabra.length > 8){
        let resaltar = "<span class=resaltado>" + palabra + "</span>";
        arreglo[i] = resaltar;
    }
    i++;
}

parrafo = arreglo.join(" ");
document.getElementById("parrafo").innerHTML = parrafo;

console.log(parrafo);