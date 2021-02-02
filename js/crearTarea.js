

function addTarea (event) {
    event.preventDefault()
    let nombreTarea = document.getElementById("nombreTarea");
    let prioridadTarea = document.getElementById("prioridadTarea");
    let tabla = document.getElementById('tabla')
    let alerta = document.getElementById('alerta')
    nombreTarea = nombreTarea.value;
    prioridadTarea = prioridadTarea.value;
    if (nombreTarea == '' || prioridadTarea == 0) {
        alerta.style.display = 'block'
    } else {
        alerta.style.display = 'none'
        listadoTareas.push(
            {
                nombre: nombreTarea,
                prioridad: prioridadTarea
            }
        )
        tabla.innerHTML = ''
        pintarme()
        }
}