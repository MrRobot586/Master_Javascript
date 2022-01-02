/*
    Capturar errores en codigo JS: Try catch, se usa para capturar un error en codigo o interno...
    Con catch se captura el error y con try se ejecuta el codigo a probar.
*/


'use strict'

window.addEventListener('load',function (){

    var year = 2022;

    // Ejemplo, aca se ejecuta un alert pero la variable esta mal escrita, entonces como hay un error
    try{
        alert(yea);
    }catch(error){// Catch lo captura y ejecuta un codigo en caso de que esto pase
        console.log("Error de codigo: " + error);
    }

});
