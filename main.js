/*
    Timers en JS

*/

'use strict'

// NOta: Desde ahora todos los archivos JS se haran dentro de la funcionalidad para que se ejecute el JS cuando se carge el body
window.addEventListener('load', () =>{

    /*
        Los timers son contadores que ayudan a repetir una accion cada determinado tiempo, hay 2 funciones para esto
        Settimeout y setinterval, ambas funcionan igual pero una establece un tiempo antes de ejecutar una accion y una establece
        un tiempo antes de repetir una accion. (una se ejecuta una unica vez y la otra en bucle)
    */

    setTimeout(() => {
        /*
            setTimeout: Esta funcion sirve para crear un retraso antes de ejecutar una funcion, una unica vez. 
            En este caso crea un retraso de 3 segundos antes de ejecutar la funcion. Esta funcion recibe 2 parametros,
            el primero una funcion de flecha o anonima como callback en donde se espesifica el codigo a ejecutar tras el retraso y 
            el segundo es un numero entero que sera la cantidad de milisegundos que se retrasara dicha ejecucion. En este caso 3000 (3 segundos)
        */
        console.log("Este mensaje se mostrara luego de 3 segundos...");
    }, 3000);

    // Funcion para poder usar el mismo codigo varias veces*
    function interval(){// Esta inica un intervalo y lo asgna a una variable para despues devolverla como valor, por lo que al ejecutarla se ejecutara dicho intervalo

        /*
            setInterval: Sirve para crear un bucle que se repetira cada n milisegundos, recibe los mismos parametros que la anterior funcion
            y funciona de la misima forma, excepto porque este se repite tras la ejecucion del codigo una y otra vez sin parar.
        */
        var time = setInterval(function (){// Se le puede asignar una funcion a una variable esto para despues poder interactuar con esa misma funcion
            console.log("Este mensaje se va a repetir cada 1 segundos...");
        }, 1000);

        return time;
    }

    var tiempo = interval();// Se ejecuta la funcion asignandola a una variable

    var stop = document.getElementById("stop");// Seleccion de el boton stop

    stop.addEventListener('click',()=>{// Añadimos un eventlistener para escuchar el evento click
        clearInterval(tiempo);// Y le asignamos la funcion para eliminar el bucle que ya existe (setinterval)
        // Al ser asignado a una variable, entonces con la funcion clearinterval() anulamos ese bucle o intervalo, claro enviado como parametro la variable que se uso para crearlo
    });

    // Misma historia: Solo que en este caso, iniciamos el ciclo (nuevamente)
    var start = document.getElementById("start");

    start.addEventListener('click',() =>{
        tiempo = interval();
    });

    /*
    // Se puede crear un intervalo o un timeout sin necesidad de asignarlo a una variable, simplemente usando la funcion, el detalle es que no se podra parar 
    setInterval(function (){
        console.log("Este mensaje se va a repetir cada 3 segundos...");
    }, 3000);
    */

});