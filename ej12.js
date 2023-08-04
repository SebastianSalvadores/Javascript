let numero = 10;
let cadena = "hola";
let flag = true;
let objeto = {ciudad: "Buenos Aires",
pais: "Argentina"};

let tipoDe = argumento => typeof argumento;

alert(`numero es un: ${tipoDe(numero)}
cadena es un: ${tipoDe(cadena)}
flag es un: ${tipoDe(flag)}
objeto es un: ${tipoDe(objeto)}.`);