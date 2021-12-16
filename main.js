/*
    Arrays - Arreglos | Recorrer arrays con el for in
    - Con el metodo for in se puede recorrer un array de forma mas facil, es casi igual que foreach con la excepcion de que es una funcion
*/

'use strict'

// Arrays de prueba
var numeros = ["5","8","6","4"];
var letras = ["C","G","H","A"];

// Se define como un for normal, pero dentro se define una variable que se usara de iterador seguido de la palabra in y el array a recorrer
for(let letra in letras){// Se define letra como iterador y letras es el array que se usara
    console.log(letras[letra]);// Para usar el valor del indice, se usa la variable que se declaro en la definicion de for, en este caso letra
}