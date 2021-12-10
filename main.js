/*
    Funciones | Parametros
    - Los parametros permiten pasar valores para las operaciones que se realizan en una funcion
        ejemplo: los operadores para una suma
    - Los parametros de una funcion se declaran en la definicion de la misma y se pueden dar a la hora de invocarla
    - Estos se usaran para las operaciones de la funcion    
*/

'use strict'

// Esta funcion usa los parametros n1 y n2 (que son variables) para ejecutar distitnas operaciones
function calculadora(n1, n2){
    console.log("Suma: " +  (n1 + n2));
    console.log("Resta: " +  (n1 - n2));
    console.log("Multiplicacion: " +  (n1 * n2));
    console.log("Divicion: " +  (n1 / n2));
    console.log("------------------------------");
}

calculadora(1,4); // Los valores dados como parametros pueden ser variables lo que hace dinamica la ejecucion de la funcion


// Ejersicio pequeño de practica

// Esta funcion devuelve un string con la multilpicacion de "a" por "b"
function prod_table(a,b){
    return (a + " x " + b + " = " + (a * b));
}

// Escribimos una cabecera
document.write("<h2> Tablas de multiplicar con funciones: </h2>");

// Con un for realizamos las tablas
for(let i = 1; i <= 10; i++){
    document.write("<h3>Tabla del " + i + "</h3>"); // Escribimos una cabecera 
    for(let e = 1; e <= 10; e++){
        document.write(prod_table(i,e) + "<br>");// Escribimos el resultado de la funcion seguido de un salto de linea
    }
}

