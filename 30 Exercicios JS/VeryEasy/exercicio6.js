//História Escondida II || inverter cade letra e deixar minuscula

function invertWord(word) {
    return word.split('').reverse().join('');
}

function invert(string) {
    return string.toLowerCase().split(' ').map(invertWord).join(' ');
}
  
console.log(invert("Lorem ipsum dolore sec avanti"));
console.log(invert("This is an apple"));
console.log(invert("May the force be with you"));
console.log(invert("It s over nine thousand"));
