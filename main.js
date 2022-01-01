/*
    Peticiones ajax y fectch (peticiones asincronas)
        Las peticiones ajax sirven para obtener datos de un back-end, como una api o una base de datos.
        Estas peticiones suelen tardar cierto tiempo en responder con los datos, es aqui donde entran las promesas en juego
        pues con estas se puede ejecutar un codigo luego de que una peticion ajax (con fetch) haya resultado exitosa o en un error.
*/

'use strict'

window.addEventListener('load',function (){

    var users = [];// Creamos un array para almacenar los datos que recojeremos de la peticion ajax
    
    /*
        Para realizar una peticion ajax usando fetch, se invoca a la funcion enviando como parametro la URL de la api,
        esta a su vez devuelve una promesa, a la cual podemos acceder mediante la palabra reservada ".then", es decir,
        una vez se termine la consulta la funcion fetch devolvera una promesa la cual porcesaremos en una funcion de callback
        que se adjutara a la funcion ".then".

        basicamente, invocamos a la funcion fetch, con ".then" ejecutamos una fucnion de callback usando como parametro lo que devuelva
        la funcion fetch que es una promesa. De esta promesa sacaremos la data que recibimos en la peticion ajax.
    */
    fetch('https://reqres.in/api/users?page=1')// Invocamos la funcion fetch enviando como parametro la URL de la api a consultar
        .then(data => data.json())// Con .then esperamos a que se ejecute la peticion y procesamos los datos en una funcion anonima (callback)
        // En este caso, returnamos data aplicandole el metodo ".json()", que convierte la promesa en formato json
        
        /* // Este seria el ejemplo del codigo de arriba pero con una funcion anonima y mas completa que una de flecha, mas codigo pero mas claro.
        .then(function (data){
            return data.json();
        })
        */
        
        .then(data => {// Cuando se procese la informacion, encadenamos la siguiente operacion (es decir la funcion de callback), recordar que "data" el resultado del anterior proceso o funcion
            users = data.data;// Igualamos users a data.data (que son los datos que buscamos en el JS)

            var ul = document.createElement('ul');// Creamos una lista
            
            /* // Podemos recorrer los elementos del array (que fue lo que devolvio la peticion) con un for
            for(let i in users){
                console.log(users[i].id, users[i].email, users[i].first_name, users[i].last_name);
            }
            */

            // O tambien usar un metodo llamado "map", que recibe una funcion de callback para iterar en un bucle
            users.map(function (user,i){// Esta funcion devuelve el elemento en el cual estamos iterando de un array, lo que la hace perfecta para iterar arrays de objetos (el i es opcional)
                //console.log(user.id, user.email, user.first_name, user.last_name);// Como devuleve cada elemento, solo debemos acceder a las propiedades de cada objeto para obtener sus datos
                // Ya con este codigo simplemente armamos la lista
                var li = document.createElement('li');
                li.textContent = user.id + " - " + user.first_name + " " + user.last_name;
                ul.append(li);
            });

            // Mostrar la lista - O mas bien montarla en el body
            document.body.append(ul);

        });

});