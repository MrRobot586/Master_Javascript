/*
    Eventos en JS - Un evento es algo que sucede en el navegador web y que puede ser capturado para realizar funciones en base a estos
        - Existen distintos eventos que pueden suceder en una pagina y que pueden ser capturados
        - Los eventos se pueden capturar de 2 formas
            - Con atributos en HTML
            - Con eventlistener en JS
*/

// Eventos del raton

'use strict'

// Evento de click: Al hacer click en el elemento

/* Forma 1: 
    Capturar evento con atributo "onlick" en HTML. En la etiqueta button se le asigno un atributo onclick
    y se le dio el valor de la funcion "click_boton", que muestra una alerta. De esta forma al darle click al
    boton se ejcutara esta funcion.
*/
function click_boton(){// Funcion que se ejecuta tras el evento
    alert("El boton ha funcionado!!! ");
}

/* Forma 2:
    Capturar evento seleecionando el elemento deseado, en este caso por ID, añadiendo un eventlistener y dandole una funcion.
    Este metodo es mas clean para programar y dejar todo en un mismo archivo JS
*/
var boton = document.getElementById("boton");// Capturar el elemento

boton.addEventListener('click', ()=>{// Con el elemento, usando el metodo "addeventlistener" se puede añadir una funcion en caso de un evento espesifico
/*
    Se envian 2 parametros a este metodo:
        - El primero es el nombre del evento a capturar
        - el segundo es una funcion de callback (en este caso una de flecha) en la cual se espesifica lo que pasara tras el evento 

*/
    // Codigo a ejecutar en el evento click
    if(boton.style.background == "tomato"){// Un swithcher de colores. Simple.
        boton.style.background = "teal";
    }else{
        boton.style.background = "tomato";
    }
});

// Evento de mouseover: Al poner el mouse ensima del elemento
boton.addEventListener('mouseover', function(){
    boton.style.padding = "10px";
});

// Evento de mouseout: Al quitar el mouse del elemento
boton.addEventListener('mouseout', function(){
    boton.style.padding = "2px";
});

/*

Notas:
    - Existen mas eventos, pero aca solo se destacan los importantes
    
*/