/*
  Programacion Orientada a Objetos en TypeScript
    Modulos internos-externos: Sirven para organizar las funcionalidades de una aplicacion.
    Puede ser en modulos internos en un mismo fichero o externos en varios otros que luego se importan.
    
    Un modulo es un conjunto de funcionalidades organizadas dentro de un fichero que luego se puede importar.
    Un modulo se define con la palabra module.

*/
'use strict';
// De esta forma se crea un modulo
var tienda;
(function (tienda) {
    // En este caso se exportan las clases para poder luego importarlas
    var informatica = /** @class */ (function () {
        function informatica() {
        }
        informatica.prototype.getName = function () {
            return this.nombre;
        };
        return informatica;
    }());
    tienda.informatica = informatica;
    var ropa = /** @class */ (function () {
        function ropa() {
        }
        ropa.prototype.getName = function () {
            return this.nombre;
        };
        return ropa;
    }());
    tienda.ropa = ropa;
})(tienda || (tienda = {}));
// Posterior a esto, cargamos o importamos el modulo, pero espesificamente la clase de informatica
var Iformatica = tienda.informatica; // Es decir importamos la clase informatica del modulo tienda
var tienda_informatica = new Iformatica(); // Ahora es posible usar esa clase e instanciarla, usando la referencia que se declaro en el import
console.log(tienda_informatica);
