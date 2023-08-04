class Libro{
    ISBN;
    titulo;
    autor;
    numPaginas;

    constructor(ISBN, titulo, autor, numPaginas){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
}

let ISBN = prompt("Ingrese ISBN");
let titulo = prompt("Ingrese titulo");
let autor = prompt("Ingrese autor");
let numPaginas = prompt("Ingrese numero de paginas");
let libro = new Libro(ISBN, titulo, autor, numPaginas);

console.log(libro);