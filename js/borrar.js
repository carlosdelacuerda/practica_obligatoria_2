

let posicion
let posicionId = 0

botonEliminar = document.querySelectorAll('.eliminar')





botonEliminar.forEach(element => {
    element.addEventListener('click',addNumero)
    function addNumero (event) {
        posicion = element.parentNode
        posicionId = posicion.dataset.id
        console.log(posicionId)
        borrarElemento(posicionId)
    }
    
})
                    

function borrarElemento (pPosicion) {
                          
                            console.log(this)
                            listadoTareas.splice(pPosicion,1)
                            console.log(listadoTareas)
                            tabla.innerHTML = ''
                            pintarme()


                        }
