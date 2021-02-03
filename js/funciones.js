
//ConstruirTarea = require ('./paintList.js') 
//pintar tabla

let botonEliminar = document.querySelectorAll('.eliminar')
let buscadorTexto = document.getElementById('buscarTexto')

function pintarme (pNombre , pPrioridad) {
    listadoTareas.forEach(tarea => {
        pNombre = tarea.nombre 
        pPrioridad = tarea.prioridad
        new ConstruirTarea (pNombre , pPrioridad)
        botonEliminar = document.querySelectorAll('.eliminar')
       
    })    
}

pintarme()

let option = document.querySelector('option')
let filtradoPrioridad = document.querySelector('#filtradoPrioridad')

let selection = document.querySelector('select')
let botonCrear = document.getElementById("add");



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


function eliminarTarea (event) {
    botonEliminar = new Array (botonEliminar)

}




function buscarTexto (event) {
    let titulos = document.querySelectorAll('article h2')
    let cajaTexto = buscadorTexto.value
    titulos.forEach (element => {
        let titulo = element.innerText
        if (titulo == cajaTexto) {
            element.style.display = "block"
        } else if (titulo != cajaTexto) {
            element.style.display = "none"
        }
    })
  
 
     
    
}


filtradoPrioridad.addEventListener('change', filtrado )
botonCrear.addEventListener('click', addTarea)
botonEliminar.forEach(elemento => elemento.addEventListener('click',eliminarTarea))

buscadorTexto.addEventListener('keypress',buscarTexto)

