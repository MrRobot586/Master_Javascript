/*
    Operadores logicos en JS
    
    - Estos operadores sirven para componer condicionales mas complejos.
*/

'use strict'

/* 

&&  - And (y)
||  - Or (o)
!   - Negacion (no)

*/

//Negacion: Ejemplo - Que no se cumpla una igualdad en este caso

var year = 2028;

if(year != 2016){
    console.log("El año no es 2016!!, realmente es " + year);
}

//And: Ejemplo - Que se cumpla una condicion y otra

if(year >= 2000 && year <= 2021 && year != 2016){
    console.log("Estamos en la era actual!!");
}else{
    console.log("Estamos en la era pos-moderna.");
}

//Or: Ejemplo - Que se cumpla una condicion u otra
if(year == 2008 ||(year >= 2018 && year == 2028)){
    console.log("El año acaba en 8.");
}

// Nota importante: Recordar que tambien se pueden encapsular operaciones como se nota en el ultimo ejemplo.
// En ese caso, compara si año es igual a 2008 O si año es mayor que 2018 y ademas igual a 2028.