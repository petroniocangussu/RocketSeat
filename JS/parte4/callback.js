function imprimirDado(dado) {
    console.log('outras tarefas')
    console.log(dado())
}

imprimirDado(1)
imprimirDado('texto')
imprimirDado(true)
imprimirDado(function () {
    return 'Olá mundo'
})