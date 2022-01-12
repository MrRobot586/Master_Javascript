/*
    JqueryUI en JavaScript | Plugin para crear interfaces con jquery
*/

'use strict'

$(document).ready(function (){

    // Selectable - Permite seleccionar elementos de una lista dando click ensima 
    $('.lista').selectable();// Se aplica el metodo a una lista (ul/ol)
    // Hay que mencionar que se tiene que añadir al css las reglas del formato de los elemntos seleccionados
    // Para ello se le dan estilos a las clases "ui-selected" y "ul-selecting"

});
