/*
    Var Vs Let en JS

    - 
*/

'use strict'

//Ejemplo 1: Usando var se define una variable global cuyo valor cambia cuando se reasigna o se vuelve a declarar la variable
var a = "Valor 1";

console.log(a);// Tiene como salida "Valor 1"

if(true){
    var a = "Valor 2";// Al usar var se redefine la variable con el mismo nombre. Por lo que de este punto en adelante, el valor sera el que se le asigne aqui
    console.log(a);// Tiene como salida "Valor 2"
}

console.log(a);// Tiene como salida "Valor 2"

/* Al usar var para declarar la variable, esta se declara de forma gloval y su valor cambiara independientemente del bloque en el que se use */


//Ejemplo 2: Usando let se define una variable a nivel de bloque. Es decir, esta solo tiene ese valor en ese bloque o ambito
var b = "Valor 3";

console.log(b);// tiene como salida "Valor 3"

if(true){
    let b = "Valor 4";// Al usar let, no se redefine la variable. Sino que se crea una nueva dentro de este bllque
    console.log(b);// Tiene como salida "Valor 4"
}

console.log(b);// Tiene como salida "Valor 3"

