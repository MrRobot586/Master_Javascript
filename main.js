/*
    Jquery en JavaScript | Selectores de ID
        Libreria para simplificar el codigo javascript
        - Para integrarla se hace como se integra un script de javascript en el html, con la direccion del archivo de la libreria 
            Obviamente se debe descargar la libreria o usar una direccion de CDN 
*/


'use strict'

// El $ es una referencia a el objeto Jquery, mientras que lo que esta entre parentecis es el selector (como en este caso se selecciona el documento o pagina HTML)
$(document).ready(function () {// En este caso aplicamos un metodo que es un eventlistener para el evento load (o cuando la pagina este completamente cargada)
    
    // De esta forma se puede seleccionar un elemento por su ID (usando el mismo formato que css con el #)
    $('#amarillo').css('background','yellow')// A este selector se le puede aplicar un metodo, en este caso el metodo modifica un estilo css (el bg), recibiendo como parametro el nombre de la propiedad y su valor
                  .css('text-align','center');// Asi como las promesas se pueden encadenar estos metodos, para añadir funcionalidad o modificar un elemento HTML capturado o seleccionado
    
    $('#azul').css('background','blue')// Se puede hacer referencia a un elemento (o seleccionarlo), sin usar una variable como tal
              .css('text-align','center')
              .css('color','white');

    $('#rojo').css('background','red')
              .css('text-align','center')
              .css('color','white');

    var amarillo = $('#amarillo');// Se puede selecionar un elemento y almacenar su referencia en una variable
    
    console.log(amarillo, $('#azul'), $('#rojo'));// Salida de prueba de las variables 

    /*
        Jquery notas: 
            - Seleccionar elementos: Se pueden seleccionar elementos usando "$()", enviando como parametro el elemento a seleccionar
              se puede seleccionar por id, por clases e incluso por atributos css. Ademas de esto tambien se puede seleccionar el documento completo
              usando "document" como referencia
            - Uso de metodos: Los metodos aplicados a un selector sirven para cualquier cosa, desde eventos hasta modificadores de css.
            - Encadenamiento de metodos: Los metodos se pueden encadenar para no estar seleccionando o invocando a cada rato un mismo elemento. Es decir,
              se pueden encadenar distintos metodos para un mismo elemento ya seleccionado, siempre y cuando no se cierre el ";" algo asi como las prpomesas.
            - Almacenamiento en variables: Con los selectores tambien se pueden almacenar los elementos en variables
    */
});