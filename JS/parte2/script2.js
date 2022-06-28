// Eventos
function print() {
    console.log('print')
}
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)
h1.addEventListener('click', function() {
    console.log('outro momento')
})

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}