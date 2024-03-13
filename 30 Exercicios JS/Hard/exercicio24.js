//Validações de Usuário || valida nome de usuario

const database = ['erick_14', 'pam_ls2', 'VICTOR_99A']

function validateUser(username) {
    if(username.length < 4 || username.length > 32) {
        return false
    }

    if(username.match(/\W|^[0-9]|^_|_$/)) {  // verifica se tem caractere que n é numero letra ou _ e se tem numero ou _ no começo e no final
        return false
    }

    if(!(username.match(/[A-Za-z]/) && username.match(/[0-9]/) && username.match(/_/))) { // verifica se tem pelo menos uma letra um numero e um _
        return false
    }

    const usernameAllExists = database.indexOf(username) !== -1

    if(usernameAllExists) {
        return false
    }

    return true
}


console.log(validateUser('52alfred'))
console.log(validateUser('erick_14'))
console.log(validateUser('josh_g15'))
console.log(validateUser('hugo123_'))
console.log(validateUser('k_9'))


