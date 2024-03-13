//Relatório de Missão || inserir srt em posições dentro de outra str
function insertIntoString(str, toInsert, indexes) {  
    const charsArray = str.split('')
    let insertCount = 0

    for (let i = 0; i <= str.length; i++) {
        if (indexes.includes(i)) { // includes() faz com que verifica se aquele indece esta no array
            charsArray.splice(i + insertCount, 0, toInsert) //remove elemento e pode incerir outro no locau que do que removel  no array, recebe 3 parametros: posição inicial, quantidade, conteudo qeu vai incerir no lugar que removel, nesse caso só incerio n removel
            insertCount++
        }
    }

    return charsArray.join('')
}

console.log(insertIntoString('capaz utilizar as cápsulas emergência', 'de ', [0, 6, 27, 38]))
console.log(insertIntoString('Hello', 'world', [6]))

