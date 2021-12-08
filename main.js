/*
    Bloque 1 de ejersicios 

    - Hacer un programa que diga si un numero es par o impar
        1. Ventana prompt
        2. comprobar si un numero es valido
*/

'use strict'

var numero = 0;

// Codigo reciclado del ejersicio anterior - para la logica al conseguir los datos
do{

    numero = prompt("Digite un numero: ")

    if(isNaN(numero)){
        alert("Ese no es un numero!!");
    }else{
        
        if(numero < 0){
            alert("Ese numero es negativo!!");
        }else if(numero == 0){
            alert("El numero no puede ser 0!!");
        }else{
           numero = parseInt(numero);
        }
    }

}while(isNaN(numero) || numero <= 0);

// Un numero es par cuando su reciduo al dividirlo entre 2 es 0, es impar en el caso contrario
if(numero % 2 == 0){// Numero par
    console.log("El numero " + numero + " es par!!");
}else{// Numero impar
    console.log("El numero " + numero + " es impar!!");
}