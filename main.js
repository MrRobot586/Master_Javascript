/*
    Operador this | Sirve para hacer referencia al elemento dentro de un eventlistener...
        El operador this, hace referencia a un elemento al cual se le añade un ventlistener, es decir, seleccionas un elemento
        y luego escuchas el evento click, dentro de la funcion de callback se puede usar this para hacer referencia al propio elemento
        del cual estas escuchando el evento.
*/

'use strict'

window.addEventListener('load',()=>{

    var boton = document.getElementById('click');// Se obtiene el elemento

    boton.addEventListener('click',function (){// Se le añade un eventlistener para escuchar el evento click
        if(this.style.background == "teal"){// Un switch de color usando "this" - Si la subpropiedad, background la propiedad style del elemento "this" (osea boton) es "teal"...
            this.style.background = "tomato";// Mediante this hacemos referefia al elemento "boton" que es el elemento del cual capturamos el evento y cambiamos el valor de la propiedad
        }else{// Sino...
            this.style.background = "teal";// Hacemos lo mismo pero con otro color
        }
        // Nota: El this solo funciona con funciones anonimas de callback (no funciona confunciones flecha) y obviamente se usa solo para eventos
        // Nota2: El this funciona para hacer referencia al elemento del cual se escuha un evento en concreto, solo se puede hacer referencia con este operador dentro de la funcion de callback del eventlistener
    });
});