/*
    BOM - Browser Object Model
    - Elementos presentes en el navegador web, propiedades y caracteristicas. Mediante el BOM se pueden editar
*/

'use strict'

// Con el objeto window y a travez de sus metodos se pueden obtener las propiedades de la ventana actual
var ventana_alto = window.innerHeight;// o el alto de la ventana actual
var ventana_hancho = window.innerWidth;// Como por ejemplo el hancho

// Lo interesante de estos metodos es que siempre cambian en funcion de la altura y anchura de la ventana
// Es decir, si la ventan es menos hancha entonces se vera reflejado en el valor que devuelva
console.log("El tamaño de la ventana ahora es de: " + ventana_alto + " x " + ventana_hancho);

// Meidainte el metodo location aplicado al objeto window se obtienen distintos parametros propios de URL de la web
// Se obtienen datos como la URL del sitio, la IP y asi... En este caso se muestra el href del sitio (o url)
console.log(window.location.href);

// Asi como tambien se pueden editar estas propiedades a traves de los propios metodos
// window.location.href = "https://www.google.com";// Descomenta esta linea, cuando se ejecute se cambiara el href al del google y se redireccionara hasta esa pagina

// Tambien se pueden abrir ventanas o tabs con el mismo objeto window
window.open("https://www.youtube.com");// Con window.open se puede abrir una nueva tab o pesataña enviando como parametro una URL 

window.open("https://www.youtube.com","","width=500,height=500");// y usando el mismo metodo pero enviando 3 parametros (una url, una cadena vacia y otra con las propiedades de la venta)
// Se puede abrir una ventana nueva con las dimenciones que se coloquen como 3er parametro. En este caso se abre una ventan de hacho 500 y alto 500px

//  Nota: Si se coloca el "https://"

// Ahora con el objeto screen se puede obtener el hacho y alto de la pantalla como tal
console.log(screen.width, screen.height);



