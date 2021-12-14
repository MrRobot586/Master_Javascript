/*
    Funciones | Metodos para cortar textos
    - Mas metodos para cortar textos y transformarlos
*/

'use strict'

var texto = "Este es un texto random";
var texto2 = "      Aca continua el texto random, otra vez colocamos la palabra random.     ";

// Reemplazar una palabra por otra dentro de un string | Metodo replace("Palabra a reemplazar","palabra nueva")
var nuevotexto = texto.replace("Este", "aquel");
console.log(nuevotexto);

// Cortar un string | Metodo slice(Posicion en la cual se terminara de cortar), se corta desde el inicio del string hasta donde se indique como primer parametro
nuevotexto = texto.slice(4);
console.log(nuevotexto);

// Cortar un trozo de un string | Se indican como parametros el inicio y el final del string que se cortara, lo que este fuera de esos limites se elimina del strig resultante
nuevotexto = texto.slice(0,4);
console.log(nuevotexto);

// Separar un string | Ejemplo: Si una oracion tiene varias palabras que estan separadas por espacios, o una lista esta separada por comas. Se puede usar el metodo split("Separador") para dividir cada una de las palabras en un array de strings
nuevotexto = texto.split(" ");// Este metodo toma la variable texto y separa cada una de las palabras que existan en la variable y que esten separadas por un espacio " "
console.log(nuevotexto);

// Quitar los espacios adelante y atras de un string | Si un string tiene espacios adelante o atras con el metodo trim() se pueden eliminar facilmente
nuevotexto = texto2.trim();// La variable texto2 tiene espacios adelante y atras, al hacer la conversion se quitan
console.log(nuevotexto);

