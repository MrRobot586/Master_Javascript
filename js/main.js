/*
  Programacion Orientada a Objetos en TypeScript
    Interfaces: Se puede definir un modelo para una clase espesifica, esto con el fin de ser estricto con las clases que se usan
    para la creacion de objetos. Una interfaz, define los metodos y propiedades obligatorias que deben existir en una clase.

    Estas interfaces se pueden aplicar a una clase.
    Conclusion: Es como una clase de una clase, reglas a cumplir para crear una clase que se pueden o no implementar.
*/
// Para implementar una interfaz a una camiseta, se coloca la palabra "implements" luego del nombre de la clase, seguido del nombre de la interface
var Camiseta = /** @class */ (function () {
    function Camiseta(data) {
        this.color = data.color;
        this.modelo = data.modelo;
        this.marca = data.marca;
        this.talla = data.talla;
        if (!isNaN(data.precio)) {
            this.precio = data.precio;
        }
        else {
            this.precio = 0;
        }
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var datos = {
    color: "Rojo",
    modelo: "Manga larga",
    marca: "Nike",
    talla: "L",
    precio: 12.5
};
// Instanciar un nuevo objeto camiseta:
var camisa = new Camiseta(datos);
console.log(camisa);
