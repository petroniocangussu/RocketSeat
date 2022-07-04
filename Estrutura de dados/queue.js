/* FIFO - First in First Out
Front é referente ao primeiro a entrar na fila
Back é o último.

Métodos fundamentais:
enqueue(): adicionar elemento ao final da fila
dequeue(): remover o primeiro elemento a entrar da fila
size(): mostra tamanho
front(): pega primeiro elemento.
*/

// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}


// Passo 2: Utilizando
const fila = new Queue()
fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()