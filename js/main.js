/*
  Programacion Orientada a Objetos en TypeScript
    Decoradores: Es un patron de diseño que en pocas palabras sirven para decorar una clase, es decir, le implementan nuevos metodos o propiedades
    a la clase que se le aplica. Osea modifica los metadatos de una clase.

    Se declara como una funcion que a su vez devuelve otra que recibe como parametro la clase a la que se aplica el decorador y dentro de la cual
    se define que se hahra con esa clase, ya sea darle un nuevo metodo como es el ejemplo o editar uno ya existente.
    
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador: En este caso este decorador añade un metodo a la clase
function estampar(logo) {
    return function (target) {
        target.prototype.estampado = function () {
            console.log("Camiseta estampada con el logo: " + logo); // Este console log y ademas no devuelve nada (por eso el :void)
            //console.log("Color de la camiseta: " + this.color);// En este caso se toma el valor de la propiedad color y se muestra
        };
    };
}
// Clase que implementa interface
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
    Camiseta = __decorate([
        estampar("Nike") // De esta forma se le aplica un decorador a una clase, no se coloca ";", solo se coloca la linea y ya esta
    ], Camiseta);
    return Camiseta;
}());
var datos = {
    color: "Rojo",
    modelo: "Manga larga",
    marca: "Nike",
    talla: "L",
    precio: 12.5
};
// Clase hija de la clase Camiseta
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
var camisa = new Camiseta(datos);
console.log(camisa.estampado());
