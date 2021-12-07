/*
    Bloque 1 de ejersicios 

    - Hacer un programa que muestre todos los numeros impares que hay entre 2 numeros que indique el usuario
*/

'use strict'
// reciclamos el codigo anterior, el cual hara exactamente lo mismo, con una excepcion 
var n1 = 3;
var n2 = 0;
do{

    n1 = prompt("Digite un numero: ",0);
    n2 = prompt("Digite otro numero: ",0);

    if(isNaN(n1) || isNaN(n2)){
        alert("Esos no son numeros!!");
    }else{
        
        if(n1 < 0 || n2 < 0){
            alert("Los numeros son negativos!!");
        }else if(n1 == n2){
            alert("Los numeros son iguales!!");
        }else{
            n1 = parseInt(n1);
            n2 = parseInt(n2);
        }
    }
}while((isNaN(n1) || isNaN(n2)) || (n1 < 0 || n2 < 0) || (n1 == n2));

/* Los numeros pares, son cuyo reciduo al dividir por 2 es 0 entonces, los impares son lo contrario. */

if(n1 > n2){
    document.write("<h2> De " + n1 + " a " + n2 + " hay:</h2> ");
    for(let i = n1; i >= n2; i--){
        
        if(i % 2 != 0){// Si es que la divicion de i (la iteracion) entre 2 es diferente de 0
            document.write( i + "<br>");// Entonces es par y se imprime
        }
    
    }
}

if(n2 > n1){
    document.write("<h2> De " + n1 + " a " + n2 + " hay:</h2> ");
    for(let i = n1; i <= n2; i++){

        if(i % 2 != 0){// Basicamente lo mismo aca
            document.write( i + "<br>");
        }
        
    }
}