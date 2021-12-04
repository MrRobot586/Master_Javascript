/*
    Condicional de casos (switch) en JS
    
    - En este caso se evalua un cierto valor para comprobar si empata con algun caso espesificado en la propia sentencia
*/

'use strict'

var edad = 100;

var mensaje = ""; // Definimos una variable con una cadena vacia

switch(edad){ //Se evalua una variable y se verifican los casos espesificados debajo
    case 18:
        mensaje = "Acabas de cumplir la mayoria de edad.";
        break;

    case 25:
        mensaje = "Ya eres un adulto.";
        break;
    
    case 40:
        mensaje = "Cricis de los cuarenta."
    
    case 75:
        mensaje = "Eres ya un anciano.";
        break;
    
    default: //en caso de que ninguno se cumpla
        console.log("Tu edad no esta en la lista");
        break;
}

console.log(mensaje);