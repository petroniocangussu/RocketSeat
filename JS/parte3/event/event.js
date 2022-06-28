const { EventEmitter } = require('events')
const ev = new EventEmitter()
// Ev.on está ligado, ev.once = uma única vez
ev.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})
ev.emit('saySomething', "Petrônio")