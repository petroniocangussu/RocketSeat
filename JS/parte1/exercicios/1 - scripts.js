let weight = 86.5

// 2. Tipo de dado acima
console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number(float)
    * isSubscribed: Boolean
*/
let name = "Nico"
let age = 30
let stars = 5.5
let isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dado?
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.
*/
let student = {
    name: 'Nico',
    age: 30,
    weight: 90.9
};
console.log(`${student.name} possui ${student.age} anos de idade e pesa ${student.weight}`)

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/*
    6. Coloque student da 4, use o criado e insira dentro dele
*/

students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do array students
*/

const john = {
    name: "John",
    age: 28,
    weight: 75,
    isSubscribed: true
}
students = [
    student,
    john
]
// students[1] = john *outra forma

/*
    9. Sem rodar o código responda na sua cabeça qual a resposta do código abaixo
    console.log(a)
    var a = 1

    Undefined
*/