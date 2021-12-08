/*
    Bloque 1 de ejersicios 

    - Mostrar tabla de multiplicar del numero ingresado por el usuario
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

// Imprimimos una cabecera e incluimos los elementos de la tabla de multiplicar en una lista 
document.write("<h2> La tabla del  " + numero + " es: </h2> \n <ul>");

// Creamos la lista con un bucle y realizamos las operaciones - imprimiendo la tabal de multiplicar
for(let i = 1; i <= 10; i ++){
    document.write("<li>" + numero + " x " + i + " = " + (numero * i) + " </li>");
}

// Cerramos la lista
document.write("</ul>");