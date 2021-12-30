/*
    LocalStorage en JS | Ejercicio completo: Hecho por mi mismo
        Este ejercicio lo resolvi antes de la explicacion en base a lo que yo crei que se podia hacer ante el problema

*/

'use strict'

window.addEventListener('load',function (){

    if(localStorage != undefined){
        
        var form_p = document.getElementById("formpelis");

        if(localStorage.getItem("pelis_count") == undefined){
            localStorage.setItem("pelis_count", 0);
        }else{
            crearlista();
        }  

        form_p.addEventListener('submit', function (event){
            
            event.preventDefault();

            var pelicula = {
                titulo: '',
                año: '',
                pais: ''
            };

            pelicula.titulo = document.getElementById("p_titulo").value;
            pelicula.año = parseInt(document.getElementById("p_año").value);
            pelicula.pais = document.getElementById("p_pais").value;

            if(pelicula.titulo == '' || pelicula.año <= 0 || pelicula.pais == '' ){
                alert("Por favor llena todos los campos antes de continuar... ");
            }else{
                añadirpelicula(pelicula);
                crearlista();
            }

        });

    }else{
        console.log("LocalStorage no disponible en este navegador...");
    }

});

function añadirpelicula(pelicula) {
    localStorage.setItem(`peli_${localStorage.getItem("pelis_count")}`, JSON.stringify(pelicula));
    localStorage.setItem("pelis_count", parseInt(localStorage.getItem("pelis_count")) + 1);
}

function crearlista() {
    if (localStorage.getItem("pelis_count") != undefined && localStorage.getItem("pelis_count") >= 0) {

        var count = localStorage.getItem("pelis_count");
        var lista = document.createElement('ol');
        lista.id = "lista_peliculas";
        var titulo = document.createElement('h3');
        titulo.textContent = "Lista de peliculas:";
        titulo.id = "titulo_de_lista";
        
        for (let i = 0; i <= count; i++) {
            var peli = JSON.parse(localStorage.getItem("peli_" + i));
            if (peli != null) {
                //console.log("Pelicula " + (i+1) +": " + peli.titulo + " | Año: " + peli.año);
                var b = document.createElement('b');
                var li = document.createElement('li');
                b.textContent = "Pelicula: ";
                li.append(b);
                li.append(peli.titulo + " - " + peli.pais + ", " + peli.año);
                lista.append(li);
            }

        }

        if(document.getElementById('lista_peliculas') == null){
            document.body.append(titulo);
            document.body.append(lista);
        }else{
            document.body.removeChild(document.getElementById('lista_peliculas'));
            document.body.removeChild(document.getElementById('titulo_de_lista'));

            document.body.append(titulo);
            document.body.append(lista);
        }
        

    }
}

