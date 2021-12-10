/*
    Funciones | Parametros opcionales
    - Existen parametros que ya estan inicalizados (tienen un valor predeterminado)
    - Por lo que no son espesificamente necesarios a la hora de invocar la funcion
    - Al contrario de los parametros normales que tienen que ser espesificados para que el codigo se ejcute bien
*/

'use strict'

// FUncion que suma 2 numero (que recibira como parametros)
function ejemplo(n1 = 0, n2 = 0){// Espesificamos un valor en la definicion de los parametros y la funcion
    
    if(n1 == 0 || n2 == 0){// Si los valores tienen el valor por defecto (0)
        return "Espesifique los numeros para sumar";// Devuelve esto
    }else{// Sino
        return ("La suma dio como resultado: " + (n1 + n2));// Devuelve un mensaje con la suma
    }

}

// Invocacion de la funcion sin parametros espesificados
console.log(ejemplo());

// Invocacion con parametros
console.log(ejemplo(123, 44));

/*

Nota: En este caso, creo que todos los parametros son opcionales asi tengan o no un valor asignado, ya que, 
aunque no se le asigne un valor igualmente se ejecuta la funcion sin embargo no tendra un resultado coherente
porque los valores no estan en los parametros, asi que un valor puede o no ser opcional dependiendo de si se toma
en cuenta en la logica de la funcion. Como en este caso verificar si las variables valen 0.

*/