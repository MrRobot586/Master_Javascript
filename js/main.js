/*
  Programacion Orientada a Objetos en TypeScript
    Visibilidad de propiedades y metodos: Los metodos y propiedades pueden tener una visivilidad en el resto del codigo de la aplicacion.
    La visivilidad de una propiedad o metodo puede ser:

      Public: Esta propiedad sera accesible desde cualquier lugar en el codigo de la aplicacion.
      Private: Esta propiedad sera accesible solo desde la clase que la contenga y desde una clase que herede las propiedades de esa clase.
      Protected: Esta propiedad sera accesible solo desde la clase que la contenga.

      Con "accesible desde la clase", se refiere a que solo se puede cambiar su valor desde la clase. Osea si se crea un objeto y este tiene
      definido en su clase un metodo que modifica una propiedad protected o private, entonces esta se podra modificar solo a traves de ese metodo.
    
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
    Camiseta.prototype.setPrecio = function (newprice) {
        this.precio = newprice;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sudadera;
}(Camiseta));
var datos = {
    color: "Rojo",
    modelo: "Manga larga",
    marca: "Nike",
    talla: "L",
    precio: 12.5
};
// Instanciar un nuevo objeto camisa:
var camisa = new Camiseta(datos);
camisa.setPrecio(6);
console.log(camisa);
var sudadera = new Sudadera(datos);
console.log(sudadera);
