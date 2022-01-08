/*
    Jquery en JavaScript | Evento hover
*/


'use strict'

$(document).ready(function (){

    // seleccionamos el elemento con jquery
    const caja = $('#caja');

    // Capturamos el evento hover: Que se activa cuando el mouse esta ensima del elemento y tambien cuando esta fuera.
    // Es decir, captura tanto el mouseover como el mouseout en un solo evento | Se captura con el metodo "hover"
    caja.hover(function(){// Se envian como parametros 2 funciones de callback de las cuales la primera es para mouseover y la segunda para mouseout
        $(this).css('background','gray')
               .text(':(');
    },function(){
        $(this).css('background','salmon')
               .text(':)');
    });

    // Curiosamente tambien se pueden enviar 2 funciones ya hechas, pero sin los parentencis ni parametros en estas
    caja.hover(feli,tiste);

    function feli() {
        $(this).css('background','salmon')
               .text(':)');
    }

    function tiste() {
        $(this).css('background','gray')
               .text(':(');
    }
});