const { log } = require("console")

console.log('pedir um uber')
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('pedido aceito!')
    }
    return reject('pedido negado!')
})
console.log('aguardando')

promessa.then(result => console.log(result))
promessa.catch(erro => console.log(erro))
promessa.finally(() => console.log('finalizada'))