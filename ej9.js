let frase = prompt("Ingrese una frase:");
let frase2 = "";
for (let index = 0; index < frase.length; index++) {
    frase2 += frase.substring(index,index + 1);
    if(index != frase.length - 1){
        frase2 += " ";
    }
}
alert(frase2);