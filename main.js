/*
    funciones matematicas en JavaScript
        - Existen muchas funciones matematicas para realizar operaciones ademas de las comunes y corrientes
        - Ejemplo: El objeto Math tiene distintas propiedades y metodos que sirven para realizar operaciones como:
            - Sacar numeros random
            - Sacar el valor de PI 
            - Rendondear numeros
*/


'use strict'

window.addEventListener('load',function (){

    console.log(Math.PI);// Muestra el valor de PI (completo)

    console.log(Math.random());// Saca un numero random

    console.log(Math.ceil(Math.random()*100));// Redondea un nuemro generado aleatoriamente 
});
