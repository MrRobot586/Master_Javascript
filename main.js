/*
    Arrays - Arreglos | Convertir un string en un array
    - Convertir una cadena de texto que tenga comas, algun separador o delimitador entre palabras
*/

'use strict'

// String de prueba
var lenguajes2021 = "C++, C#, JS, Go";// Este es un string inicial: Notar que cada palabra se separa por comas

console.log(lenguajes2021);// Salida de prueba

// Se iguala una nueva variable a el resultado de el array aplicando el metodo split y enviando como parametro el separador de los que divide los elemtos
var string_array = lenguajes2021.split(", ");// Recordar que un metodo no cambia el contenido de una variable

// Recoremos el nuevo array con un foreach para probar que funciono el metodo
string_array.forEach(element => {
    console.log(element);
});