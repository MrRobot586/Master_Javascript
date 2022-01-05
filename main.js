/*
    Jquery en JavaScript | Selectores de etiquetas   
*/


'use strict'

$(document).ready(function () {

    // Para seleccinar una etiqueta simplemente ponemos su nombre como parametro al invocar al jquery
    var parrafos = $('p');// En este caso le damos su referencia a la variable parrafo
    parrafos.css('cursor','pointer');// Ademas de darle un estilo (que el cursor sea un puntero al pasarlo ensima)

    // Para el ejemplo, se usara el evento click para cambiar los estilos de cada parrafo segun su contenido
    parrafos.click(function (){// Escuchando el evento click
        let p = $(this).text();// Con el metodo "text()", obtenemos o editamos el texto que tenga esa etiqueta o elemento seleccionado, en este caso el del parrafo

        switch (p.toLowerCase()) {// En este caso se usa el metodo "tolowercase", para que este todo el texto en minuscula y compararlo bien
            // Editamos los estilos css segun sea el caso, usando this como selector, ya que es el elemento al que le damos click
            case 'la bandera':
                $(this).css('background','yellow')
                       .css('color','gray')
                       .css('text-align','center');
                break;

            case 'de':
                $(this).css('background','blue')
                       .css('color','white')
                       .css('text-align','center');
                break;
            case 'venezuela':
                $(this).css('background','red')
                       .css('color','white')
                       .css('text-align','center');
                break;
        }
    });

});