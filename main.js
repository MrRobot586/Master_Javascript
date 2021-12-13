/*
    Funciones | Funciones de flecha
    - Son funciones de callback escritas de forma mas facil y rapida
*/

'use strict'

/*

Una funcion de flecha es una funcion de callback, solo que escrita de una forma mas simple y facil.
Es una manera mas entendible y rapida de definir una funcion callback, o una funcion anonima.

*/

// Codigo reciclado del ejersicio anterior
function sumame(n1, n2, mostrar, mostrar_body){
    var suma = n1 + n2;

    mostrar(suma);
    document.write(mostrar_body(suma));

    return suma;
}

sumame(5, 5,(suma) =>{// Se quita la palabra funcion al principio de los parentecis, para reemplazarla por una flecha al final de estos
    console.log("La suma dio un total de: ", suma);
}, suma =>{// Tambien se puede poner el parametro seguido de la flecha sin mas... Asi de simple
    return ("<h3>El resultado de la suma es: " + suma + "</h3>");
});

// Nota: Si la funcion de callback tiene mas de un parametro, si deben usarse los paretecis
