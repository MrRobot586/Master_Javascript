/*
    JqueryUI en JavaScript | Plugin para crear interfaces con jquery
*/

'use strict'

$(document).ready(function (){

    // Tootips - Pequeño popup que se ve cuando pasamos el mouse por ensima de un elemento
    // Aplicando el metodo "tooltip()" a un elemento se le coloca un tooltip al elmento
    $('[title="Ir a google..."]').tooltip();// Se puede aplicar a un elemento
    //$(document).tooltip();// O a todo el documento
    //Nota: para que funcione el elemento debe tener un atributo "title"

});
