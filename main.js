/*
    Bloque 1 de ejersicios 

    - Hacer un programa que muestre todos los numeros que hay entre 2 numeros que indique el usuario
*/

'use strict'
// Variables
var n1 = 0;
var n2 = 0;

// Do while para obtener datos filtrando por si son negativos, si no son numeros o si son iguales
do{

    // Obtencion de valores
    n1 = prompt("Digite un numero: ",0);
    n2 = prompt("Digite otro numero: ",0);

    // Compobaciones
    if(isNaN(n1) || isNaN(n2)){// Si no son nuemros || IsNaN comprueba si es que son numeros independientemente del tipo de dato
        alert("Esos no son numeros!!");
    }else{//Si son numeros
        
        if(n1 < 0 || n2 < 0){// Si son negativos
            alert("Los numeros son negativos!!");
        }else if(n1 == n2){// Si son iguales
            alert("Los numeros son iguales!!");
        }else{// Si no a las anteriores condiciones
            n1 = parseInt(n1);// Convertir los valores en numeros para cerrar el bucle
            n2 = parseInt(n2);
        }
    }
}while((isNaN(n1) || isNaN(n2)) || (n1 < 0 || n2 < 0) || (n1 == n2));

// Si n1 es mayor que n2
if(n1 > n2){// Mostrar desde n1 hasta n2 restando
    document.write("<h2> De " + n1 + " a " + n2 + " hay:</h2> ");
    for(let i = n1; i >= n2; i--){
        document.write( i + "<br>");
    }
}
// Si n2 es mayor
if(n2 > n1){// Mostrar desde n1 hasta n2 sumando
    document.write("<h2> De " + n1 + " a " + n2 + " hay:</h2> ");// Escribimos un h2 con el document.write
    for(let i = n1; i <= n2; i++){
        document.write( i + "<br>");// Usamos el document write para escribir los numeros
    }
}