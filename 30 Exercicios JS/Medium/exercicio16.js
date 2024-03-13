//Código Romano II || cifra de cesar
function decipher(str, key) {
    const charsArr = str.split('')
    const normalizedKey = key % 26

    const codesArray = charsArr.map(char => {
        const currentCode = char.charCodeAt(0) // o metodo pega o codigo de um caracter numa posição expecifica da string
        
        if(currentCode >= 65 && currentCode <= 90 && currentCode -normalizedKey < 65) {
            return currentCode +26
        }
        if(currentCode >= 96 && currentCode <= 122 && currentCode -normalizedKey < 96) {
            return currentCode +26
        }
        return currentCode
    })

    return codesArray.map(code => String.fromCharCode(code - normalizedKey)).join('') // String.fromCharCode cria uma string apartir de um codigo de caracter
}


console.log(decipher('Vguvg', 2))
console.log(decipher('BCDYZAbcdyza', 27))


