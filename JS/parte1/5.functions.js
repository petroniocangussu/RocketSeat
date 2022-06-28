console.log('Aula sobre functions')

// criar um aplicativo de frases motivacionais

// declaration ou function statement

function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}

// executar/rodar a função - execute/run
createPhrases()
console.log('Fim do programa')

// function expression
// function anonymous
// parâmetros
let total = 0

const sum = function(number1, number2){
    let total = number1 + number2
    return total
}
// não é interessante criar uma variável dentro da função, o exemplo 'total', usar 'let total' acima.
let number1 = 2
let number2 = 3

console.log(`o número 1 é ${number1}, já o número 2 é ${number2}, a soma deles é ${sum(number1, number2)}`)
console.log(total)

// Função é um liquidificador
function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')
console.log(copo)

// Function scope
let subject = 'create video'
function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

// Function hoisting

sayMyName();

function sayMyName() {
    console.log('Nico')
}

// Arrow function

const sayMyName2 = (name) => {
    console.log(name)
}
sayMyName2('Nico')

// Callback function

function sayMyName3(name) {
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a callback')
}

sayMyName3(
    () => {
        console.log('estou em uma callback')
    }
)

function Person(nome) {
    this.nome = nome
    this.walk = function() {
        return this.name + " está andando"
    }
}
const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())