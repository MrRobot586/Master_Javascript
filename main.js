/*
    JqueryUI en JavaScript | Plugin para crear interfaces con jquery
*/

'use strict'

$(document).ready(function (){

    // Cuadros de dialogo | dialog()
    // Sirven como aviso dentro de la pagina frente a algun evento, en este caso el de un click en un boton
    $('#btn').click(function(){
        $('[title="¿Estas seguro?"]').dialog();// Aplicando el metodo al elemento, se mostrara un cuadro de dialogo con el contenido de ese lemento
    });
    // Nota: El "title" de el elemento al que se aplica "dialog()", sera la cabecera de ese cuadro de dialogo
});
