/*
    Jquery en JavaScript | find y parent
        Curiosidades y otras posibilidades con Jquery
*/


'use strict'

$(document).ready(function () {

    // 1. Se pueden seleccionar varios tipos de elementos separandolos por coma los selectores | Con jquery
    $('li, p').css('background','tomato') 
              .css('color','white');

    // 2. Tambien podemos encontrar un elemento dentro de otro (en caso de no saber donde se encuentra), esto con el metodo find
    $('p').find('.span')// Enviando como parametro el selector del elemento a buscar - El metodo find, sirve para buscar dentro de un arbol de elementos muy extenso
          .css('background','green');// En este caso encadenamos un css para cambiar el fondo del elemento encontrado
    // Se pudo hacer $('p .span') y de igual forma se encuentra los elementos

    // 3. Podemos seleccionar   el padre de un elemento usando el metodo "parent()", este metodo da como resultado el elemento HTML padre del elemento actualmente seleccionado
    var span = $('p .span');// Ojo: Esto no cambia el contenido de una variable, que contenga un elemento html
    console.log(span.text());// Salida de prueba, el elemento seleccinado sigue siendo el span dentro del parrafo
    span.parent().css('color','yellow');// Al padre del span (osea el parrafo), le cambiamos el CSS

    // 4. Eq() - Buscar un elemento en concreto dentro de una conjunto de elementos HTML, retornado por una seleccion
    var lista = $('li');// En este caso seleccionamos todos los elemetos Li
    lista.eq(0).css('background','blue');// y al primero de ellos (el 0), le cambiamos el bg a azul. Seleccionandolo con EQ()
});