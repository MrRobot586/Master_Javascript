/*
    Funciones | Parametros rest y spread
    - Rest: Los parametros rest se definen con "..." delante del nombre del mismo
      Estos pueden recibir, multiples valores y los almacenan en un array con el nombre del parametro.
    - Spread: Se puede enviar un array como parametro spreed usando "..." antes del nombre del arrray que se enviara como parametro
      Estos parametros, al contrario de los rest, se envian no se definen para recibirlos. Es decir, si una funcion recibe 3 parametros,
      en vez de esos se puede enviar un array de 3 valores, como parametro spread
*/

'use strict'

// Parametros rest:

function lista_de_frutas(fruta1,fruta2,...resto_de_las_frutas){// El parametro "resto_de_las_frutas" es un parametro rest
    // Los parametros fruta1 y 2: Su valor se puede obtener facilmente si es que son espesificados
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);

    // Para los valores en el array generado por el parametro "resto_de_las_frutas", se pueden recorrer usando un for
    for(let i = 0; i < resto_de_las_frutas.length; i++){// con el metodo ".lenght" se obtiene la longitud de un array o cadena de caracteres (ayuda para definir el final del bucle)
        console.log("Fruta " + (i+3) + ":" + resto_de_las_frutas[i]);// Se imprime el parametro espesificando la posicion del array con el contador del bucle "i"
        // Esto imprimira el valor de el valor almacenado en esa posicion de memoria en el array
    }

    // console.log(resto_de_las_frutas); // ASi se podria imprimir el array pero esto no daria cada uno de los valores 
}

// Invocacion de la funcion
lista_de_frutas("Cambur","Piña","verga","vurga","Varga");

console.log("***************************"); // Separador

// Parametros spread:

var frutas = ["Piña","Banana","Manzana"];// Este array contiene 3 frutas

function lista_de_frutas2(fruta1,fruta2,fruta3){// Esta funcion recibe 3 parametros
    console.log("Fruta 1:" + fruta1);
    console.log("Fruta 2:" +fruta2);
    console.log("Fruta 3:" +fruta3);
}

lista_de_frutas2(...frutas);// Si enviamos el array "frutas" como parametro spreed, cada valor de este se asignara a los parametros de la funcion consecuentemente (es decir, uno por uno desde el primero)

/* 
La diferencia entre estos tipos de parametros, es que:
    1. Los rest se definen en la funcion y los spread se envian al llamarla
    2. Los rest reunen varios parametros en 1 array y los spread expanden un array en varios parametros definidos en la funcion
*/