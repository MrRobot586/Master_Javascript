/*
    Arrays - Arreglos | Buscar en un array 
    - 
*/

'use strict'

// Array de prueba
var numeros = ["5","8","6","4"];
var precios = [80,90,10,20,40];

var Busqueda = "";

// Busqueda usando el metodo find: Usando una funcion anonima (callback), enviando como parametro numero y comparandolo con el valor que buscamos, podemos comprobar si este existe o no.
Busqueda = numeros.find(function(numero){
    return numero == "5";// Devuelve undefined si el valor no existe y devuelve el valor en cuestion si es que lo encuentra
});

// Salida para la prueba
console.log(Busqueda);

// Reducir el codigo usando una funcion de flecha: Se reduce el codigo a una sola linea, omitiendo los parentecis de los parametros, las llaves que encierran el codigo de la funcion y el return de la funcion. Colocando como unico codigo dentro de la funcion la comparativa entre el parametro y el valor buscado
Busqueda = numeros.find(numero => numero == "5");

// Salida de prueba
console.log(Busqueda);

// Para encontrar el indice de un array se usa el metodo findIndex: Usando exactamente la misma formula del anterior metodo find.
Busqueda = numeros.findIndex(numero => numero == "5");// Recordar que la comparativa debe ser con el mismo tipo de dato!!, la funcion devolvera -1 si no encuentra el valor

// Salida de prueba
console.log("Busqueda: ", Busqueda);

// Para comprobar si existe cierto valor en un array: Se usa el metodo some, que compara y devuelve true o false en caso de que encuentre o no el valor dado.
Busqueda = precios.some(precio => precio >= 20);// Este metodo solo devuelve true o false.

// Salida de prueba
console.log(Busqueda);

/*
Notas:
    - La diferencia entre esots metodos de busqueda y los vistos en la clase de funciones, es que aquellos son para strings y estos son para arrays.
*/