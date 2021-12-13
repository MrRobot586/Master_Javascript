/*
    Funciones | Metodos para busquedas
    - 
*/

'use strict'

var texto = "Este es un texto random";
var texto2 = "Aca continua el texto random, otra vez colocamos la palabra random.";
var busqueda = " --- ";

// Busca la palabra enviada como parametro al metodo y devuelve la posicion en la que se encuentra el primer caracter de la palabra en el string - en caso de no encontrar nada (-1) || Al encontrar la primera coincidencia ya para
busqueda = texto.indexOf("texto");
console.log(busqueda);

// Hace lo mismo que el anterior
busqueda = texto.search("texto");
console.log(busqueda);

// Busca la ultima coincidencia del string
busqueda = texto2.lastIndexOf("random");
console.log(busqueda);

// Puede encontrar varias coincidencias y devolverlas como un objeto o array, con sus posiciones en el string en cuestion
busqueda = texto.match("texto");
// busqueda = texto.match(/texto/g); // Se usa asi para encontrar varias coincidencias
console.log(busqueda);

// Substrae un fragmento de un string, recibe como parametros la posicion en la que comienza la palabra y la longitud de la misma
busqueda = texto.substr(11,5);// 11 es la posicion en la cual inicia la palabra y 5 la longitud (en esta caso la palabra texto)
console.log(busqueda);

// Busca y devuelve el caracter que se encuentre en la posicion enviada como parametro
busqueda = texto2.charAt(55);
console.log(busqueda);

// Metodos de busqueda booleanos

// Devuelve true si el string en cuestion inica con la palabra indicada
busqueda = texto.startsWith("Este");
console.log(busqueda);

// Devuelve true si el string en cuestion termina en la palara o caracter indicado
busqueda = texto.endsWith("random");
console.log(busqueda);

// Busca si existe la palabra en el string (en esta caso texto) - Devuelve true si es asi
busqueda = texto.includes("texto");
console.log(busqueda);

/*

Nota:
    - Cualquier metodo de busqueda, devolvera -1 en caso de que no encuentre una conincidencia
    - Los metodos "Booleanos" devolveran false en caso de no haber coincidencias
    - 
*/

