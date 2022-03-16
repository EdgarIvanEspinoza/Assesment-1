'use strict';
const nombre = prompt('Bienvenido. Ingresa tu nombre:')
const apellido = prompt('Ahora ingresa tu primer apellido:')
let cafe = confirm('Te apetece un café?')

if (cafe) {
    alert(`¡Bienvenid@ ${nombre} ${apellido}! 
    En breves recibirá su café calentito en casa.`)
} else {
    alert(`¡Bienvenid@ ${nombre} ${apellido}! Hoy NO hay café.`)
}