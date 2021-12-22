/*
    DOM - Seleccionar y modificar elementos
    - Tambien se le pueden añadir hijos a esos elementos
    - Asi como añadir contenido a los mismos
*/

'use strict'

// Haciendo uso del objeto document y el metodo que getElementsByTagName() se obtienen todos los elementos de la pagina cuya etiqueta sea la que espesifiquemos
var divs = document.getElementsByTagName("div");// Esto devolvera una conleccion de elementos HTML con todos los divs de la pagina

// Una coleccion de elementos HTML es como un arreglo que contiene en cada indice un elemento (por lo general todos de la misma etiqueta)
for(let i in divs){// Se pueden recorrer usando un for  in
    console.log(divs[i]);
    // Nota: No se puede usar foreach, porque solo sirve con arreglos y strings. No puede iterar Colecciones HTML
}

// Y tambien se pueden mostrar por consola
console.log(divs);

// Para obtener texto que contiene un div se usa el metodo "textContent" - Obtiene todo lo que hay dentro de una etiqueta o elemento omitiendo las subetiquetas (o hijos), es decir, si toma el texto pero no la etiqueta como tal
console.log(divs[1].textContent);// <-- Devuelve el texto que esta dentro de el div ubicado en el subindice 1 de la coleccion de elementos divs

// Tambien se puede obtener el contenido de un elemento con innerHTML - Este devuelve una cadena de texto con todo lo que hay dentro del elemento incluyendo etiquetas y el formato en el que se escribio en el HTML
console.log(divs[1].innerHTML);// <-- Devuelve el HTML que esta dentro de el div ubicado en el subindice 1 de la coleccion de elementos divs

// Creacion de elementos y subelementos
// Con el metodo createElement("tagname") - Se puede crear un elemento HTML y guardarlo ya sea en una variable o usarlo para alguna funcionalidad
var p = document.createElement("p");

// Con el metodo appendChild() Aplicado a un elemento HTML, se le asigna un hijo a ese elemento, es decir, un subelemento
p.appendChild(document.createTextNode("Texto de ejemplo"));// <-- En este caso el subelemento es un texto o "textnode", creado con el metodo CreateTextnode

// Con la misma funcion le asignamos el hijo p al elemento divs[1] - Que es un div en el HTML (en este caso se usa append solamente, es lo mismo pero mas corto)
divs[1].append(p);// Con append o appendchild: Se añade un elemento hijo al final de el elemento que se le aplique el metodo. Es decir el elemento se añadira al final de todo el contenido de dicha etiqueta u elemento independientemente de los elementos(etiquetas) que ya tenga dentro

// Tambien se pueden añadir subelementos al inicio del contenido de un elemento: Es decir ensima, esto se logra con prepend
divs[1].prepend(document.createElement("p"));
/*
Lo que se hizo fue: 
    - Crear un elemento y guardarlo en p (que es una etiqueta parrafo)
    - A ese elemento crearle un subelemento o subetiqueta (etiqueta dentro), en este caso en vez de etiqueta es un nodo de texto o simplemente texto (Es decir dentro del parrafo, texto)
    - Y por ultimo a divs[1] se le asigno como hijo el elemento que se definio dentro de p
*/

/*

Notas: 
    - Se pueden seleccionar todos los elementos de una sola etiqueta con el metodo getElementByTagName("tag") - Ingresando como parametro el nombre de la etiqueta
    - Se pueden crear elementos con js usando el metodo CreateElement("tag") - Ingresando el nombre de la etiqueta que se desa crear
    - Se pueden agregar subelementos a un elemento creado u obtenido con js - Usando prepend y append para añadir al inicio y al final
    - Se pueden editar tanto el contenido textual de un elemento como el HTML que contiene una etiqueta
    - Se puede añadir texto a un elemento con createTextNode("Texto")
    
*/