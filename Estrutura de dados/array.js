const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']
// a indexação (index) começa pelo número 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// Acessar o tamanho do array
console.log(pilotos.length)

// Iterável
for (let piloto of pilotos) {
    console.log(piloto)
}

// Adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// Encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// Deletar elemento
pilotos.splice(1, 1)

// Matrix -> vetor multidimensional - array dentro de array

const students = [['Joseph', 23, 'MG'], ['Briana', 22, 'SP'], ['Priscila', 23, 'PR']]

console.log(students[0][1])

// Stack -> Pilha -> É linear, um após o outro. O último a entrar é o primeiro a sair
// LIFO: Last In First Out

