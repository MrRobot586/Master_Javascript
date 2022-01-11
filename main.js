/*
    Jquery en JavaScript | Peticiones Ajax
*/

'use strict'

$(document).ready(function (){

    /*
        Peticiones POST con jquery - $.post(URL,datosJSON,function(res){ --- }); 
            Esta peticion se raliza con el metodo o funcion $.post(), que recibe 3 parametros:
                - La URL a la que se hara la peticion
                - Los datos en formato JSON
                - Una funcion de callback que recibe como parametro un objeto que devolvera como respuesta la API
            
            En este caso, la funcion como tal no es necesaria... Sin embargo es bueno tener en cuenta la respuesta del servidor
            con lo cual, es bueno mandar este parametro para saber si la respuesta fue positiva o no.

            Por lo genereal el metodo post se usa para registrar datos en la base de datos y get para obtenerlos.
            En este caso registraremos un usuario en la base de datos de la API mediante un formulario y de forma manual tambien
    */

    // Metodo post - De forma manual: En este caso definiremos el usuario y lo registraremos haciendo una peticion post 
    let usuario = {
        name: "Diego",
        job: "jr Developer"
    };

    // En este caso enviamos la peticion a la URL de reqrest, el usuario y la funcion para recibir la respuesta
    $.post('https://reqres.in/api/users', usuario, function(res){
        console.log(res);// Mostramos la respuesta por consola
    });


    // Metodo post - De forma dinamica: Esta vez pediremos o usaremos los datos que se recojen de este formulario
    const form = $('[action="https://reqres.in/api/users"]');
    
    form.submit(function (e){// Detectamos el evento submit
        e.preventDefault();// Cancelamos el envio de datos por defecto

        // Obtenemos los datos
        let name = $('[name="nombre"]').val();
        let job = $('[name="job"]').val();
        
        // Comprobamos que no esten vacios
        if(job != '' && name != '' ){// Y los asignamos al objeto que se enviara en la funcion $.post()
            usuario.name = name;
            usuario.job = job;
            
            // Llamamos a la funcion envamos los parametros
            // En este caso "form.attr('action')" - Tiene el valor de la URL a donde se hara la peticion, que esta en el action del formulario
            $.post(form.attr('action'), usuario, function(res){
                console.log(res);
            }).done(function(){// Ademas, se pede encadenar el metodo ".done", para ejecutar un callback cuando se ejecute la peticion satisfactoriamente
                alert("Usuario registrado, satisfactoriamente...");
            });
        }

    });
});
