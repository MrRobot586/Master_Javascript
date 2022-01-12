/*
    JqueryUI en JavaScript | Plugin para crear interfaces con jquery
*/

'use strict'

$(document).ready(function (){

    // Droppable - El elemeto seleccionado detecta cuando un se suelta un elemento "draggable" dentro de si
    $('#droppable_area').droppable({
        drop: function(){
            console.log("drop");
        }
    });

    $('#droppable_item').draggable();

    /*
        Estas funciones o metodos, reciben un json con una serie de indicaciones sobre  los eventos que ocurren
        al usar los elementos a los que se les aplican. Como en este caso la propiedad "drop", ejecuta un callback
        cuando detecta el evento de que un elemento fue soltado
    */
});
