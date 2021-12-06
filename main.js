/*
    Bloque 1 de ejersicios 

    - Hacer un programa que pida 2 numeros y que diga cual es mayor, cual es menor y si son iguales
*/

'use strict'

// Se piden los datos
var n1 = prompt("Ingresa un nuemro y preciona aceptar..."); // Esta funcion tambien furula si no se coloca el valor default
var n2 = prompt("Ingresa otro numero y preciona acpetar!"); // Es decir el segundo parametro

// Recordar convertir los datos a numero, porque al recolectar datos con prompt se devulven como strings
n1 = parseInt(n1);
n2 = parseInt(n2);

// Se comprueba las condiciones
if((n1 && n2) && (n1 != 0 && n2 != 0)){ // Si las variables estan llenas
    if(n1 > n2){ // Si es menor
        alert(n1 + " es mayor que " + n2); //
        // alert(n1, " es mayor que ", n2); // La funcion alerta solo acpeta un parametro por lo que es mejor concatenar que separar por comas los datos
    }else if(n1 < n2){ // Si es mayor
        alert(n1 + " es menor que " + n2);
    }else{ // Si son iguales
        alert("Los numeros que ingresastes son iguales.");
    }
}else{ // Si no estan llenas
    if(n1 == 0 && n2 == 0){
        console.log("Los valores ingresados son 0...");
    }else{
        console.log("Recuerda ingresar datos en las ventanas flotoantes...");
    }
}

// Nota: Recordar aplicar logica, si los valores no existen o no fueron llenados entonces no se puede comprobar la condicion