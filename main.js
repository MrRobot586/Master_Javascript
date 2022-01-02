/*
    Caputrar errores en una promesa: Para esto se usa ".catch", que captura cuando ocurre un error en una promesa
    o cuando no se completa correctamente. Ejemplo, que se ejcute un fetch y que no se realize la peticion.

    .then - Captura cuando una promesa (ya sea en cadena o no) se completa
    .catch - Captura cuando una promesa falla o no se completa (sea en cadena o no)
*/


'use strict'

window.addEventListener('load',function (){

    // * Codigo reciclado *

    get_info()// Se ejecuta get_info()
        .then(data =>{// Usamos .then para procesar una salida true de la promesa (osea que se ejecuto correctamente)
            console.log(data);// y recibimos como parametro de el callback los datos devueltos por la promesa
        })
        .catch(error => {// En caso de error procesamos con catch, tambien recibiendo como parametro los datos devueltos por la promesa
            console.log(error);
        });
    
    // Lo mismo aplica para fech | El link esta mal puesto a proposito para que la peticion no sea exitosa (quitar las 2 r de "reqrrres")
    fetch('https://reqrrres.in/api/users?page=2')// Sejecuta la peticion
        .then(data => data.json())// Si es que fue exitosa, se procesa con .then
        .then(data =>{// En esta caso encadenamos 2 para convertir los datos a json y despues usarlos
            console.log(data.data);
        })
        .catch(error =>{// En caso de que la peticion no fuese exitosa, entonces capturamos el error
            console.log("Hubo un error: " + error);
        });

});

function get_info(){
    var profesor = {
        nombre: 'Victor',
        apellido: 'Robles',
        url: 'https://victorroblesweb.com'
    };
    
    return new Promise(function (resolve, reject) {
        var profesor_str = JSON.stringify(profesor);

        if(typeof(profesor_str) != 'string'){
            return reject('Error!');
        }else{
            return resolve(profesor_str);
        }
    });
}