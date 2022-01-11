/*
    Jquery en JavaScript | Peticiones Ajax
*/

'use strict'

$(document).ready(function (){
    
    /*
        Load - permite hacer una peticion ajax por get e inscrustar el resultado en un elemento HTML seleccionado
               Algunas api rest devuelven como resultado un troso de HTMl con los datos que luego se pueden incrustar en el HTML 
               de la actual pagina, para eso sirve el metodo ".load()" ya que carga un HTMl devuelto por una URL y lo incrusta en
               un elmento seleccionado.
    */

    $('#load').load('https://reqres.in/');// En este caso en el div con el ID "load" incrustamos la pagina de la URL que se manda como parametro en el metodo load

});