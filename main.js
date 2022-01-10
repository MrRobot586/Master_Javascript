/*
    Jquery en JavaScript | Dom y textos 
        En este caso veremos un pequeño ejercicio, donde destacaremos la potencia de jquery
*/

'use strict'

$(document).ready(function (){
    /*
        En el html hay una lista de enlaces y un formulario para añadir nuevos elementos.
        Con lo cual debemos hacer que esta "lista interactiva", funcione...
            - La lista esta hecha de enlaces que no tienen un "texto"
            - El boton para añadir nuevos elances esta deshabilitado
    */

    // En este caso se hizo una funcion que recarga los links y les pone de nombre el propio enlace
    reload_links();// Invocacion de la funcion

    const addlink_form = $('#add_link_form');// Usando Jquery obtenemos el elemento form del HTML por su ID
    
    // Tambien obtenemos el boton del formulario, esta vez por su atributo "value"
    $('[value="Añadir"]').removeAttr('disabled');// Y quitamos el atributo disabled, para activarlo y que se pueda precionar

    // Usando el metodo .submit detectamos el evento "submit" en el formulario
    addlink_form.submit(function (e) {// En este caso recibimos el evento
        
        e.preventDefault();// y cancelamos el comportamiento por default de este (que es recargar la pagina)

        const link = $('[name="add_link"]');// Obtenemos el input donde se escribe el link | Por su atributo "name"

        const link_list = $('#links');// Y tambien la lista de links, esta ves por su ID
        
        if(link.val() != ''){// Comprobamos que el link no este vacio y armamos un item para la lista con un enlace que contenga ese link
            const li = document.createElement('li');// Creamos un LI
            let a = document.createElement('a');// Luego un A
            a.href = link.val();// A el elace le añadimos el atributo Href y como valor le ponemos el link del input
            li.append(a);// Le asignamos como hijo el enlace al item para la lista
            link_list.append(li);// por ultimo, a la lista le asigamos como hijo el item
            link.val('');// y le quitamos el valor al input de donde se saco el link
            reload_links();// Ejecutamos la funcion para colocar de nombre los links de los enlaces
        }

    });
    
});

// Funcion para darle nombre a cada enlace - El nombre sera su propio link
function reload_links() {
    const a = $('a');// Obtenemos todos los enlaces
    
    a.each(function(){// Con el metodo each(), recorremos todos los A capturados con jquery
        // Creamos una valirable para almacenar el link de los enlaces
        let href = $(this).attr('href');// Lo igualamos a el valor del atributo del elemento (haciendo referencia con this)
        $(this).attr('target','blank');// Con el mismo metodo attr(), se pueden poner nuevos atributos y tambien cambiar los ya existentes, ademas de obtener su valor
        $(this).text(href);// Por ultimo al propio elemento (en el que se esta iterando), se le añade como texto el enlace
    });
}