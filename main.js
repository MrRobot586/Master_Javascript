/*
    LocalStorage en JS | Son datos que persisten mientras el usuario permanesca en la pagina web (igual que los datos de sesion pero en front end)
        - Para acceder a este se usa el objeto con el mismo nombre "localStorage"
        - Cada elemento guardado en este almacenamiento, tiene una key y un valor
        - Los datos que ahi se almacenan por lo general son strings
*/

'use strict'

window.addEventListener('load',()=>{

    if(typeof(localStorage) != undefined){// Comprobar si el localstorage existe o esta disponible en el navegador
        
        console.log("LocalStorage disponible!");

        // - Crear un item en el LocalStorage | Guardar datos
        localStorage.setItem("titulo","Curso de desarrollo web, victorroblesweb.");

        // - Recuperar u obtener el valor de un item en el localstorage
        console.log("Item del LocalStorage: ",localStorage.getItem("titulo"));

        // - Eliminar items del localstorage
        localStorage.removeItem("titulo");// Con el metodo removeitem() enviando como parametro el nombre de la key del item a eliminar, podemos remover elementos del localstorage

        // - Eliminar por completo el localstorage
        localStorage.clear();// Se  hace con el metodo clear()

        // - Crear un item y guardar un objeto JSON en el LocalStorage
        var usuario = {// Creamos el objeto y asignamos datos
            nombre: "Diego Oropeza",
            Email: "diegojoseoropeza@gmail.com"
        };

        // localStorage.setItem("usuario", usuario); // No se puede un objeto de forma nativa, porque no se guardan correctamente los datos
        localStorage.setItem("usuario", JSON.stringify(usuario));// Para guaurdar un objeto json, se usa el objeto json y el metodo "stringify" para convertirlo en un string antes de guardarlo
        /*
            Para guardar un objeto json en el localstorage, se debe convertir a un json string, un json string es un string con formato json, es decir, una cadena de texto pero con las llaves y formato
            que se guardan los datos en los objetos json. Esto se hace con el objeto json y el metodo stringify() enviando como parametro el objeto.
        */

        // - Recuperar un objeto JSON del localStorage
        var user2 = JSON.parse(localStorage.getItem("usuario"));
        /*
            Para esto debemos reconvertir el json string dentro del item, en un objeto json usable y meterlo dentro de una variable.
        */
        console.log(user2);// Salida de prueba

    }else{
        console.log("LocalStorage no disponible en este navegador...");
    }

});