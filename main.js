/*
    Condicionales (if) en JS
    
    Si una condicion sucede se ejecuta un bloque de codigo

    - Creo que ya sabes como funcionan los condicionales
*/

//Nota: Basicamente el condicional if es tal como ya lo conoces en otros lenguajes de programacion


'use strict'

var edad1 = 30;
var edad2 = 12;

// Ejemplo 1:

if(edad1 > edad2){// Como edad1 es mayor que edad2 entonces se ejecutara esto
    console.log("Edad1 es mayor que edad2!!");
}else{// Sino esto
    console.log("Edad1 es menor que edad2!!");
}

// Ejemplo 2:

var edad = 18;
var nombre = "Diego Oropeza";

/*

Operadores relacionales:


>  - Mayor que
<  - Menor
<= - Menor o igual
>= - Mayor o igual
== - Igual que
!= - Distinto de

*/



if(edad >= 18){ // Si edad >= a 18
    console.log(nombre +" tiene "+ edad +" años, es mayor de edad.");

    if(edad <= 33){
        console.log("Todavia eres millenial.");
    }else if(edad >= 70){
        console.log("Eres anciano.");
    }else{
        console.log("Ya no eres millenial.");
    }

}else{// Sino
    console.log(nombre +" tiene "+ edad +" años, es menor de edad.") ;
}

// Nota: Aca se denotan los codicionales dobles, anidados y los condicionales "elseif"