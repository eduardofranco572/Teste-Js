// Linguagem Limitada || reverse Array

function reverse(arr) {
    const reversedArr = []

    for(let i = 0; i < arr.length; i++ ) {
        reversedArr[i] = arr[arr.length - 1 - i]
    }
    
    return reversedArr
}

console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverse(["Oh", "Hi", "Mark"]));
console.log(reverse([false, true, true, false]));
console.log(reverse(["It's", "not", true, 0]));

//varsion alex:

// function reverseArr(arr) {
//     let resul = [];
//     while (arr.length > 0) resul.push(arr.pop());
//     return resul;
// }