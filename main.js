/*
    Jquery en JavaScript | Selectores de atributos
        - Para seleccionar un elemento por sus atributos se  hace uso de los corchetes "[]" 
*/


'use strict'

$(document).ready(function () {

    // En este caso seleccionamos a "google", por su atributo "href" y a "facebook" por su atributo "title"
    var google = $('[href="https://www.google.com"]');
    var facebook = $('[title="ir a facebook"]');

    // Salida de prueba
    console.log(facebook, google);

    // De igual forma a estos elementos seleccionados por atributos se le pueden modificar los estilos css o lo que sea con javascript
    google.css('color','tomato');
    facebook.css('color','teal');
});