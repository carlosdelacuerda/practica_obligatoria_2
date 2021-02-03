let classPrioridad = 'default'

let identificador = 0
class ConstruirTarea {
    constructor (nombre,prioridad) {
        switch(prioridad) {
            case '1':
                classPrioridad = 'alta'
                break;
            case '2':
                classPrioridad = 'media'
                break;
            case '3':
                classPrioridad = 'baja'
                break;
        }
        identificador++
        let contenido = `<article class="${classPrioridad}" data-id="${identificador}"><h2>${nombre}</h2><button class="eliminar">Eliminar</button></article>`
        this.xnombre = nombre
        this.xprioridad = prioridad  
        this.tabla = document.querySelector('.tabla')
        this.div = document.createElement('div')
        this.tabla.appendChild(this.div)
        let creado = document.querySelector('.tabla div:last-child')
        creado.innerHTML = contenido
    }
}

//module.exports = ConstruirTarea




