//Código Romano I || romano para decimal
function sumValues(accum, current, index, array) {
    return current < array[index + 1] ? accum - current : accum + current
}

function romanNumeral(str) {  
    const numeralsArray = str.split('')

    const romanDecimalMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const decimalsArray = numeralsArray.map(numeral => romanDecimalMap[numeral])
    return decimalsArray.reduceRight(sumValues)
}

console.log(romanNumeral('XLVII'))
console.log(romanNumeral('CDXXXVIII'))

