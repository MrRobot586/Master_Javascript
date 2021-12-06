/*
    Bloque 1 de ejersicios 

    - Utilizando un bucle mostrar la media y la suma de los nuemros introducidos por el usuario hasta que se digite un numero negativo y en ese caso se mostraria el resultado
*/

'use strict'

// Inicializacion de las variables
var suma = 0;
var contador = 0;
var numero = 0;

// Con un do while se iniciara la operacion y luego se evalua la condicion
do{
    numero = prompt("Ingresa un numero para la suma: ");// Le metemos un valor a numero

    if(numero != ''){// Si numero no esta vacio
        if(isNaN(numero)){// Se comprueba de que efectivamente es un numero, si no lo es:
            alert("El dato que ingresaste no es un numero... Intentalo de nuevo!");// Se muestra una alerta
            numero = 0;// Se iguala a cero la variable
        }else{// Si la variable es un numero
            numero = parseInt(numero);// Se convierte a numero( Porque lo que devuelve prompt es un string)

            if(numero >= 0){// Se comprueba de que es positivo
            
                suma += numero;// Se efectua la suma
                contador ++;// y se itera el contador
                
                // Con el contador y la suma total se ira sacando la media, dividiendo entre contador el total de valores sumados
                alert("La media hasta ahora es: " + (suma / contador) + "\nLa sumatoria total va en: " + suma + "\n Se han sumado " + contador + " numeros hasta ahora...");
            }else{// en caso de que numero no sea mayor que 0 (osea negarivo)
                break;// Se rompera el ciclo
            }
        } 
    }else{//en caso de que el numero este vacio
        alert("El valor digitado esta vacio, intentalo de nuevo.");// Se muestra una alerta
    }

}while(numero >= 0 || numero == '');

// Luego de terminar la operacion: 
if(suma > 0 && contador > 0 ){
    
    console.log("La suma total de los numeros dio: " + suma + ", la media total dio: " + (suma / contador) + ", la cantidad de numeros sumados fue: " + contador);

}else{
    console.log("La suma no se completo exitosamente o fue cancelada.");
}