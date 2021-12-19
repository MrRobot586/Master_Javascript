/*
    Arrays - Arreglos | Ejersicio del bloque 2
    - Pida 6 numeros por pantalla y los almacene en un array (x) - Pedi mas de los que eran xd
    - Mostrar el array entero en el cuerpo de la pagina y en la consola | Todos sus elementos (x)
    - Ordenarlo y mostrarlo (x)
    - Invertir su orden y mostrarlo (x)
    - Mostrar cuantos elementos tiene (x)
    - Hacer una busqueda de un valor introducido por el usuario (Que diga si se encuentra y su indice) (x)
*/

'use strict'

// Easy B)

var elementos = [];// Recordar que se pueden definir arrays o variables vacios

var elemento_by_user;

// Pedir los numeros | Con logica para elegir a los que son y no son numeros
while(elemento_by_user = prompt("Es hora de crear un array\nPreciona cancelar para terminar o aceptar sin escribir nada...\nDigita un numero para añadir al array: ")){
    
    if(isNaN(elemento_by_user)){
        alert("Ingresa solo numeros, no letras!!");
    }else{
        elemento_by_user = parseInt(elemento_by_user); 
        elementos.push(elemento_by_user);
    }
    
}

// Funcion para crear una lista con los elementos
function crearlista(lista_de_elemntos){
    
    var lista;
    
    lista = `<ul>`;

    for(let element in lista_de_elemntos){

        lista += `<li>[${element}] - ${lista_de_elemntos[element]} </li>`;
        
    }

    lista += `</ul>`;

    return lista;
}

if(elementos.length > 0){// Si se creo el array

    // Mostrar lista en el body
    document.write("<h2>Lista de elmentos creada por el usuario | Contiene " + elementos.length + " elementos</h2>");
    
    document.write("<h3>Lista en el orden en el que fue creada</h3>");

    document.write(crearlista(elementos));

    // Mostrar la lista por consola
    elementos.forEach((element, index) => {
        console.log("["+index+"] - "+element+"");
    });
    
    // Para ordenar una lista de numeros con sort es necesario pasarle una funcion como esta:
    elementos.sort((a,b) => a - b);
    
    // Mostrar lista ordenada
    document.write("<h3>Lista ordenada de menor a mayor</h3>");
    
    document.write(crearlista(elementos));

    //Mostrar lista invertida
    document.write("<h3>Lista en el orden inverso</h3>");

    elementos.reverse();

    document.write(crearlista(elementos));

    // Revertimos el array otra vez
    elementos.reverse();

    // Busqueda
    let busqueda;
    
    if(confirm("Deseas buscar un elemento en el array que generaste?")){
        do{
            busqueda = prompt("Que numero deseas buscar en el array o lista?", 0);
    
            if(isNaN(busqueda)){
                alert("Solo puedes buscar numeros, la lista esta compuesta unicamente por numeros...");
            }else{
                busqueda = parseInt(busqueda);
    
                if(elementos.some(elemento => elemento == busqueda)){
                    console.log("El elemento si existe en el array, se encuentra en el indice " + elementos.findIndex(n => n == busqueda));
                }else{
                    console.log("El elemento no existe...");
                }
            }
        }while(isNaN(busqueda));
    }
}