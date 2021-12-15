/*
    Arrays - Arreglos | Tecnicas avanzadas
     
*/

'use strict'

var array = ["Dato1","Dato2","Dato3",true,52];

// Ver cual es la longitud de un array
console.log(array.length);// Muestra cuantos elementos hay en un array

// Mostrar el valor de una posicion en un erray
console.log(array[0]); // Muestra lo que hay en la primera posicion

// Mostrar todos los elementos de un array
// Forma 1: Imprimiendo directamente en el body con un for
document.write("<h3>Elementos de un array 1: </h3>");
document.write("<lu>");

for(let i = 0; i < array.length; i++){
    document.write("<li>"+ array[i] +"</li>");
}

document.write("</lu>");

// Forma 2: Utilizando una plantilla de texto con un for
document.write("<h3>Elementos de un array 2: </h3>");// Texto para adornar | Y diferenciar
var lista = `<lu>\n`;// Se le añade un UL para crear la lista al principio de la plantilla

for(let i = 0; i < array.length; i++){// Con un for se va iterando en cada uno de los elementos del array
    lista += `\n<li>${array[i]}</li>`;// Se le concatena la informacion de los elementos dentro de un LI cada uno
}

lista += `\n</lu>`;// Por ultimo se cierra la lista

document.write(lista);// Se imprime la variable que contiene la plantilla
