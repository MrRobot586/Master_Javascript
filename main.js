/*
    Eventos en JS

*/

// Eventos del teclado y foco

'use strict'

// Obtener o seleccinar el elemento con el id campo_name
var campo = document.getElementById("campo_name");

// Evento Focus: Cuando se enfoca un elemento seleccionado, es decir, cuando le damos click y el navegador se enfoca en el
campo.addEventListener('focus', () =>{
    console.log("[focus] focus on!");
});

// Evento Blur: Cuando el enfoque en el elemento ya no esta, es decir, cuando se deja de enfocar al elemento
campo.addEventListener('blur', () =>{
    console.log("[blur] focus of!");
});

// Evento keydown: Sucede al precionar una tecla (tan pronto como se precione)
campo.addEventListener('keydown', (event) =>{
    console.log("[keydown] Pulsando una tecla! " + String.fromCharCode(event.keyCode));// Con el fragmento del final se puede imprimir el caracter de la tecla que preciono
    // console.log("[keydown] Precionaste una tecla! " + event.key);// Se puede hacer lo mismo usando el metodo "key"
    /*
        Al colocar un parametro en la funcion de callback, se obtiene el evento como tal en el cual se almacenan datos 
        que se pueden usar para analizar el evento y hacer funcionalidades en torno a eso. Lo devuelve en forma de objeto con metodos y propiedades.
    */
});

// Evento keyup: Sucede al soltar una tecla (luego de precionarla logicamente, pero solo sucedera al soltarla)
campo.addEventListener('keyup', (event) =>{
    console.log("[keyup] Precionaste una tecla!");
});

// Evento keypress: Sucede al precionar y soltar una tecla en el mismo contexto.
campo.addEventListener('keypress', (event) =>{
    console.log("[keypress] Precionaste una tecla!");
});

