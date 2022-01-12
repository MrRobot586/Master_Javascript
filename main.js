/*
    Jquery en JavaScript | Peticiones Ajax
*/

'use strict'

$(document).ready(function (){

    /*
        Metodo $.ajax({ jSON }); - Permite hacer cualquier tipo de peticion independientemente si es por post o get
            Mediante el metodo $.ajax(), se puede hacer cualquier tipo de peticion ajax, ya sea get o post.
            Esta funcion recibe como parametro una JSON con los parametros de la peticion de los cuales solo algunos son estricamente
            necesarios:
                - type: Este es el tipo de peticion a realizar
                - url: Esta es la URL de a la que se hara la peticion
                - data: Este es un objeto json que tiene los datos a solicitar o enviar
            Tambien recibe otros parametros como:
                - dataType: QUe es el tipo/formato de datos que recibe o envia la peticion
                - contentType: Que es el contenido de la peticion
            Ademas, recibe varios parametors opcionales que como tal son callbacks:
                - beforesend: Una funcion de callback que se ejcuta justo al enviar la peticion
                - succes: una funcion de callback (recibe la respuesta de la peticion) que se ejecuta cuando se termina de ejecutar la peticion exitosamente
                - error: Funcion de callback que recibe un error en caso de que ocurra se ejecuta
                - timeout: numero entero de milisegundos que debe tardar como maximo la peticion (si tarda mas de eso, se considera error)
    */

    // Este ejemplo sirve para hacer peticiones ajax tanto post como get 
    //  - Si se envia usuario_post y se cambia el metodo a post la peticion registrara datos en la api
    //  - Si se envia usuario_get y se cambia el metodo a get la peticion obtendra datos de la api

    // Notar que este json tiene datos para registrar al usuario
    var usuario_post = {
        name: "Diego",
        job: "jr Developer"
    };

    // Mientras que este Json solo tiene el dato para indentificar el dato a traer
    var usuario_get ={
        id: 1
    };
    
    // URL para hacer la peticion
    var url = 'https://reqres.in/api/users';

    $.ajax({
        type: 'GET',
        //dataType: 'json',
        //contentType: 'application/json',
        url: url,
        data: usuario_get,
        beforeSend: function(){
            console.log("Enviando peticion...");
        },
        success: function(response){
            console.log("Peticion enviada!");
            console.log(response);
        },
        error: function(error){
            console.log(error);
        },
        timeout: 2000
    });

});
