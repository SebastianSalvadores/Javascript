let persona = {
    nombre : "Juan",
    edad : 21,
    sexo : 'H',
    peso: 73,
    altura: 1.82
};

let arregloPersona = [];

console.log(persona);

for (const propiedad in persona) {
    arregloPersona.push(persona[propiedad]);
}

console.log(arregloPersona);