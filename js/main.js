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
        let theme = "css/styles-red.css";
        changetheme(theme);
    });

    green.click(function (){
        let theme = "css/styles-green.css";
        changetheme(theme);
    });

    blue.click(function (){
        let theme = "css/styles-blue.css";
        changetheme(theme);
    });

    // Plus: Hacer que el color seleccionado se guarde en el local storage y que se carge automaticamente ( es decir que persista)
    if(localStorage.getItem('theme') && localStorage.getItem('theme') != ''){// En este caso con un poco de logica y una funcion para establecer el tema
        changetheme(localStorage.getItem('theme'));// Detectamos si en el localstorage hay un item "theme" y en caso contrario ejecutamos una funcion que lo crea con un valor por defecto
    }else if(localStorage.getItem('theme') == undefined){
        changetheme();
    }

    // Scroll animado hacia el top de la pagina | Usando jquery

    /*
        USando un boton activaremos una animacion de scroll hacia arriba para volver al inicio de la web.
        Basicamente capturamos el enlace o boton de ir arriba, capturamos y prevenimos el evento default (que es redireccionar)
        y aplicamos una animacion a la pagina completa.
    */

    $('#ir_arriba').click(function (e){// Capturamos el evento click en el boton con el id ir_arriba
        e.preventDefault();// Cancelamos su comportamiento por defecto (Redirigir la pagina)
        $('html, body').animate({// Aplicamos a html y body un animate enviando como parametro
            scrollTop: 0// Un json con la animacion, deseada, en este caso "scrollTop" que hace scroll hacia arriba hasta x pixeles (en este caso hasta el pixel 0)
        },500);// Y como segundo parametros enviamos un entero que sera la duracion de la animacion
    });
});

// Esta funcion lo que hace es asignar el theme a la etiqueta link que carga el tema y guardar el valor en el localstorage
function changetheme(theme = "css/styles-green.css"){
    $('#theme').attr('href',theme);
    localStorage.setItem('theme',theme);
}