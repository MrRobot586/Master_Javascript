/*
    Bucles en JS los 3 bucles en 1
    
    - Estructuras de control que repiten una determinada sentencia mientras se cumpla una condicion o un numero determinado de veces
    - Tal y como conoces a los bucles, solo que aplicando las bondades de js
    - For, while y do while
*/

'use strict'

// Bucle For

console.log("Resultado del bucle for:");
for (let i = 0; i < 10; i++){ // Se crea una variable local (con let, esto significa que no existira mas que en este bloque), se inicializa en 0 y se intera hasta llegar a menor que 10
    console.log(i+1); // Se imprime dicha variable sumandole 1, porque inicia desde 0
}

//debugger; // Con esta instruccion se puede ver mediante la consola, la ejecucion del script o programa

// Bucle while

console.log("Resultado del bucle while:");

var year = 2018; // Inicializacion de variable

while(year <= 2077){ // Mientras year sea menor o igual a 2077
    console.log("El año es: " + year); // Imprimir esto
    year++; // Sumarle 1 a year
}

// Bucle Do while

var years = 30; // Se inicializa una variable en 30

do{
    alert("Esto solo se ejecuta cuando la variable years es mayor a 25..."); // Se imprime esto
    years--; // Se le resta 1 a years (comenzando desde 30)

    if(years == 28){ // Break - Para romper bucles
        break; // Corta la ejecucion del bucle cuando years es igual a 28
    }
}while(years > 25); // Hasta llegar a 25 (mientras years sea mayor a 25, cuanudo sea menor se dejara de repetir)

