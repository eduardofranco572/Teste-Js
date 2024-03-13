//Validações do Compilador || verifica de tem {} () [] fechados incorretamento no seu codigo

function bracketCheck(str) {
    let brackets = str.match(/\(|\)|\[|\]|\{|\}/g).join('')
    
    while (brackets.match(/\(\)|\[\]|\{\}/)) {
      brackets = brackets.replace(/\(\)|\[\]|\{\}/, '')
      console.log(brackets)
    }
  
    return brackets.length === 0
  }


console.log(bracketCheck('((((([(]))))))'))
console.log(bracketCheck('{(){([]){[]}()()()()[]}(){(())}(())}'))

//pode colocar um codigo inteiro no console que ele verifica se tem algo fechado errado
