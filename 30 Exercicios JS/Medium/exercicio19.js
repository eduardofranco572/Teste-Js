//Cálculos de Viagens Espaciais II || persistencia multiplicativa

function multiplicativePersistence(num) {
    if(num < 10) {
        return 0
    }

    const digits = num.toString().split('') // separa cara caracter do num num array
    const product = digits.reduce((accum, current) => accum * current, 1)

    return 1 + multiplicativePersistence(product) 
}


console.log(multiplicativePersistence(539))