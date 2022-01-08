/*
    Jquery en JavaScript | Eventos mousedown y mouseup, mas ejemplos...
*/


'use strict'

$(document).ready(function (){

    // Capturamos el elemento
    const caja = $('#caja');

    // Con mousedow, se captura el evento de cuando el click del mouse este precionado
    caja.mousedown(function (){ 
        $(this).css('background','gray')
               .text(':(');
    });

    // Y con moseup, capturamos el evento de cuando el mouse deje de estar precionado
    caja.mouseup(function(){
        $(this).css('background','salmon')
               .text(':)');
    });

    // Nota: En este caso cambiamos los estilos css del elemento seleccionado para cada caso (mousedown y mouseup)

    // Con mousemove(), podemos detectar si es que el mouse se mueve por ensima de un elemento
    const point = $('#circulo');

    $(document).mousemove(function (event){// En este caso detectamos el movimiento del mouse en todo el documento
        point.css('left',event.clientX)// Y movemos el elemento a los ejes X y Y en donde se encuentra
             .css('top',event.clientY);// En cadenamos otro metodo
             
        $('body').css('cursor','none');// Tambien quitamos el cursor para apreciar mejor el evento
    });

    // Nota: con "event.clientXY" obtenemos las coordenadas del la posicion actual del mouse
    
});