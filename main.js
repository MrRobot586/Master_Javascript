/*
    Comentarios en JS
        - Son iguales que en cualquier lenguaje de programacion
        - Comentarios de mas de una linea se encierran entre diagonal y asterisco
        - Comentarios de 1 linea con doble diagonal 
*/


/*
    Variables en JS  
        - Se definen con la palabra "var" segido del nombre de la varaible y su dato
        - No tienen un tipo de dato asignado
        - El tipo de dato se asigna dependiendo de que dato se almacene:
            ejemplo: Si se almacena un string(osea dentro de comillas) el tipo de dato de la variable sera string
        - El contenido de una variable se puede mostrar o usar tanto dentro de la consola como en el codigo JS
        es decir que si se ejecuta "console.log(pais)" en la consola, esta mostrara el contenido  de esa variable.
        - Separando con comas, se pueden encadenar varias variables
        - Recordar que concatenar es añadir al final de una cadena de caracteres (string)
*/

var pais = "España"; // - Se asigna valor a una variable con "="
var continente = "Europa"; // - Variable de tipo string 
var año = 2020; // - Variable de tipo numerica (entero)

año = 2121; // - Reasignacion de valor de una variable

var pais_y_continente = pais+' - '+continente; // - Para concatenar se usa el signo "+", en este caso se concatena el contenido de una variable, un espacio y otra vairable

console.log(pais); // - Salida de datos

console.log(pais, continente, año); // - Salida de varios datos (mas de una variable)

console.log(pais," - ", continente," - ", año); // - Tambien se puede concatenar asi... Usando comas

console.log(pais_y_continente); // - Salida de datos 

alert(pais_y_continente); // - Tambien se puede mostrar una variable en una alerta

