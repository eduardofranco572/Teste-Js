function isFibonacciNumber(number) {
    let num1 = 0;
    let num2 = 1;

    while (num2 <= number) {
        if (num2 === number) {
            return true;
        }
        let temp = num2;
        num2 = num1 + num2;
        num1 = temp;
    }

    return false;
}


const inputNumber = 3;


const number = parseInt(inputNumber);
const result = isFibonacciNumber(number);

if (result) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}

