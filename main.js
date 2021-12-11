/*
    Funciones | Funciones dentro de otras
    - Se pueden usar o invocar funciones dentro de otras, asi como tambien se pueden definir
*/

'use strict'

// Se pueden tener varias funciones e invocarlas unas dentro de otras
// Codigo reciclado
function ejemplo(n1 = 0, n2 = 0){
    
    if(n1 == 0 || n2 == 0){
        return "Espesifique los numeros para sumar";
    }else{
        return ("La suma dio como resultado: " + (n1 + n2));
    }

}

// En este caso existe la funcion "ejemplo" que recibe 2 parametros y devuelve un mensaje si no se espesifican parametros y el resultado si si los espesifican

function porconsola(){// Esta funcion dentro hace un console.log de el resultado (return) de la funcion ejemplo
    console.log(ejemplo());// Esto imprimira lo que devuelva la funcion, en este caso un mensaje de error porque no hay parametros espesificacos
}

function porpantalla(){// Por otro lado esta funcion hace un document.write de la misma funcion
    document.write(ejemplo(123, 44));// Imprimiendo un mensaje con el resultado de la suma, ya que se espesificaron los parametros
}

// Nota: La funcion ejemplo, esta siendo llamada en ambas funciones
// Nota2: No olvidar ejecutar las funciones para comprobar
// Nota3: El orden en el que se definan las funciones no afecta si una puede o no ser llamada dentro de otra, es decir, una funcion no debe ser definida antes de ser llamada dentro de otra. Bien puede ser definida despues de esta.

// Invocacion de las funciones  
porconsola();

porpantalla();