/*
    TypeScript - Tipos de datos y variables
    
    - Definicion de variables | Tipado fuerte: Las variables se definen con let o var y para definir su tipo de dato, se colocan ":" seguido de tipo de datos.
      Una vez asignado el tipo de dato, este es estatico, osea no se puede asignar un dato de otro tipo a esa variable.
      Los tipos de datos son:
        string: cadena de texto
        number: numero
        boolean: true o false
        any: Cualquier tipo de dato | Basicaimente tipado debil. Se puede cambiar el tipo de dato posteriormente
        arrays: Colecciones de elementos

      En caso de reasignar un valor de otro tipo a una variable cuyo tipo ya fue asignado, el compilador dara un error, pero se pasara por alto,
      solo dara la advertencia y compilara finalmente en JavaScript.
    
    - Multiples datos: Se pueden asignar multiples tipos de datos a una misma variable, usando la pipe "\", se asigna otro tipo de dato a una variable.
      
      ejemplo: let variable: number | string = "Verga";

    - Tipos de datos personalizados: Se pueden definir tipos de datos personalizados con la palabra type seguido del pseudonombre del tipo de dato
      para despues asignar los tipos de datos aceptados como si fuece una variable:
    
      ejemplo: type datopersonalizado = number | boolean; // Este tipo de dato acepta numeros y booleanos
    
    - Var vs Let: La diferencia es que let funciona a nivel de bloque y var a nivel global (o de scope).
      Es decir, let funciona dentro de un if, si es definido ahi su alcanze se limita a ese bloque, mientras que 
      var si se define una variable a nivel de funcion entonces esa vairable estara presente en bloques de esa funcion.

    - Definicion de funciones con parametros de tipado fuerte: Con typeScript se pueden definir los tipos de datos que entran y salen de una funcion.
      Es decir sus parametros y el valor que devuelve:

      ejemplo:
      
      function nombre(parm:number):string{
        ...
      }

      Como se aprecia solo se coloca ":" seguido de el tipo de dato del parametro y luego de los parentecis donde van los parametros
      ":" y el tipo de dato que devolvera al funcion al ejecutarse. En este caso recibira un numero y devolvera un string.
*/

// Variables y tipado fuerte:

let cadena:string = "Cadena de texto";// String

let numero:number = 18;// Numerico

let booleano:boolean = true;// Booleano

let any:any = 16;// Any
any = "Dieciseis";

var lenguajes:Array<string> = ["PHP", "JS", "CSS"];// Array | Definicion 1: Definiciendo el nombre, seguido de la palabra Array y el tipo de datos que tiene el array

var numeros:number[] = [1,2,3,4,5];// Array | Definicion 2: Definiendo el nombre el tipo de dato del array y corchetes, para despues igualar los valores del array


// Multiples tipos de datos en una variable:

var nombre: string | number = "Diego Oropeza";// Con el pipe "|" se pueden asignar 2 tipos de datos validos para una variable. En este caso son validos strings y numeros, como valores para "nombre"


// Tipos de datos personalizados:

type letrasonumeros = string | number;// Con la palara reservada "type" se define un tipo de dato personalizado

var nuevodato: letrasonumeros = "Diego Oropeza";


// Let Vs Var:

var numero1:number = 10;
var numero2:number = 12;

if(numero1 == 10){
  let numero1: number = 44;
  var numero2 = 55;// Esto reasignara o redefinira la variable ya existente
    

  console.log(numero1, numero2);// Salida de prueba
}

console.log(numero1, numero2);// Salida de prueba 2


// Funciones y el tipado fuerte en TypeScript:

function getnumero(numero:number = 12):string{// Esta funcion recibe un numero
  return "El numero que devuelve la funcion es: " + numero;// Y devuelve un string
}

console.log(getnumero());
