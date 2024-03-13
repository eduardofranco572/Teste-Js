//Cálculos de Viagens Espaciais I || raiz quadrada para cada numero

function square(num) {
    const disArr = num.toString().split('')
    const squaredArr = disArr.map(digit => Number(digit) ** 2).join('')
  
    return Number(squaredArr)
}

console.log(square(3514));
console.log(square(94571));
console.log(square(24));
console.log(square(745821698));

// vesion alex:

// function square(numbers) {
//     numbers = numbers.toString().split('')
//     return parseInt(numbers.map(number => number ** 2).join(''))
// }