class Persona {
    nombre;
    edad;
    sexo;
    peso;
    altura;
    
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
}

let persona1 = new Persona("Sebastian", 28, 'H', 90, 1.73);

console.log(persona1);
