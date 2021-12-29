/*
    JSON - JavaScript Object Notation
        - Sirve para declarar y utilizar objetos, que sirven como arrays asociativos, es decir, arrays cuyos indices son en erealidad referencias al contenido del indice como tal.
        - Cada objeto json, tiene propiedades y metodos, las propiedades son definidas o declaradas y los metodos sirven para modificar alguna caracteristica o convertir el objeto.
        - Para acceder a las propiedades de un objeto json se usa el nombre del elemento seguido de punto y la propiedad, ejemplo: "objeto.propiedad"
        - Se pueden declarar objetos json dentro de otros o incluso objetos js como valores de algun indice de un array
*/

'use strict'

window.addEventListener('load',()=>{

    // De esta forma se define un objeto JSON
    var pelicula = {// Nombre del objeto seguido de la asignacion que se hace entre llaves
        titulo: 'Bantan Vs. Superman',// Cade elemento se define con el nombre del mismo + dos puntos y el valor
        year: 2016,// Cada elemento se separa por comas
        pais: 'Estados unidos'// Excepto el ultimo que no lleva comas
    };// Por supuesto se cierran las llaves y se coloca  ";"

    console.log(pelicula);// Salida de prueba para ver el objeto con todas sus propiedades

    pelicula.year = 2017;// Asi se puede reasignar el valor de una propiedad (solo se accede a ella y se le da otro valor)

    console.log(pelicula.year);// Asi se accede al valor de una propiedad espesifica

    // Asi se define un array con un objeto json dentro
    var peliculas = [
        {titulo: 'cuestion de tiempo', year: '2013', pais: 'Reino Unido'},// Cada elemento separado por coma, pero en este caso el elemento esta entre llaves y tiene distintas propiedades
        pelicula
    ];

    console.log(peliculas);// Salida de prueba

    console.log(peliculas[0].titulo);// Asi se accederia a un indice y luego a una propiedad de ese objeto (que esta dentro del indice)

    for(let index in peliculas){// Asi se recorreria un array
        console.log(peliculas[index].titulo + " - " + peliculas[index].year);// Aca se imprime en consola el titulo y año de cada elemento
    }

});