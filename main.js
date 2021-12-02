/*
    Tipos de datos y operadores 

    - Todas las operaciones en JS se ejecutan con los operadores correspondientes (como en todo lenguaje de programacion)
    - Los tipos de datos se pueden asignar automaticamente al darle un valor a la variable
    - Como observacion general en la consola del navegador, se muestra de color los valores numericos y de color negro los valores de texto
*/

// Operadores
'use strict'

var a = 1;
var b = 2;

var c = a + b; // Se pueden realizar operaciones con variables y asignar su resultado como valor a una nueva variable
var d = b - b; // Se puede hacer con todas las operaciones matematicas

console.log("El resultado de la suma de a + b es: " + c); // Se puede concatenar el valor de una variable con un string usando el signo "+"

console.log("El resultado de la resta de b - a es: " + d);

console.log("El resultado de la multiplicacion de a * b es: " + (a*b)); // De igual forma tambien se pueden concatenar opraciones pero esta vez encerrandolas entre parentecis

console.log("El resultado de la divicion de b / a es: " + (b/a)); // En este caso se imprime el resultado de la operacion, concatenando al final de la cadena de caracteres

console.log("El resto de la divicion entre b / a es: " + (b%a)); // El operador "%" devuelve el resto de la divicion entre 2 valores

// Tipos de datos basicos: Enteros(numero sin coma), char(caracter), string(cadena de texto), flotante(con coma decimal) y booleano(true o false)

var entnero = 100;// Numero entero
var caracter = 'a';// Caracter
var string = "Cadena de texto";//Cadena de texto
var bool = true;// Booleano - Verdadero o falso

//Las cadenas de texto y caracteres son casi lo mismo, la diferencia son las comillas

// console.log( --- ); //Probar imprimiendo cada variable

// Existen sentencias para convertir una variable a otro tipo de dato

var numero = "55"; // Este numero, es un string y aunque su valor si es numerico, no se podra usar en operaciones. Porque su valor se asigna como un string (usando comillas)

console.log(numero + 5); // La salida dara como resultado la concatenacion de "55" y el numero 5. (osea 555)

var numero = Number(numero); // Con la funcion Numeber() se convierte el valor de numero en uno numerico. Es decir, se reasigna el valor de la variable numero a la conversion de esa propia variable en un valor numerico
// En resumen se convierte el valor de numero (que es un caracter) en un valor numerico, para despues reasignar este valor a la propia vairable

console.log(numero + 5); // Por lo que la salida de esta sentencia sera "60", ya que el valor al valor de 55 se le sumo 5

// Tambien esta la funcion string() que convierte un numero (sea flotante o entero) en una cadena de texto

// Recordar que se puede reasignar usando var o simplemente igualando al nuevo valor. (usando var se redefiniria la variable en este caso solo se reasigna el valor)
numero = String(numero);// Se convierte la variable numero a string y se le reasigna su valor a la propia variable

console.log(numero + 586);// Lo que se imprimira sera el valor de numero concatenando "586" al final

// De esta forma la funcion, parseInt() convierte el valor de una variable a un valor numerico entero
numero = parseInt(numero);

console.log(numero + 5);// Por lo que al mostrarse por consola no tendra coma decimal, sino que sera un numero entero

// Y la funcion parseFLoat() convierte el valor de la variable a un valor numerico flotante(con decimiales)
numero = parseFloat(numero);

console.log(numero + 0.5);// Por lo que al mostrarse por consola, tendra coma decimal