/*
    Arrays - Arreglos | Operaciones con arrays
    - Los strings pueden editarse, añadir nuevos elementos y eliminar elementos
*/

'use strict'

// Arrays de prueba 
var lenguajes2021 = ["C++","C#","JS","Go"];

// Añadir un elemento al final de un array | Se usa el metodo push: Que empuja al final un valor dado como parametro
lenguajes2021.push("Python");

// Eliminar el ultimo elemento de un array | Se usa el metodo pop: Quita el ultimo elemento de un array
lenguajes2021.pop();

// Eliminar un elemento en concreto |  Es mas metodico el proceso que solo un metodo, pero buscando el indice del elemento deseado y usando el metodo splice se puede hacer
var indice_a_eliminar = lenguajes2021.indexOf("C++"); // Se busca y guarda el indice del elemento en cuestion

if(indice_a_eliminar > -1){// Si el indice es distinto de -1  o mayor a -1(que es lo que da el metodo indexof si no encuentra coincidencia)
    lenguajes2021.splice(indice_a_eliminar,1);// El metodo splice elimina todos los elementos desde un indice indicado hasta n, es decir, desde el indice que es el primer parametro
    // En este caso solo elimina un indice, porque solo se indica 1 como segundo parametro y se elimina desde el indice tantas veces como se indique como segundoparametro
    // Es decir si el indice es 0, se elimina todos los siguientes elementos tantas veces como sea el segundo parametro (si es 2 se eliminan 2 elementos si es 1 se elimina 1)
}

// Convertir un array a texto separado por comas | Con el metodo join se genera un string a partir del array al que se le aplique el metodo, separando por comas sus elementos
var string = lenguajes2021.join();

console.log(string);// Salida de string resultante

// Salida del array de pruebas
lenguajes2021.forEach(elemento =>{
    console.log(elemento);
});