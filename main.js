/*
    Indroduccion al DOM - Es el conjunto de etiquetas que confirman la pagina web
    - Es un objeto cuya funcion es proporcionar facil acceso a los elementos de la web para modificarlos mediante sus propiedades
    - Para acceder a algun elemento se usa el objeto o funcion "Document" seguido de un metodo para seleccionar un elemento en concreto
    - Los metodos de seleccion pueden seleccionar un elemento por ID, clase o incluso un quieryselector (que son los que se usan en CSS)
    - Para usar y cambiar los valores de un elemento del DOM es necesario, obtenerlo para ello se le asigna a una variable mediante el objeto document y un metodo
*/

'use strict'

// Para seleccionar u obtener un elemento del HTML se puede igualar una variable al objeto "document.propiedad"
var h = document.getElementById("head");// En este caso obtenemos un elemento por ID que seria HEAD - Document.GetElementByID("Id del elemento")

// De esta forma podremos ver que tiene dentro la variable H - Contiene un objeto que representa el elemento en el HTML
console.log(h);

// A partir de la asignacion la variable se convierte en un objeto, con distintos metodos para modificar sus atributos
h.innerHTML = "Master en Javascript - by: VictorRoblesweb.es";// Utilizando la el nombre de la variable seguido de un metodo se pueden editar las propiedades del objeto (osea el elemento)
// Existen distintos metodos, el metodo innerHTML sirve para editar el HTML dentro de dicho elemento (en este caso dentro de p)

// Con el metodo style se pueden modificar los estilos del elemento seleccionado, aplicando la propiedad deseada tambien como un sub metodo
h.style.background = "tomato";
h.style.padding = "15px";
h.style.color = "white";
h.style.textAlign = "center";

// Tambien se pueden seleccionar elementos con el metodo quierySelector("selector") - Con este se seleccionan los elementos como en CSS (Si es una clase con ".nombre" y si es id con "#id", lo mismo aplica para todo)
var p = document.querySelector("#parrafo");// En este caso seleccionamos u obtenemos el elemento del DOM cuyo ID es parrafo (#parrafo)
p.innerHTML = "El D.O.M en JS: Document Object Model, sirve para modelar los diferentes elementos de una web.";// Y editamos el HTML dentro del mismo - El metodo innerHTML obtiene todo el contenido de una etiqueta

// Ahora usando una funcion, se puede recibir un objeto (el elemento) y cambiar sus estylos con algun otro valor obtenido como parametro
function cambiarcolor(elemento, color){
    elemento.style.background = color;// En este caso se le cambia el color de fondo
}
