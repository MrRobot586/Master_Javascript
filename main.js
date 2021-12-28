/*
    Ejercicio Parte 2 | Validacion del formulario

*/

'use strict'

window.addEventListener('load', () =>{

    // FUncion para comprobar los campos | Esta funcion recibe un array con los campos a validar y verifica que no este vacios
    function comprobarcampos (campos){
        if(campos.length > 0){// Verifica que la logitud del array sea mayor que 1
            var invalidinputs = [];// Array para almacenar los campos vacios o "invalidos" | Almacenara los nombres

            for(let i = 0; i < campos.length; i ++){// For para recorrer el array
                if(campos[i].value != ''){// Verificar si el campo en el que se itera esta vacio, si no es asi
                    if(isNaN(campos[i].value)){// Comprobar si no es un numero
                        // Quitar los espacios al inicio y final con trim
                        let string = campos[i].value;
                        string.trim();
                        campos[i].value = string;
                    }
                }else{// En caso de que el campo este vacio
                    invalidinputs.push(campos[i].name);// Se guarda su  nombre en el array
                }
            }

            if(invalidinputs.length > 0){// Si la longitud del array que contiene los errores es mayor que cero | Significa que hubo campos vacios, por tanto se procede a alertar
                
                if(invalidinputs.length == 1){// Si es solo uno | Es decir solo existe una posicion en el array
                    alert(`[Error] - El campo "${invalidinputs[0]}" esta vacio...`);// Se envia una alerta
                }else{// Si existen mas
                    let invalids = "";// Se arma un array con los nombres de los campos que estan vacios
                    for(let i = 0; i < invalidinputs.length; i ++){
                        invalids += invalidinputs[i] + ", ";
                    }
                    // Se alerta al usuaro usando el array para señalar los campos
                    alert("[Error] - Existen campos vacios en el formulario...\nLos campos "+ invalids +" estan vacios...\nLlenalos antes de envaiar el formulario.");
                }
                // Se hace return false para que acabe la funcion
                return false;

            }else{// Caso contrario, los campos fueron validos y se hace el return del array para que se use 
                return campos;
            }

            
        }
    }

    // Codigo reciclado del anterior ejercicio | Un poco modificado
    var form = document.getElementById("formulario");

    var datos_html = document.getElementById("datos_usr");

    datos_html.style.display = 'none';
    
    form.addEventListener('submit',(event) =>{

        event.preventDefault();

        var datos = [];

        datos.push(document.getElementById("nombre"));
        datos.push(document.getElementById("apellido"));
        datos.push(document.getElementById("edad"));

        datos_html.innerHTML = "";

        if(datos = comprobarcampos(datos)){
            /*
                Se ejecuta la funcion en el condicional, igualando la el array de los datos a la misma y enviando como parametro el mismo array.
                El resultado de esa ejecucion sera tomado en cuenta para el condicional, si devuelve true ejecutara el codigo
                si es false, no. Excepto que no devolvera true, sino un array nuevo entonces, si devuelve algo que no es false se considera true y pasa el condicional
            */
            
            var h3 = document.createElement('h3');
            h3.textContent = "Datos del usuario: ";
            datos_html.prepend(h3);
            
            var lista = document.createElement('ul');

            for(let i in datos){
                let li_content = document.createElement('li');

                let b = document.createElement('b');

                b.textContent = datos[i].name + ": ";

                li_content.append(b);

                li_content.append(datos[i].value);

                lista.append(li_content);

            }

            datos_html.append(lista);

            datos_html.style.display = 'block';
        }
    });

});