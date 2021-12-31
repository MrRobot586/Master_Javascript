/*
    LocalStorage en JS | Ejercicio completo: Explicacion del video
        Crear una lista de pelicuas en la que se puedan eliminar y crear elementos
        (Utilizando, eventos y el localstorage)
*/

'use strict'

window.addEventListener('load',function (){

    if(localStorage != undefined){// Comprobamos de que el localstorage es compatible con el navegador
        
        var form_p = document.getElementById("formpelis");// Obtenemos el formulario

        form_p.addEventListener('submit', function (event){// Capturamos el evento submit
            
            //event.preventDefault();// Prevenimos el default del evento, que es recargar la pagina

            var titulo = document.querySelector('#p_titulo').value;// Obtenemos el valor del elemento con el id "p_titulo"
            
            if(titulo.length >= 1){// comprobamos si el texto cabturado no esta vacio
                localStorage.setItem(titulo,titulo);// Y creamos un elemento en el localstorage con el nombre de ese texto
            }

            // Mostrar los elementos
            var ul = document.getElementById("peliculas_list");// obtenemos el elemento lista del body

            for(let i in localStorage){// Recorremos los elementos del localstorage (si, se pueden recorrer los elementos del objeto localstorage con un for)
                var li = document.createElement('li');// Creamos un item para añadir a la lista
                
                if(typeof(localStorage[i]) == 'string'){// Añadimos un elemento si es que la iteracion del localstorage es un string
                    li.textContent = localStorage[i];// Entonces le asignamos el contenido de esa iteracion al item de lista
                    ul.append(li);// Y el item a la lista
                }
            }
            
        });

        // Formulario para eliminar elementos
        var form_p_d = document.getElementById("formpelis_del");// Obtenemos el formulario

        form_p_d.addEventListener('submit', function (event){// Capturamos el evento submit
            
            //event.preventDefault();

            var titulo = document.querySelector('#p_titulo_del').value;// Obtenemos el elemento a eliminar del formulario (ubicandolo con el id)
            
            if(titulo.length >= 1){// Si es un elemento valido lo eliminamos
                localStorage.removeItem(titulo);// Removemos el elemento del localstorage
            }
            
        });

    }else{
        console.log("LocalStorage no disponible en este navegador...");
    }

});