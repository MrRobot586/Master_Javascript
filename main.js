/*
    Arrays - Arreglos | Recorrer arrays con for y foreach
    - Con el metodo for each se pueden recorrer arreglos de forma mas facil y con menos codigo
    - Funcionan con un callback, que puede definirse con una funcion flecha o una funcion anonima
*/

'use strict'

// Array de prueba
var lenguajes2021 = ["C++","C#","JS","Go"];

// Titulo para la lista
document.write("<h3>Lenguajes para el 2021:</h3>");

/*

Con el metodo foreach se recorre el array haciendo uso de una funcion de flecha
en la cual se indicara que hacer con los datos del array, en este caso imprimir el indice y el contenido de este en el body

*/

// El metodo se aplica sobre la variable que contiene el array
lenguajes2021.forEach((elemeto, index, data)=>{// En un callback, definido con una funcion de flecha se definen 3 parametros de los cuales solo "elemento" es obligatorio, index y data son opcionales
                    // Elemento es en donde se almacena el contenido del indice que se recorre, index es donde se almacena el indice en el que va iterando y data es el array como tal 
    document.write(index + " - " + elemeto + "<br>");// Se escribe en el body, el indice del array y el contenido de tal indice
    // console.log(data); // Se escribe por consola el array completo en cada iteracion (Es solo para demostrar)
});

/*

Nota: Los parametros de la funcion flecha pueden tener cualquier nombre, su definicion es lo que importa

*/