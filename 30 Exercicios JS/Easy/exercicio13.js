//Código de Identificação de Nave || verifica codigo de indentificação

function generateDigit(arr){
    const step1 = arr.reduce((accum, current, index) => {
        return index === 0 || index % 2 === 0 ? accum + current : accum
    }, 0)

    const step2 = step1 * 3

    const step3 = step2 + arr.reduce((accum, current, index) => {
        return index % 2 !== 0 ? accum + current : accum
    }, 0)

    return step3 % 10 !== 0 ? 10 - step3 % 10 : 0
}

function verifyCode(code) {
    const numberArr = code.toString().split('').map(Number)

    const numberArrayWithtoutDigit = numberArr.slice(0, -1)

    const corretDigit = generateDigit(numberArrayWithtoutDigit)

    return corretDigit === numberArr[numberArr.length - 1]
}


console.log(verifyCode(547020743789));
console.log(verifyCode(301354030348));
console.log(verifyCode(301354030349));
console.log(verifyCode(123456789872));
