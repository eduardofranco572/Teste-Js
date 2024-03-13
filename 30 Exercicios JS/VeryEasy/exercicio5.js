//História Escondida I || pegar maior letra em ordem alfabetica e deixa minuscula

function highestLetter(string) {
    return string.toLowerCase().split('').sort()[string.length - 1];
}

console.log(highestLetter("Lorem ipsum dolore sec avanti"));
console.log(highestLetter("Hello"));
console.log(highestLetter("May the force be with you"));
console.log(highestLetter("Its over nine thousand"));

  
