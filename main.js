/*
    Jquery en JavaScript | Evento click y doble click
*/


'use strict'

$(document).ready(function (){

    // seleccionamos el elemento con jquery
    const caja = $('#caja');

    // Evento click
    caja.click(function(){
        console.log("Has hecho click en el elemento!!");

        $(this).css('background','salmon')
               .text(':)');
    });

    // Evento doble click
    caja.dblclick(function(){
        console.log("Has hecho doble click en el elemento!!");

        $(this).css('background','grey')
               .text(':(');
    });

    // Nota: Tambien se pueden eviar funciones completas a un callback de cualquier evento pero con la excepcion de que estas no tendran parametros
});