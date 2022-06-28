/*
    Prototype
    * Prototype-based language
    * Prototype chain
    * __proto__
*/
/*
    Type conversion (typecasting) vs Type coersion
    * Alteração de um tipo de dado para outro tipo
*/

console.log(Number('9') + 5)

// Manipulando Strings e Números
let string = "123"
console.log(Number(string))
let number1 = 321
console.log(String(number1))

// Contar caracteres de palavras e dígitos de números
let word1 = "Paralelepipedo"
console.log(word1.length)
let number2 = 1234
console.log(String(number2).length)

// Transformar número quebrado com 2 casas decimais e trocar ponto por vírgula
let number3 = 345.127362
console.log(number3.toFixed(2).replace(".", ","))

// Letras minúsculas em maiúsculas
let word2 = "Programar é muito bacana!"
console.log(word2.toLowerCase())
console.log(word2.toUpperCase())

// Verificar se o texto contém a palavra Amor
let phrase1 = "Eu quero viver!"
console.log(phrase1.includes("Amor")) // Case-sensitive

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _
let phrase2 = "Eu quero viver o amor!"
let myArray = phrase2.split("_") 
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

// Criar array com construtor
let myArray2 = ['a', 'b', 'c']
let myArray3 = new Array('a', 'b', 'c')
let myArray4 = new Array(10)

// Contar elementos de uym array
console.log(["a", "b", "c"].length)

// Transformar uma cadeira de caracteres em elementos de uma array
let word3 = "manipulação"
console.log(Array.from(word3))

// Manipulando Arrays
let techs = ["html", "css", "js"]
// Adicionar um item no fim
techs.push("nodejs")
// Adicionar no começo
techs.unshift("sql")
// Remover do fim
techs.pop() // Remove do final
techs.pop() // Vai sempre removendo os próximos elementos
// Remover do começo
techs.shift()
// Pegar alguns elementos do array
console.log(techs.slice(1, 3)) // O primeiro número é de onde você quer começar, contando elementos, iniciando no 0, o segundo é contagem normal ???
// Remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1) //Números(posição do elemento, quantidade de elementos)
// Encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)