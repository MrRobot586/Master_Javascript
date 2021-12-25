/*
    DOM - Practicas: Repaso
    - Seleccion de elementos
    - DIferencias entre getelement y queryselector
*/

// Se puen seleccionar elementos por clase, id, nombre de la etiqueta o mediate selectores css
var rojo = document.getElementsByClassName("rojo");

// Utilizando el getelement por clase se pueden seleccionar todos los elementos con una clase
// Esto tambien sirve con getelementbytagname
for(let div in rojo){
    // Se pueden modificar sus estilos etc...
    if(rojo[div].className = "rojo"){// Se puede verificar si es un elemento de HTML
        rojo[div].style.background = "tomato";// y editar sus propiedades css
        rojo[div].style.color = "white";
    }
    // Por lo general, al seleccionar muchos elementos hay algunos que estan en el dom pero que no son visibles pero que no importa editarlos realmente
    // Para saltarse estos inconvenientes es mejor verificar que el elemento seleccionado tiene la clase deseada o identificador
}

//La diferencia entre getelement y queryselector es que getelement puede buscar todos los elementos de una clase o tag, mientras que quieryselector solo selecicona el primero que encuentre

/*

Resumen:
    - Se pueden obtener un elemento con el objeto document y los metodos: getelement y quieryselector
    - Se puede modificar por completo un elemento lugo de obtenerlo
    - Se pueden obtener distintos elementos de una misma clase u tag (o una misma gerarquia) con getelement
    - y con quueryselector solo se selecciona 1 elemento (el primero)
*/