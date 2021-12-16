/*
    Arrays - Arreglos | Ordenar un array
    - Metodos para ordenar un array
    - Sort: Ordena de mayor a menor o de forma alfabetica un array
    - Reverse: Invierte el orden de un array
*/

'use strict'

// Arrays de prueba
var numeros = ["5","8","6","4"];
var letras = ["C","G","H","A"];

// Utilizando el metodo sort() - Se ordenan los arrays, claro este metodo si afecta al array directamente. No es necesario almacenar su resultado en una variable
numeros.sort();
letras.sort();

// Salida de prueba
console.log(numeros);
console.log(letras);

// Con el metodo reverse se invierte el orden original del array
numeros.reverse();

// Salida de prueba
console.log(numeros);
