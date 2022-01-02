/*
    Como crear promesas | Las promesas tienen el objetivo de evitar el callback hell
        Esto quiere decir, que estan diseñadas para anidar varios procesos o funciones, sin que se superpongan
        osea que no se ejecuten hasta que la anterior termine, sin necesidad de meter funciones dentro de otras y callbacks 
        anidados. Sino que por el contrario se dividen en modulos que se ejecutan uno tras otro, estos son los .then
*/


'use strict'

window.addEventListener('load',function (){

    // Codigo reciclado, la funcion get_info es nueva
    get_user_list()
        .then(data => data.json())
        .then(data => {
            Cargar_Lista_Usuarios(data.data);

            return get_user('3');
        })
        .then(data => data.json())
        .then(data => {
            Cargar_User(data.data);

            return get_info();// Nueva funcion: get_info() devuelve un promesa
        })
        .then(data => JSON.parse(data))// Por lo que esa misma se procesa en este .then
        .then(data => {// Y por ultimo se usa para imprimir un log en este otro .then
            console.log(data.nombre, data.apellido, data.url);
        });
    
    // Ejecucion de prueba de get_info() - En este caso con .then, obtenemos la respuesta cuando termine de ejcutarse la promesa
    get_info()
        .then(data =>{
            console.log(data);
        });

});

function get_info(){// Esta funcion, devuelve la informacion contenida dentro de la variable "profesor", que es un objeto json
    var profesor = {
        nombre: 'Victor',
        apellido: 'Robles',
        url: 'https://victorroblesweb.com'
    };

    // Para crear la promesa, la devolvemos instanciando un objeto promesa y enviamos como parametros los placeholders resolve y reject
    return new Promise(function (resolve, reject) {// Estos parametros serviran como funciones dentro de la promesa
        var profesor_str = JSON.stringify(profesor);// Realizamos la operacion a evaluar, en este caso convertimos el objeto a un string JSON

        if(typeof(profesor_str) != 'string'){// Si la conversion no estuvo bien, osea no es un string
            return reject('Error!');// Ejecutamos el reject enviando como parametro un mensaje (que en eralidad puede ser cualquier cosa)
        }else{// En caso de que la operacion fuese exitosa, ejecutamos resolve
            return resolve(profesor_str);
        }
    });
    /*
        Para entender mas o menos esto, la cosa va asi: Primero creamos el objeto json, le metemos datos y ahora hacemos un return de un nuevo objeto
        promise (o promesa), que se ejecuta de inmediato porque se esta returnando, esta su vez, ejecuta un callback que se envia como parametro, esta funcion
        anonima analiza una situacion y hace un return de una funcion, que bien puede ser resolve o reject, que son para cuando el resultado fue satisfactorio
        o no, respectivamente.

        Con el ".then", se puede recibir o procesar el resolve, en teorioa resolve vendria siendo el .then y reject, vendria siendo .catch
        Es decir, estos placeholders que se usan en el callback de la promesa, son en ralidad las funciones usadas para cuando se cumpla o no
        la promesa.

        Nota: Algo asi es com funciona fetch, internamente
    */
}

function get_user_list(){
    return fetch('https://reqres.in/api/users?page=1');
}

function get_user(user_id){
    return fetch('https://reqres.in/api/users/' + user_id);
}

function Cargar_User(user){
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

function Cargar_Lista_Usuarios(users){
    var ul = document.createElement('ul');
            
    users.map(function (user){
        var li = document.createElement('li');
        li.textContent = user.first_name + " " + user.last_name;
        ul.append(li);
    });

    document.body.append(ul);
}