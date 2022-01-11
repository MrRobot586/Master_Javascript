/*
    Jquery en JavaScript | Efectos y animaciones
        Con jquery se pueden hacer efectos o animaciones para ocultar y mostrar elementos
        esto con metodos aplicables  aelementos HTML y cuya animacion puede ser lenta, normal o rapida, dependiendo del
        parametro que coloquemos en el metodo. 
*/

'use strict'

$(document).ready(function (){
    
    const caja = $('#caja');

    const bnt_toggle = $('#toggle_btn');
    const btn_mostrar = $('#btn_mostrar');
    const btn_ocultar = $('#btn_ocultar');

    /*
        - Hide y show: Ocultar y mostrar un elemento HTML seleccionado. Pero si no espesificamos un parametro solo lo desaparece y aparece, 
          sin embargo con un parametro de velocidad sea numerico o un string se modifica la velocidad de la animacion, ejemplo con el parametro 'fast'
          la animacion ira rapido.
        - Fadein y Fadeout: Hace un fundido al mostrar y ocultar el elemento, fadein es para mostra y fadeout para ocultar.
        - Fadeto: Hace lo mismo que fadein y fadeout, solo que recibe 2 parametros: La velocidad y el estado final que tendra la animacion.
          Es decir, en que opacidad quedara el elemento al terminar la animacion (0 para ocuotar y 1 para mostra).
        - SlideUp y SlideDown: Barren el elemento hacia arriba o abajo al ocultar y mostrar.
        - Toggle: Con solo esta funcion se pueden mostrar y ocultar elementos (es como hide y show) y tiene variaciones para los demas metodos
            - FadeToggle
            - SlideToggle
    */

    btn_mostrar.click(function(){
        //caja.show('normal');
        //caja.fadeIn('normal');
        //caja.fadeTo('normal', 1);
        caja.slideDown();
    });

    btn_ocultar.click(function(){
        //caja.hide('fast');
        //caja.fadeOut('low');
        //caja.fadeTo('normal', 0);
        caja.slideUp();
    });

    bnt_toggle.click(function(){
        //caja.toggle();
        //caja.fadeToggle();
        caja.slideToggle();
    });
});