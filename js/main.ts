/*
  Programacion Orientada a Objetos en TypeScript
    Modulos internos-externos: Sirven para organizar las funcionalidades de una aplicacion.
	Puede ser en modulos internos en un mismo fichero o externos en varios otros que luego se importan.
	
	Un modulo es un conjunto de funcionalidades organizadas dentro de un fichero que luego se puede importar.
	Un modulo se define con la palabra module.

*/
'use strict'

// De esta forma se crea un modulo
module tienda {// La palabra reservada "module" y el nombre, dentro de las llaves se declaran las cosas dentro del modulo
	// En este caso se exportan las clases para poder luego importarlas
	export class informatica{
		private nombre: string;
		public getName(){
			return this.nombre;
		}
	}

	export class ropa{
		private nombre: string;
		public getName(){
			return this.nombre;
		}
	}

}

// Posterior a esto, cargamos o importamos el modulo, pero espesificamente la clase de informatica
import Iformatica = tienda.informatica;// Es decir importamos la clase informatica del modulo tienda

var tienda_informatica = new Iformatica();// Ahora es posible usar esa clase e instanciarla, usando la referencia que se declaro en el import

console.log(tienda_informatica);