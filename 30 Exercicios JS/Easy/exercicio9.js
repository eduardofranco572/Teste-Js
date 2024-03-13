//Instruções de Emergência || verifica 2 repetições na frase

function compareCounts(count, index, array) {
    return index !== 0 ? count === array[index - 1] : true
}

function checkBalance(str) {
    const charCount = {}

    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i]
        charCount[currentLetter] = charCount[currentLetter] ? charCount[currentLetter] + 1 : 1
    }

    return Object.values(charCount).every(compareCounts)
}


console.log(checkBalance('This is Thee'))
console.log(checkBalance('ssd'))
console.log(checkBalance('Lorem ipsum'))
console.log(checkBalance('QQwweerrttyy'))

//alex version

// function compareCounts(count, index, array) {
//     return index !== 0 ? count === array[index - 1] : true;
// }
  
// function isBalancedString(string) {
//     const charMap = {};
//     for (const char of string.toLowerCase()) {
//       !charMap[char] ? charMap[char] = 1 : charMap[char] += 1
//     }
//     return Object.values(charMap).every(compareCounts)
// }