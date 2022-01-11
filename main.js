/*
    Jquery en JavaScript | Animaciones personalizadas
         Mediante el metodo "animate()" se pueden crear animaciones personalizadas dando como parametros un json
         con los parametros css que tendra el elemento al final de la animacion y como segundo parametro la velocidad de esta
         cabe destacar, que tambien se pueden encadenar varios metodos .animate en un mismo elemento, como una promesa.
*/

'use strict'

$(document).ready(function (){
    
    const caja = $('#caja');// Elemento a animar

    const btn_animate = $('#animacion');// Boton que activara la animacion

    btn_animate.click(function (){// EN el evento click
        caja.animate({// APlicamos el metodo animate al elemento
            marginLeft: '500px'// Al finald de la animacion tendra este margin
        }, 'normal')// y la animacion se hara en velocidada normal
        .animate({// Como se ve tambien se encadena otra animacion con el mismo formato esta se ejecutara cuando la anterior termine
            marginLeft: '0px'
        }, 'slow')
        .animate({
            marginLeft: '500px'
        }, 'fast');
    });
});