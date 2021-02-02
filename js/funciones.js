
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


let media = document.querySelector('.media')


function filtrado (event) {
    event.preventDefault()
    switch (selection.value) {
       case '0':
            alert(0)
           
            break ;    
        case '1':
            console.log('test');
            console.log(media);
            document.querySelector('.media').style.display = 'none'
            console.log('test');
            alert(1);
            
            
            break;
        case '2':
            alert(2)
            break;
        case '3':
            alert(3)
            break ;    
    }
}




filtradoPrioridad.addEventListener('change', filtrado )
