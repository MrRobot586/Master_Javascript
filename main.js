/*
    Funciones | El ambito de las variables
    - Cada variable compete al ambito en el que es definida
    - Es decir, cada variable existira donde fue definida y por ende tambien dentro de las funciones que esten un nivel por debajo de ellas
*/

'use strict'
// Ejemplo: Estas variables esta definidas a nivel global
var texto = "Hola mundo soy una variable global";
var numero = 1;

function hola_mundo(texto){// esta funcion esta definida a nivel global, el parametro que recibe es interno

    var variable_interna = "Esto no se puede usar fuera de esta funcion";// Esta variable esta definida a nivel global de la funcion, es decir, dentro de la funcion

    console.log(texto);// Se puede usar los parametros definidos, solo internamente

    console.log(numero);// Se puede hacer uso de variables externas, que esten definidas a un nivel mas alto de la funcion

    console.log(variable_interna);// y por supuesto de las que estan dentro tambien se puede hacer uso

}

console.log(variable_interna);// Sin embargo, las variables definidas dentro de la funcion no son accesibles desde fuera

// Prueba de la funcion
hola_mundo(texto);

for(let i = 0; i < 10; i++){// Lo mismo para otras funciones, como la del bucle for
    console.log(i + ".");// La variable i solo existe dentro del bucle porque fue definida dentro del mismo
}