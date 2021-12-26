/*
    Eventos en JS

*/

// Evento load: Este evento sucede al cargar el elemento seleccionado, una vez cargado se ejecuta la funcion

'use strict'
/*

    Anteriormente se carga el/los archivo(s) JS al final del body para poder editar elementos y que no hubiera errores
    Sin embargo, ahora se puede cargar el script desde la cabecera, utilizando una una funcion dentro del archivo cargado
    que permitira que solo se ejecute el JS cuando ya este cargado el HTML.

    Esta funcio es un eventlistener que escucha el evento "load".

*/

// Al BOM (osea window) se le añadi un eventlistener que escuche el evento "load", para que una vez la pagina este cargada en la venta
window.addEventListener('load', () =>{// Se ejecute una fucnion que se le dara como segundo parametro
    alert("La pagina ha cargado completamente!");// Dentro de esa funcion desarrollaremos todo el codigo JS para las funcionalidades
});