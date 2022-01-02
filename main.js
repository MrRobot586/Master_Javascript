/*
   Fechas en JavaScript - Las fechas en javascript se instancian con el objeto Date
        Con date, se puede acceder a la fecha actual. 
*/


'use strict'

window.addEventListener('load',function (){

    var fecha = new Date;// Para obtener la fecha actual, se instancia un nuevo objeto date y se asigna a una variable

    // Para sacar dia, mes o año de una fehca, se usa el objeto resultante seguido de un metodo como por ejemplo .month() para sacar el mes
    var texto_fecha = `
        Fecha completa: ${fecha}
            - El dia es: ${fecha.getDate()}
            - El mes es: ${fecha.getMonth() + 1}
            - El año es: ${fecha.getFullYear()}
    `;

    // Nota: Tomar en cuenta que algunos resultados son en base a 0, es decir, month devuelve 0 cuando se refiere al mes 1 (enero)
    console.log(texto_fecha);// Salida de prueba

});
