/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary - caso único
*/

/*
let number

(function() {
    console.log('alo')
})

console.log(number + 1)
console.log(typeof number)
console.log(true ? 'alo' : 'nada') 
*/
/*
    New
    * Left-hand-side expression
    * Criar um novo objeto
*/

let nome = new String('Mayk')
nome.surName = "Brito"
let age = new Number(23)
console.log(nome.surName, age)
let nome = new Date('2020-12-01')
console.log(Date.__proto__)

/*
    Operadores unários
    typeof
    delete
*/
const person = {
    name: 'Mayk',
    age: 25,
}
delete person.age

// Operadores Aritiméticos

// Multiplicação *
console.log(3 * 5)
// Divisão /
console.log(6 / 2)
// Soma
console.log (3 + 2)
// Subtração
console.log (3 - 2)
// Resto da divisão %
let remainder
remainder = 11 % 11
console.log(remainder)
// Incremento ++
let increment = 0
increment++
console.log(increment)
// Decremento -- (podem ser na frente ou atrás)
let decrement = 0
decrement--
console.log(decrement)
// Exponencial **
console.log(3 ** 3)

// Grouping operator ( )
let total = 2 + 3 * 5

// Operadores de comparação

// Irá comparar valores e retornar um Boolean
let one = 1
let two = 2

// == igual a
console.log( two == 1) // false
console.log( one == "1") // true

// != Diferente de
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != "1") // false

// === estritamente igual a
console.log( one === "1")
console.log( one === 1)

// !== estritamente diferente de
console.log( two !== "2") // true
console.log( two !== 2) // false

// > Maior que
console.log(one > two) // false
// >= Maior igual a
console.log(one >= 1) // true
console.log(two >= 1) // true
// < Menor que
console.log(one < two) // true
// <= Menor igual a
console.log(one <= two) //true

//Operadores de atribuição (Assignment)
let x

// assignment
x = 1

// addition, subtraction, multiplication, division assignment
// x = x + 2
x += 2
console.log(x) // 3
x -= 1
console.log(x) // 2
x *= 2
console.log(x) // 4

// Remainder, exponentiation
// x %= 2
x **= 2
console.log(x) // 16
x %= 2
console.log(x) // resto é 0


// Operadores lógicos
// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso
let pao = true
let queijo = true

// and &&
console.log(pao && queijo) // Se um dos dois for falso, tudo será falso

// or ||
console.log(pao || queijo) // Se um dos dois for true, tudo será true

// not ! troca verdadeiro por falso
console.log(!pao) // era true virou false


// OPERADOR CONDICIONAL (TERNÁRIO)

// Dependendo da condição, nós receberemos valores diferentes
// Exemplo, café da manhã top
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast) // Ambos true, retornará café top, caso um dos dois for falso, retornará café ruim (&& || ou !)

// Exemplo, maior de 18
let age2 = 16
const canDrive = age2 >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)


// OPERADOR DE STRING

// Comparison
// console.log( 'a' == 'a')

// concatenation
let alpha = 'alpha'
console.log( alpha += 'bet') // alpha += 'bet'

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( true ? 'verdadeiro' : 'false')

/*
    Operator precedence
    * Grouping                  ( )
    * Negação e incremento      ! ++ 00
    * Multiplicação e divisão   * /
    * Adição e subtração        + -
    * Relacional                < <= > >=c
    * Igualdade                 == != === !==
    * AND                       &&
    * OR                        ||
    * Condicional               ?:
    * Assignment (atribuição)    = += -= *=
*/
console.log( 3 > 2 && 2 > 1)