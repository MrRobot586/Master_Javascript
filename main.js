/*
    Alertas y ventanas en JS

    - Existen algunas funciones en JS que permiten crear alertas para advertir al usuario de algo en el navegador
*/

'use strict'

// Alert - Esta funcion muestra una alerta en el navegador a la que simplemente le puedes dar aceptar

alert("Esta es una alerta normal...");

// Confirm - Esta funcion envia una alerta que bien puedes aceptar o cancelar. Para despues evaluar si el usuario acepto o cancelo

confirm("Ejemplo de una alerta de confirmacion. \n¿Estas seguro de querer continuar?"); // Recordar que con \n se hace un salto de linea en un string 
// Esta funcion por lo general se usa con una condicional para verificar su resultado, devuelve true cuando el usuario acepta y false cuando no.

if(confirm("Esta es una alerta de confirmacion. \n¿Estas seguro de querer continuar?")){ // SI esta funcion es true \\ Si el usuario acepta
    console.log("Aceptaste!!");
}else{ // Sino
    console.log("No aceptaste...");
}

// Prompt - Sirven para pedir datos al usuario, es una alerta que pide que ingreses un dato y luego devuelve ese dato en forma de string (independeintemente del dato)
// Esta recibe 2 parametros el primero es un string (que se mostrara en la alerta) y el segundo es el dato por defecto (en caso de que no se ingrese ningun dato)

var dato = prompt("¿Que edad tienes?", 0);

console.log("La edad es: ", dato , " años..."); // Recordar que tambien se puede imprimir el valor de la variable simplemente poninedolo como parametro de la funcion console.log

// Nota: En total son 3 funciones, todas mandan alertas al navegador y cada una tiene su particularidad