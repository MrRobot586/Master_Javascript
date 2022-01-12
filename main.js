/*
    JqueryUI en JavaScript | Plugin para crear interfaces con jquery
*/

'use strict'

$(document).ready(function (){

    // Efectos en jquery UI
    $('#activar_efecto').click(function(){
        $('#caja').toggle('puff');

        /*
            Con jquery UI se añaden muchos efectos nuevos para ocultar y mostrar elementos:
                - puff
                - fade
                - explode
                - blind 
                - slide
                - drop
                - fold
                - scale
                - shake
                - 
            Los cuales se pueden usar con el metodo toggle(efecto) o con effect(efecto)
            Enviado como parametro el nombre del efecto que queremos aplicar al elemento
            Nota: Tambien se pueden pasar opciones y la velocidad del efecto, pero son parametros opcionales.
        */
    });

});
