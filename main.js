/*
    Constantes en JS

    - Una variable que no cambia en el transcurso del script
*/

'use strict'

var web = "https://victorroblesweb.es";// <-- Si se le puede cambiar el valor
const ip = "198.88.0.12";// <-- No se le puede cambiar el valor

web = "https://vitorroblescursos.es";// <-- Reasignacion del valor

//ip = "198.87.0.12";// <-- Da como resultado un error

console.log(web);

console.log(ip);// <-- Muestra el valor añadido en un inicio