/*
    Bloque 1 de ejersicios 

    - Hacer un programa que pida 2 numeros y que diga cual es mayor, cual es menor y si son iguales
    - plus: Verificar si los numeros son realmente numeros y sino pedir nuevamente los datos
*/

'use strict'

// El problema de los datos incorrectos, se resuelve con un do while
do{
    // Se piden los datos
    var n1 = prompt("Ingresa un nuemro y preciona aceptar..."); // Esta funcion tambien furula si no se coloca el valor default
    var n2 = prompt("Ingresa otro numero y preciona acpetar!"); // Es decir el segundo parametro

    if(n1 != '' && n2 != ''){ // Si: n1 y n2 son distintas de cadena vacia
        if(isNaN(n1) && isNaN(n2)){// Si: n1 y n2 no son numeros | La funcion IsNaN sirve para ver si un valor de una variable es o no un numero (si es devuelve false y sino true)
            alert("Los datos ingresados, no son numeros.");
        }else{
            // Se convierten a numeros las variables
            n1 = parseInt(n1);
            n2 = parseInt(n2);
            
            // Se comprueba las condiciones
            if(n1 > 0 && n2 > 0){ // Si las variables estan llenas
                if(n1 > n2){ // Si es menor
                    alert(n1 + " es mayor que " + n2); //
                    // alert(n1, " es mayor que ", n2); // La funcion alerta solo acpeta un parametro por lo que es mejor concatenar que separar por comas los datos
                }else if(n1 < n2){ // Si es mayor
                    alert(n1 + " es menor que " + n2);
                }else{ // Si son iguales
                    alert("Los numeros que ingresastes son iguales.");
                }
            }else{ // si n1 y n2 son menores que 0
                if(n1 == 0 ||  n2 == 0){ // Si son iguales a 0
                    alert("Algunos valores ingresados son 0...");
                }

                if(n1 < 0 || n2 < 0){ // Si son negativos, menores que 0
                    alert("Algunos datos ingresados son menores que 0... Osea negativos.");
                }
            }
        }

    }else{ // Si son cadenas vacias (variables sin valor)
        alert("Por favor digita los datos que se piden.");
    }

}while((n1 == '' || n2 == '') || isNaN(n1) && isNaN(n2) || (n1 <= 0 || n2 <= 0));// Mientras los datos recibidos no sean numeros o una cadena vacia, este bucle se repetira

// Nota: Se comprueban todas las posibilidades y se da resultado segun sea el caso