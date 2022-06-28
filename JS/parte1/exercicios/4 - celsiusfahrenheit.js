/* Celsius em Fahrenheit e vice-versa
    Função que receba uma string em C ou F e transforme para a outra
    
    C = (F-32) * 5/9
    F = C * 9/5 + 32
*/
temperaturaCelcius = 0
temperaturaFahrenheit = 32
function Fahrenheit () {
    total = temperaturaCelcius * 9 / 5 + 32
    console.log(`${temperaturaCelcius} representa ${total} em Fahrenheit`)
}
function Celsius () {
    total = (temperaturaFahrenheit - 32) * 5 / 9
    console.log(`${temperaturaFahrenheit} representa ${total} em Celsius`)
}
Fahrenheit()
Celsius()

// Resolução do professor
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F' 
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('50C'))
    console.log(transformDegree('50Z'))
} catch (error) {
    console.log(error.message)
}