// Ajudando a Academia || calculo de medias

function average(...numbers) {

    const sum = numbers.reduce((accum, num) => accum + num, 0)

    return sum / numbers.length
    
    
}
  
console.log(average(10, 9, 6, 8, 9, 1, 5, 7))
console.log(average(2, 5, 7, 1, -2))
console.log(average(10, 10, 10, 10, 9))
console.log(average(25, 75))


//alex version:

// function median() {
//     //var args = Array.prototype.slice.call(arguments);
//     var args = [...arguments]
//     return args.reduce((accum, all) => (accum + all)) / args.length;
// }