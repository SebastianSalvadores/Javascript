class Circulo{
    radio;
    area;
    perimetro;

    constructor(radio){
        this.radio = radio;
        this.area = this.calcularArea(radio);
        this.perimetro = this.calcularPerimetro(radio);
    }

    calcularArea(radio){
        return Math.PI * (radio**2);
    }

    calcularPerimetro(radio){
        return 2 * Math.PI * radio;
    }
}

let radio = prompt("Ingrese el radio de un circulo");
const circulo = new Circulo(radio);

console.log(circulo);