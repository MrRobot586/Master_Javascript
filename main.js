/*
    Ejersicio completo DOM, Eventos y funciones
        1. Formulario: nombre, apellidos y edad [x]
        2. Boton para enviar el formulario: evento submit [x]
        3. Mostrar datos por pantalla [x]
        4. Boton que al darle click muestre los datos por pantalla [x]

*/

'use strict'

window.addEventListener('load', () =>{// Ejecucion del JS tras la carga de la pagina
    
    var form = document.getElementById("formulario");// Obtenemos el formulario HTML con el ID
    
    form.addEventListener('submit',(event) =>{// Añadimos un eventlistener y escuchamos el evento 'submit' | Se puede analizar este evento gracias al tipo de elemento
        /*
            El parametro event: Almacena el evento como tal, este puede servir para crear funcionalidades en torno a los datos que contenga el objeto dentro de dicha variable
        */
        event.preventDefault();// Este metodo, previene la carga de la pagina cuando se envie el formulario, esto aplicado al eventu submit

        var datos = [];// Creamos un array vacio para los datos que se recibiran del formulario

        // Rellenamos dicho array con los 3 datos | Usando el metodo push para construir el array
        datos.push(document.getElementById("nombre"));// Cabe destacar que se obtiene el elemento HTML como tal
        datos.push(document.getElementById("apellido"));// No el valor, esto es para poder interactuar con sus diferentes atributos
        datos.push(document.getElementById("edad"));// Como el valor y el nombre del campo en este caso, ya que se obtienen inputs desde el HTML

        var datos_html = document.getElementById("datos_usr");// Obtenemos la seccion donde se colocaran los datos

        // Creacion de titulo para la seccion de donde se mostraran los datos 
        var h3 = document.createElement('h3');
        h3.textContent = "Datos del usuario: ";

        datos_html.prepend(h3); // Colocamos el h3 por ensima, como hijo del la seccion

        // Un poco de logica en caso de que el formulario este vacio xd
        if(document.getElementById('nombre').value == '' || document.getElementById('apellido').value == '' || document.getElementById('edad').value == ''){// Si alguno de los campos esta vacio
            datos_html.append(document.createTextNode('[Vacio] - El formulario esta vacio o algun dato no esta lleno...'));// Mostrar este mensaje en vez de los datos..
        }else{// Caso contrario | En caso de que si existan los datos
            var lista = document.createElement('ul');// Creamos un elemento de lista desordenada
        
            for(let i in datos){// Usando un for in iteramos en el array de los datos
                let li_content = document.createElement('li');// Creando items para la lista

                let b = document.createElement('b');// Ademas de un elemento b para poner en negrita el titulo de cada elemento

                b.textContent = datos[i].name + ": ";// Asignamos  el nombre de cada elemento dentro del b + un detalle que son los ": " para diferenciar el titulo del valor

                //b.append(datos[i].name + ": ");// El codigo de arriba tambien se puede hacer con append de esta manera

                li_content.append(b);// Asignamos como hijo el b (que contiene el nombre del elemento y el detalle de ": ") al item de la lista

                li_content.append(datos[i].value);// Por ultimo, al item le asignamos el valor del campo obtenido en la iteracion actual (osea i)

                lista.append(li_content);// Y a la lista se le añade el elemento

                /* En resumen: Basicamente se construyo el item de la lista para despues asignarlo a la lista y se le fueron añadiendo elmentos a la lista en cada iteracion,
                por lo que se construyo la lista en el bucle y el resultado se incrusto en la seccion correspondiente. */
            }

            datos_html.append(lista);// Ahora solo metemos esa lista en la seccion donde van os datos del usuario y ya sera visible

        }
    });

});