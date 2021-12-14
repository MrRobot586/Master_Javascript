/*
    Funciones | Plantillas de texto
    - Utilizando comillas invertidas (``) Se pueden crear plantillas de texto
    - Utilizando ${nombre de la variable} se pueden interpolar (poner el valor) variables en una plantilla de texto
    - De forma que estas plantillas se pueden usar para crear formatos de html en javascript que luego se pueden imprimir en el body
*/

'use strict'

// Pedimos datos al usuario para llenar variables
var nombre = prompt("Indica tu nombre: ");
var apellido = prompt("Indica tu apellido: ");

// Creamos una plantilla de texto
var texto = `

<h1>Datos ingresados:</h1>
    <ul>
    <li>Nombre: ${nombre}</li>
    <li>Apellido: ${apellido}</li>
    </ul>
`;

// Notas: Todos los caracteres son tomados en cuenta dentro de las comillas invertidas, incluso los espacios

document.write(texto);