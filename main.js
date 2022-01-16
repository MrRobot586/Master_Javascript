/*
    JqueryUI en JavaScript | Plugin para crear interfaces con jquery
*/

'use strict'

$(document).ready(function (){

    // Tabs - Pestañas
    $('#tab_index').tabs();
    /*
        Para crear una seccion donde hallan "pestañas" en las cuales cliquear y cambiar de contenido dinamicamente
        se usa el metodo tabs(), aplicandoselo a un elmento html (un div) que dentro debe tener 2 cosas:
            - Una lista "ul" que en cada item tenga un elnace dentro que tenga el atributo href haciendo referencia al elemento "#tabs-n" donde N es el numero de la tab o pestaña
            - Y los divs de cada pestaña que deben tener un id con el nombre "tabs-n"

        ejemplo: 
            <div>
                <ul>
                    <li><a href="#tabs-1">Pestaña 1</a></li>
                    <li><a href="#tabs-2">Pestaña 2</a></li>
                </ul>

                <div id="tabs-1">
                    Pestaña 1 - Contenido
                </div>
    
                <div id="tabs-2">
                    Pestaña 2 - Contenido
                </div>
            </div>
    */
});
