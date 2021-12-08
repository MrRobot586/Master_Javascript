/*
    Bloque 1 de ejersicios 

    - Programa que muestre todos los divisores de un nuemro introducido en un prompt
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
        }else{
           numero = parseInt(numero);
        }
    }
}while(isNaN(numero) || numero <= 0);

// Un numero es divisor de otro, es aquel que al dividirse entre el numero en cuestion su residuo da 0.
for (let i = 1; i <= numero; i++){
    if(numero % i == 0){// De esta forma filtramos a los numeros que son divisibles entre la variable "numero"
        console.log("El numero: " + i + " es divisible entre " + numero);// Hacemos un console.log para la salida
    }
}