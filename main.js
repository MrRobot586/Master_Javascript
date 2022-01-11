/*
    Jquery en JavaScript | Peticiones Ajax
*/

'use strict'

$(document).ready(function (){

    // Obtenemos el elemento con el ID data para ahi colocar los datos que retorne la peticion
    const data = $('#data');

    /*
        Peticiones GET con jquery - $.get(url,parametros,function(response){ --- });
            Esta peticion se hace con el metodo $.get() que recibe 3 parametros de los cuales 2 son obligatorios
            los parametros son: 
                - La URL a la cual se hara la peticion
                - Un json con los parametros que se enviaran en la peticion GET
                - Una funcion de callback que recibe la respuesta de la peticion y dentro de esta se procesan los datos

            De estos parametros solo la ULR y la funcion son obligatorios, los parametros de la peticion pueden enviarse en la misma URL
    */

    // En este caso hacemos una request a la pagina reqrest y pedimos una lista de usuarios
    $.get('https://reqres.in/api/users',{page: 2},function(response){// Primero la URL, luego los parametros y por ultimo la funcion
        write_names(response,data);// Dentro de esta funcion procesamos la info que viene dentro de response | En este caso ejecutamos una funcion que recibe la respuesta y un div para imprimir los datos en el DOM
    });

    /*   
        // Asi se veria la misma peticion pero sin usar el segundo parametro y colocando los parametros en la misma URL
        $.get('https://reqres.in/api/users?page=2',function(response){
            write_names(response,data);
        });
    */
});

// Funcion para escribir los nombres en el DOM - Recibe el objeto response y un elemento HTML donde meter los datos
function write_names(response,section) {
    response.data.forEach(element => {
        //console.log(element.first_name);
        section.append('<p><b>[ ' + element.id + ' ] Nombre(s): </b>' + element.first_name + ' ' + element.last_name + '</p>')
    });
}