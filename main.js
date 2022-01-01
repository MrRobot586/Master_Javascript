/*
    Promesas y fetch()
        Aclaraciones generales sobre las promesas y para que sirven...
        - Una promesa sirve para esperar a que una funcion se ejecute para despues encadenar otra
          Es decir, sirven para crear funciones que encadenen procedimientos continuamente uno tras otro
          que no se ejecutan si el anterior aun no ha terminado de jecutarse.
        - Cada que una promesa returnea un valor, otra promesa debe recojer ese valor, el ciclo acaba cuando ya
          no se returnea ningun valor...
        - No se cierra con punto y coma cuando se usa .then, se cierra pero en el ultimo de estos, ya que en teoria estos estan dentro de el fetch
*/


'use strict'

window.addEventListener('load',function (){

    // En este caso se resume un poco el ejercicio anterior
    
    get_user_list()// Esta funcion, al llamarla realiza la peticion fetch para obtener la lista de usuarios | Recordar que cuando una funcion hace return de otra, en realidad se ejecuta la funcion devolvida, por lo que aca .then aplica al fetch
        .then(data => data.json())// Al terminar la peticion: Procesamos la peticion convirtiendola a un JSON y returneando el resultado
        .then(data => {// Luego de eso: Con la data que se proceso y se devolvio anteriormente 
            Cargar_Lista_Usuarios(data.data);// Ejecutamos esta funcion, que da como resultado la lista de usuarios devuelta

            return get_user('3');// Returneamos la funcion get_user, que crea una nueva peticion ajax para pedir al usuario enviado como parametro
        })
        .then(data => data.json())// Convertirmos nuevamente la peticion (promesa) a un json
        .then(data => {
            Cargar_User(data.data);// Porcesamos con esta funcion
        });

});

function get_user_list(){// Funcion que obtiene lista de usuarios mediante peticion ajax
    return fetch('https://reqres.in/api/users?page=1');
}

function get_user(user_id){// Funcion para obtener un usuario espesifico con ajax
    return fetch('https://reqres.in/api/users/' + user_id);
}

function Cargar_User(user){// FUncion para cargar un usuario en el dom
    var avatar = document.createElement('img');
    var p = document.createElement('p');
    p.style.textAlign = 'center';
    avatar.src = user.avatar;
    avatar.style.borderRadius = "50%";
    
    p.append(avatar);
    p.append(document.createElement('br'));
    p.append(document.createTextNode(user.first_name + " " + user.last_name));
    
    document.body.append(p);
}

function Cargar_Lista_Usuarios(users){// FUncion para cargar lista de usuarios en el dom
    var ul = document.createElement('ul');
            
    users.map(function (user){
        var li = document.createElement('li');
        li.textContent = user.first_name + " " + user.last_name;
        ul.append(li);
    });

    document.body.append(ul);
}