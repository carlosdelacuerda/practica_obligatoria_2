


function pintarme (pNombre , pPrioridad) {
    listadoTareas.forEach(tarea => {
        pNombre = tarea.nombre 
        pPrioridad = tarea.prioridad
        new construirTarea (pNombre , pPrioridad)
    })    
}

pintarme()

