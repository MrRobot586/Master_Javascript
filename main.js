/*
    Bloque 1 de ejersicios 

    - Mostrar tabla de multiplicar del numero ingresado por el usuario
        + Hacer lo mismo para todas las tablas de multiplicar
*/

'use strict'

/* Anidando 2 bucles, recorremos primero 1 y en esa iteracion se recorre el que esta dentro de esta forma 
imprimimos las tablas de multiplicar, usando los iteradores para sacar los calculos.

ejemplo: el primer bucle pasa por 1 en esa iteracion el bucle de adentro imprime la tabla del uno usando el contador
del bucle anterior para multiplicarlo por el suyo.

*/
for(let i = 1; i <= 10; i ++){
    document.write("<h2> La tabla del  " + i + " es: </h2> \n <ul>");

    for(let c = 1; c <= 10; c ++){
        document.write("<li>" + i + " x " + c + " = " + (i * c) + " </li>");
    }

    document.write("</ul>");
}