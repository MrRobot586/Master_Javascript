/*
    Proyecto completo con JS y Jquery
        Este proyecto sera una practica para usar todos los conocimientos adquiridos en el curso
*/

'use strict'

$(document).ready(function (){

    // Slider show | Usando el plugin bxslider
    $('#slidershow').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    /*
        Es muy facil, simplemente se incluyen los archivos de la libreria y se aplica el metodo al elemento.
        En este caso, pasamos como parametro un json que tiene las opciones del slider, como su animacion, etc...
    */

    // Posts dinamicos | Usando momentJS - Libreria para poner fechas con disntintos formatos
    var posts = [
        /*
            Creamos un array de objetos json que seran los post del sitio web
            Que bien podria ser una api rest de la cual pidamos los posts... (osea una base de datos)

            MomentJS: Es una libreria de JS que sirve para crear fechas de manera mas comoda y con un formato mas agradable
            Aca lo usamos para darle fecha a cada post de forma estatica, fijandosela a que se creo hoy mismo...
        */
        {
            title: "Prueba de titulo 1",
            date: `Publicado el ${moment().date()} de ${moment().format("MMMM")} del ${moment().year()}`, // En este caso formateamos la fecha con moment JS para que se vea lindo
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias dolore porro asperiores in maxime cum beatae repudiandae.
            Sit maxime error, dolor architecto laborum accusantium excepturi magnam aperiam ea possimus vitae.`
        },
        {
            title: "Prueba de titulo 2",
            date: `Publicado el ${moment().date()} de ${moment().format("MMMM")} del ${moment().year()}`,
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias dolore porro asperiores in maxime cum beatae repudiandae.
            Sit maxime error, dolor architecto laborum accusantium excepturi magnam aperiam ea possimus vitae.`
        },
        {
            title: "Prueba de titulo 3",
            date: `Publicado el ${moment().date()} de ${moment().format("MMMM")} del ${moment().year()}`,
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias dolore porro asperiores in maxime cum beatae repudiandae.
            Sit maxime error, dolor architecto laborum accusantium excepturi magnam aperiam ea possimus vitae.`
        },
        {
            title: "Prueba de titulo 4",
            date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().year(),
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias dolore porro asperiores in maxime cum beatae repudiandae.
            Sit maxime error, dolor architecto laborum accusantium excepturi magnam aperiam ea possimus vitae.`
        }
    ];

    
    // Comprobamos de que nuestro array no este vacio (un poco de logica)
    if(posts.length > 0){
        let article;// Creamos una variable auxiliar para crear los post de uno en uno

        posts.forEach(element => {// Recorremos el array
            // Con un templante string creamos el post con el contenido del elemento recorrido
            article = `
            <article class="post">
                <h2>${element.title}</h2>
                <span>${element.date}</span>
                <p>
                    ${element.content}
                </p>
                <a href="#" class="btn_leermas">Leer mas...</a>
            </article>
            `;    

            // Lo añadimos como hijo de la seccion de posts
            $('#posts_section').append(article);
        });
    }

    // Cambiador de temas | Usando distintos archivos CSS

    /*
        Se crea un archivo css general que tenga los estilos de toda la pagina y los backgrounds y colores dominantes se exportan a otros archivos
        que se cargaran luego del archivo principal, habran 3 variaciones de los colores de la pagina en 3 archivos distintos. Secargara uno de estos 
        por defecto (que sera el green).

        A la etiqueta "link" que carga el archivo css del tema por defecto se le asigna una id para poder capturarla y luego cambiar su href
        para hacer referencia a otro "tema" (o archivo css).

        Con ayuda de "botones" en los que capturamos el evento click (con jquery), cambiamos el href de la etiqueta link para hacer referencia a otro
        tema CSS. Es bastante facil, la verdad...
    */

    // Capuramos los botones
    const red = $('#to_red');
    const green = $('#to_green');
    const blue = $('#to_blue');

    // Cada boton sera un color espesifico, en este caso red
    red.click(function (){
        $('#theme').attr('href','css/styles-red.css');// Que al hacer click sobre este, cambiaremos el valor del atributo href a la direccion del styles-red.css
    });// Lo mismo aplica para los demas botones

    green.click(function (){
        $('#theme').attr('href','css/styles-green.css');
    });

    blue.click(function (){
        $('#theme').attr('href','css/styles-blue.css');
    });
});