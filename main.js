/*
    Jquery en JavaScript | Selectores de clase
        - Al igual que el selector de ID se usa el mismo formato que en CSS
*/


'use strict'

$(document).ready(function () {

    var tomato = $('.tomato');// De esta forma se seleccionan todos los elementos de la clase "tomato"
    
    tomato.css('background','tomato')// Tambien se le pueden añadir estilos a todos de un solo golpe sin necesidad de recorrer la variable como array
          .css('color','white')
          .css('text-align','center');
    
    // La variable tomato, sin embargo, si es un array. Es decir, se puede iterar
    console.log(tomato);// Salida de prueba

    // Tambien se pueden añadir eventos de click (como en este caso) - A los elementos de la clase "otro", se le añade un event listener del evento click
    $('.otro').click(function (e) {// Funciona de la misma manera que un eventlistener, se envia una funcion de callback que se ejecutara en caso de que el evento suceda
        // En este caso se cambian los estilos css del elemento en cuestion
        $(this).css('background','tomato')// Haciendo referencia al mismo con el selector "this"
               .css('color','white')
               .css('text-align','center');

        console.log(this);// Imprimimos this, para darnos cuenta de que es un elemento html
    });
});