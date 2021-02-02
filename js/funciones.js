
//ConstruirTarea = require ('./paintList.js') 
//pintar tabla

function pintarme (pNombre , pPrioridad) {
    listadoTareas.forEach(tarea => {
        pNombre = tarea.nombre 
        pPrioridad = tarea.prioridad
        new ConstruirTarea (pNombre , pPrioridad)
        console.log(pNombre)
        console.log(pPrioridad)
    })    
}

pintarme()


let option = document.querySelector('option')
let filtradoPrioridad = document.querySelector('#filtradoPrioridad')

let selection = document.querySelector('select')
let boton = document.querySelector('button')
let botonCrear = document.getElementById("add");

let media = document.querySelector('.media')


function filtrado (event) {
    let uno = document.querySelectorAll('.alta')
    let dos = document.querySelectorAll('.media')
    let tres = document.querySelectorAll('.baja')
    switch (filtradoPrioridad.value) {
       case '0':
            dos.forEach(element => element.style.display = 'block')
            uno.forEach(element => element.style.display = 'block')
            tres.forEach(element => element.style.display = 'block')
            break ;    
        case '1':
            dos.forEach(element => element.style.display = 'none')
            uno.forEach(element => element.style.display = 'block')
            tres.forEach(element => element.style.display = 'none')
            break;
        case '2':
            dos.forEach(element => element.style.display = 'block')
            uno.forEach(element => element.style.display = 'none')
            tres.forEach(element => element.style.display = 'none') 
            break;
        case '3':
            dos.forEach(element => element.style.display = 'none')
            uno.forEach(element => element.style.display = 'none')
            tres.forEach(element => element.style.display = 'block')
            break ;    
    }
}




filtradoPrioridad.addEventListener('change', filtrado )
botonCrear.addEventListener('click', addTarea)
