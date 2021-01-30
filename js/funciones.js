
//pintar tabla

function pintarme (pNombre , pPrioridad) {
    listadoTareas.forEach(tarea => {
        pNombre = tarea.nombre 
        pPrioridad = tarea.prioridad
        new construirTarea (pNombre , pPrioridad)
    })    
}

pintarme()




let option = document.querySelector('option')

let selection = document.querySelector('select')


function filtrado (event) {
    alert()
    switch (selection.value) {
        case '0':
            let todas = document.querySelectorAll('.alta , .media , .baja')
            todas.forEach(borrar => {
                borrar.style.display = 'block'
            });
            break
        case '1':
            let alta = document.querySelectorAll('.alta')
            alta.forEach(borrar => {
            borrar.style.display = 'none'
            });
            break
        case '2':
            let media = document.querySelectorAll('.media')
            alta.forEach(borrar => {
                borrar.style.display = 'none'
            });
            break
        case '3':
            let baja = document.querySelectorAll('.baja')
            alta.forEach(borrar => {
                borrar.style.display = 'none'
            });
            break        
    }
}




selection.addEventListener('click', select )
    