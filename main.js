/*
    Funciones | Funciones anonimas y callbacks
    - Es una funcion que no tiene nombre
    - Se pueden enviar como parametros a otras funciones
    - Se pueden definir y asignarseles a una variable
*/

'use strict'

// Asi se define una funcion anonima (Incluso se pueden poner parametros, que es casi obligatrio)
var pelicula = function (nombre){
    return "la pelicula es: " + nombre;
}

/*

Una funcion anonima no tiene nombre, por tanto se le puede asignar a una variable para que esta sirva de referencia a ella.
Sin embargo su verdadera funcionalidad esta en poder mandarlas como parametro a otras funciones y asi abstraer gran parte de la logica
de un bloque de codigo en concreto.

*/

// Esta funcion, recibe 4 parametros y usa 2 de ellos como funciones, enviadoles el resultado de la suma de los primeros 2 parametros
function sumame(n1, n2, mostrar, mostrar_body){
    var suma = n1 + n2;

    // Aca se invocan las funciones que se pasaran como parametros con sus nombres respectivos
    mostrar(suma);// Esto simplemente ejecutara la funcion
    document.write(mostrar_body(suma));// Esto imprimira en el body el return de la funcion

    return suma;
}

// Invocacion de la funcion sumame:
sumame(5, 5, function (suma){// Se indican los parametros n1 y n2, pero el siguiente parametro es una funcion anonima
    // Esta se define con la palabra funcion, se le define un parametro ya que en su invocacion se le pasa uno
    // y por ultimo entre llaves se encierra el codigo del bloque.
    console.log("La suma dio un total de: ", suma);// Esto seria lo que se ejecuta dentro de esa funcion
}, function (suma){// Aca se define el ultimo parametro (o funcion anonima, callback) - Las funciones usadas como parametros tambien se separan con comas
    return ("<h3>El resultado de la suma es: " + suma + "</h3>");// Esto seria lo que se ejecuta.
});// Ambas funciones son separadas por comas como parametros normales y estan dentro de los parentecis de la funcion "sumame"

/*
Nota:
    - Recordar cerrar las lineas con punto y coma
    - Las variables dentro de la funcion sumame (o la principal) no se pueden usar dentro de las funciones enviadas como parametros, por eso se usan parametros para obtener los datos
    - Realmente hacer una funcion anonima dentro de una variable no tiene sentido es mejor hacerlas para callbacks como en este caso
*/
