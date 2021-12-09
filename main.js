/*
    Bloque 1 de ejersicios 

    - hacer calculadora
    - que verifique los numeros (si son  validos)
    - que muestre en el body, en una alerta y en la consola el resultado
*/

'use strict'

// Variables
var opt = 0;

var n1 = 0;
var n2 = 0;

var resultado = 0;

do{// Selector de opcion para la operacion | Dependiendo de la opcon que seleccione el usuario realiza la operacion correspondiente
    opt = parseInt(prompt("¿Que operacion realizaras? \n - 1 Suma\n - 2 Resta\n - 3 Multiplicacion\n - 4 Divicion"));

    if(opt == 0 || opt > 4 || isNaN(opt)){
        alert("Opcion desconocida o invalida");
    }
}while(opt == 0 || opt > 4 ||isNaN(opt));

// COdigo reciclado* - Para seleccionar los operadores
do{

    n1 = prompt("Digite un numero: ",0);
    n2 = prompt("Digite otro numero: ",0);

    if(isNaN(n1) || isNaN(n2)){
        alert("Esos no son numeros!!");
    }else{
        
        if(n1 < 0 || n2 < 0){
            alert("Los numeros son negativos!!");
        }else{
            n1 = parseInt(n1);
            n2 = parseInt(n2);
        }
    }
}while((isNaN(n1) || isNaN(n2)) || (n1 < 0 || n2 < 0));

// Segun la opcion realiza la operacion y guarda el resultado en una variable
switch(opt){
    
    case 1:// Suma
        resultado = n1 + n2;
        break;
    
    case 2:// Resta
        resultado = n1 - n2;
        break;
    
    case 3:// Multiplicacion
        resultado = n1 * n2;
        break;
    
    case 4:// Divicion
        resultado = n1 / n2;
        break;
}

// Escribe el resultado en el body
document.write("<h3> La respuesta a tu opracion es: " + resultado +"</h3>");

