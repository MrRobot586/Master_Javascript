/*
    Arrays - Arreglos | Arrays multidimencionales
    - Un arreglo multidimencional es aquel que contiene 2 o mas arreglos dentro
    - Es decir, dentro de un indice se encuentra un arreglo y asi consecutivamente
*/

'use strict'

// Arrays de prueba 
var lenguajes2021 = ["C++","C#","JS","Go"];
var librerias2021 = ["Angular","Nodejs", "React"];

// Asi se definiria un arreglo bidimencional, pero pueden ponerse mas de 2 arreglos dentro del mismo
var programacion2021 = [lenguajes2021,librerias2021];

// Asi se mostraria por consola un array multidimencional
//console.log(programacion2021);

// Asi se accede a un arreglo multidimencional - en el indice [0] se encutra el arreglo "lenguajes2021" y en el indice [1] de ese arreglo esta el dato "C#"
//console.log(programacion2021[0][1]);

// Asi se puede recorrer un arreglo multidimencional con el metodo foreach
programacion2021.forEach((elemento,index)=>{// Primero se recorre la primera dimencion
    console.log(index, "-----");// Se imprime el index 

    elemento.forEach((i)=>{// y se recorre el array que esta en el elemento en cuestion en el cual se esta iterando
        console.log(i);// Se imprime
    });
});

/* Nota: Con el foreach, se recorre el array principal y dentro se recorren los que estan dentro de ese array. */