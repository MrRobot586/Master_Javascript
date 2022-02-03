/*
  Programacion Orientada a Objetos en TypeScript
    Herencia: Es un cocepto en el cual una clase hija puede heredar propiedades y metodos de una clase madre.
    Es decir, se crea una clase a partir de otra, y la clase resultante hereda de esa otra clase sus propiedades  y atributos,
    con lo cual esta nueva clase seria una extencion o una version alterna de la clase anterior, tenidno claro sus atributos y
    metodos propios tambien.

    En conclusion: Se hace una extencion de una clase, creando una nueva con las propiedades de la anterior y añadiendo nuevas.

    Para heredar en una clase hija las propiedades de una madre se crea una nueva clase, pero se usa la palabra "extends" seguido del
    nombre de la clase madre y llaves detro de las cuales se colocan las nuevas caracteristicas de esa nueva clase. Ejemplo:
      
      class Sudadera extends Camiseta{
        public prop:type;
        public metodo(){
          ...
        };
      }
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// De esta forma se hereda de una clase madre las propiedades y metodos que esta posea:
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (val) {
        this.capucha = val;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
// Instanciar un nuevo objeto sudadera:
var camisa = new Sudadera(datos);
// Usamos uno de los meotodos que se crearon en la clase al heredar las propiedades de camisa y que ahora posee el objeto creado
camisa.setCapucha(true);
console.log(camisa.getCapucha()); // Imprimimos getCapucha para ver su valor
// Nota: En este caso la clase hija es una variacion de una camisa, una sudadera que tiene una capucha
