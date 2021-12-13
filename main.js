/*
    Funciones | Metodos para transformar textos
    - Las variables initernamente se interpretan como objetos por lo que tienen metodos para manejar su contenido
    - Existen muchos metodos para trasformar cadenas de texto y variables
    - Para usar un metodo se usa el nombre de la variable (u objeto) seguido de un punto y el nombre del metodo
*/

'use strict'

var numero = 586;
var texto = "Texto de relleno";
var texto2 = "Texto de relleno 2";

/*

Metodos para manejo de texto:
    - tostring(): Convierte la variable en un string
    - touppercase(): Convierte un texto en mayusculas
    - tolowercase(): Convierte un texto en minusculas
Otros metodos:
    - lenght: En este caso no se usa los parentecis, pero sigue siendo un metodo. Devuelve la longitud de un string o del contenido de una variable
    - concat(): Concatenar texto a una variable, enviadolo como parametro. 
*/

// Metodos para manejo de texto
var dato = numero.toString();
    dato = texto.toUpperCase();
    dato = texto2.toLowerCase();

console.log(dato);

// Metodo leght
var nombre = "Diego Oropeza";

console.log(nombre.length);

// Metodo concat()
var finaltext = texto.concat(", otro texto de relleno...");

console.log(finaltext);

/*

Nota: Los metodos no se aplican a las variables, es decir, si usas un metodo en una variable por ejemplo para convertir su contenido a mayusculas
entonces, esa instancia sear en mayuscula, sin embargo, no cambiara el valor de la variable. Para cambiar el valor, lo recomendable es redefinir el valor de la variable
por el valor que da como resultado el uso del metodo

*/