/* Transformar notas escolares

Crie um algoritmo que transforme as notas numéricas em notas A B C D F
    * 90+   - A
    * 80 89 - B
    * 70 79 - C
    * 60 69 - D
    * 59-   - F
*/

function getScore(nota) {
    let A = nota >= 90
    let B = nota >= 80 && nota < 90
    let C = nota >= 70 && nota < 80
    let D = nota >= 60 && nota < 70
    if (A) {
        console.log('Você tirou nota A')
    } else if (B) {
        console.log('Você tirou nota B')
    } else if (C) {
        console.log('Você tirou nota C')
    } else if (D) {
        console.log('Você tirou nota D')
    } else {
        console.log('Você tirou nota F')
    }
    return 'Numericamente = ' + nota
}
console.log(getScore(100))
console.log(getScore(61))
console.log(getScore(41))
console.log(getScore(91))
console.log(getScore(81))