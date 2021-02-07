
//ConstruirTarea = require ('./paintList.js') 
//pintar tabla


let buscadorTexto = document.getElementById('buscarTexto')




function pintarme (pNombre , pPrioridad) {
    listadoTareas.forEach(tarea => {

        pNombre = tarea.nombre 
        pPrioridad = tarea.prioridad
        new ConstruirTarea (pNombre , pPrioridad)
       
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








function buscarTexto (event) {
    
    let titulos = document.querySelectorAll('article h2')
    let cajaTexto = buscadorTexto.value
    cajaTexto = cajaTexto.toLowerCase()
    titulos.forEach (element => {
        let titulo = element.innerText
        titulo = titulo.toLowerCase()
        let padre = element.parentNode
        if (titulo.includes(cajaTexto)) {
            padre.style.display = "block"
        } else if (cajaTexto == ''){ 
            padre.style.display = "block"
        } else   {
            padre.style.display = "none"
        }
    })
}





filtradoPrioridad.addEventListener('change', filtrado )
botonCrear.addEventListener('click', addTarea)
buscadorTexto.addEventListener('keypress',buscarTexto)





