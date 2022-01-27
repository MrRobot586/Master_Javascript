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
    if(location.href.indexOf('index') > -1){
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

    // Login falson

    /*
        Para esto usaremos un sistema en el cual guardaremos la sesion del usuario en el localstorage y pondremos en el body
        los datos del usuario cuando inicie sesion y en caso de que ya halla una sesion activa, entonces esta permanecera.

        La dinamica es simple, se guardan los datos del usuario en el localstorage con la key de "sesion" de esta forma verificaremos si el usuario 
        esta en sesion o no.
    */

    // Hacemos referencia a dos divs de el aside, uno es para la sesion y otro para iniciarla
    const sesion_div = $('#sesion_on');
    const login_div = $('#indentification');

    // Verificamos que en el localstorage exista la key "sesion"
    if(localStorage.getItem('sesion')){

        // Antes que nada mostramos y ocultamos el contenido de los divs que corresponda
        sesion_div.show();// En este caso mostramos el de sesion porque habria una sesion activa
        login_div.hide();

        // De ser asi, decodificamos el  json string que contiene como valor 
        let sesion = JSON.parse(localStorage.getItem('sesion'));

        // Encontramos el span dentro de el div con el id "sesion_on"
        sesion_div.find('span')[1].append(sesion.nombre);// Y le colocamos como hijo el nombre del usuario en sesion
        sesion_div.find('p').append(`<br><a href="#">Cerrar sesion...</a>`);// Ademas colocamos un boton para cerrar sesion en el parrafo que esta dentro de este mismo div

        // Añadimos funcionalidad a ese boton o enlace
        sesion_div.find('a').click(function(e){
            e.preventDefault();// En este caso cancelamos el comportamiento por defecto
            localStorage.removeItem('sesion');// Eliminamos la sesion
            location.reload();// Y recargamos la pagina
        });

    }else{

        // Mostramos y ocultamos los divs correspondientes
        sesion_div.hide();// EN este caso mostramos el div de login porque se va a iniciar sesion
        login_div.show();

        // Escuchamos el evento submit en este formulario
        login_div.submit(function (e){ 
            e.preventDefault();// Cancelamos la recarga de la pagina

            // Obtenemos los valores con jquery y los guardamos en variables
            let nombre = $('#register_form input[name="nombre"]').val();
            let email = $('#register_form input[name="mail"]').val();
            let pass = $('#register_form input[name="pass"]').val();

            // Comprobamos que no este vacios y procedemos a crear la sesion
            if(nombre != '' && email != '' && pass != ''){
                localStorage.setItem('sesion',JSON.stringify({
                    nombre: nombre,
                    email: email,
                    pass: pass
                }));

                location.reload();// Ademas de recargar la pagina
            }else{// En caso de estar vacios avisamos al usuario
                alert("Rellene todos los campos del formulario de login para poder iniciar sesion...");
            }
        });
    }

    // Crear acordeon  de informacion | Jquery UI

    /*
        Usando Jquery UI, crearemos un acordeon aplicando el metodo correspondiente a la seccion "sobre mi"
        Claro en tanto estemos en el archivo de la pagina correspondiente, es decir en el archivo "sobre_mi.html"
    */
    if(location.href.indexOf('sobre_mi') > -1){// Verificamos que estemos ahi
        $('#sobre_mi').accordion();// Y aplicamos el metodo
    }

    // Reloj en linea | Usando set interval y momentJS

    /*
        Usando setinterval crearemos un reloj que se actualice cada segundo. 
    */
    if(location.href.indexOf('reloj') > -1){// Obviamente verificamos que estemos en la pagina que corresponde al reloj
        setInterval(() => {// Creamos un intervalo con un callback como primer parametro
            $('#reloj #hora').text(moment().format('hh:mm:ss A'));// Despues seleccionamos en h2 con el id hora dentro del elemento con id reloj y cambiamos su texto por la hora actual usando momentJS
        }, 1000);// El segundo parametro como siempre sera el intervalo, en este caso cada un segundo...
    }
    
});

// Esta funcion lo que hace es asignar el theme a la etiqueta link que carga el tema y guardar el valor en el localstorage
function changetheme(theme = "css/styles-green.css"){
    $('#theme').attr('href',theme);
    localStorage.setItem('theme',theme);
}