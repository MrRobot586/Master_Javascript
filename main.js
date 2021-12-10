/*
    Funciones: Conjunto o bloque de instrucciones que se puede reutilizar mas de una vez
    - Se declaran usando la palabra function seguida del nombre de la funcion, parentecis y llaves.
    - Una funcion puede devolver un valor o no
    - Si se hace un console.log() de una funcion se imprimira tanto lo que esta imprima como lo que devuelva
    - si se ejecuta una funcion el valor que devuelve no se imprimira
*/

'use strict'

// Declaracion de una funcion
function calculadora(){

    // Codigo de la funcion
    console.log("Hola, esta es una instruccion dentro de una funcion.");

    // Valor devuelto por la funcion
    return "Hola, este es un valor devuelto por una funcion.";
}

// Invocacion de la funcion
calculadora();

// Imprecion de la funcion 
console.log(calculadora());