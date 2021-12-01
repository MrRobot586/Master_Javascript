/*
    - Para activar el modo estricto de JS: Se usa la sentencia 'use strict' al principio de cada fichero JS
    - Este modo sirve para que el interpretador del navegador sea mas estricto con la sintacxis del lenguaje
    por lo que si por ejemplo, no se define una variable correctamente se mostrara un error. 
    - El lenguaje Javascript es debilmente tipado, por lo que si se define una variable asi:
        pais = "españa"; - Entonces el codigo funcionara sin problemas
    con el modo estricto esto no es asi, te mostrara un error, debe usarse la palabra reservada var.

    - Es recomendable usar el modo estricto para todos los ficheros JS
*/

//'use strict'

var continente = "Latinoamerica"; // Esto funcionara en modo stricto.
console.log(continente);

pais = "Venezuela"; // Esto no, pero si funcionara si no esta activado el modo stricto.
console.log(pais);

