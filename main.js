/*
    Jquery en JavaScript | Eventos mouseover y mouseout
*/


'use strict'

$(document).ready(function (){

    // Con jquiery los eventos son mas faciles de capturar
    const caja = $('#caja');

    // En este caso aplicamos el evento mouseover - Para esto aplicamos el metodo mouseover y le damos como parametro una funcion de calback en al que ejecutaremos el codigo al capturar el evento
    caja.mouseover(function () { 
        $(this).css('background','gray')// En este caso cambiamos el fondo y el texto
               .text(':(');
    });

    // Lo mismo poara el evento mouseout
    caja.mouseout(function () { 
        $(this).css('background','salmon')
               .text(':)');
    });

});