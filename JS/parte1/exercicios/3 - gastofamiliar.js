/* Sistema de gastos familiar

Objeto com duas propriedades Array
    * Receitas: []
    * Despesas: []

Crie uma função que irá calcular o total de receitas e despesas, depois mostrar mensagem se a família esta com saldo positivo ou negativo, seguido do valor do saldo
*/

let revenue = {
    incomes: [500, 500, 8000, 600],
    outcomes: [2000, 1500, 600, 800, 5000]
}

function sum(array){
    let total = 0;
    
    for(let value of array) {
        total += value
    }
    return total
}
function calculateBalance() {
    const calculateIncomes = sum(revenue.incomes)
    const calculateOutcomes = sum(revenue.outcomes)
    const total = calculateIncomes - calculateOutcomes

    const positivo = total >= 0

    let balanceText = "negativo"
    if (positivo) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}
calculateBalance()