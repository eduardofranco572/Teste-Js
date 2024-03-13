//Biblioteca Interplanetária || converter nome para formatação de livro

function quotation(fullName) {
    const names = fullName.split(' ')
    let initials = ''

    for (let i = 0; i < names.length - 1; i++){
        initials += ` ${names[i][0].toUpperCase()}.`
    }

    return `${names[names.length - 1].toUpperCase()}, ${initials}`
}


console.log(quotation('Isaac Larrubia Ferreira Pontes'))
console.log(quotation('John Ronald Reuel Tolkien'))
console.log(quotation('Christopher James Paolini'))
console.log(quotation('Suzanne Marie Collins'))


//alex version

// function initials(name) {
//     return name.split(' ').map(item => item.slice(0, 1) + '.').join('').slice(0, -2)
//  } 
  
//  function quotation(fullName) {
//     return fullName.split(' ').at(-1).concat(',', initials(fullName)).toUpperCase()
//  }