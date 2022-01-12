/*
    JqueryUI en JavaScript | Plugin para crear interfaces con jquery
*/

'use strict'

$(document).ready(function (){

    // Sortable - Lista de elementos que se pueden ordenar, osea mover pero no sacar de la lista
    $('.lista').sortable({
        update: function(event,ui){
            console.log("Actualizacion...");
            console.log(event,ui);
        }
    });

    // Este recibe un json como parametro que a su vez tiene una propiedad update, dentro de la cual hay una funcion de callback
    // que se ejecuta cada que se actualiza un elemento de la lista a la que se aplico el metodo

});
