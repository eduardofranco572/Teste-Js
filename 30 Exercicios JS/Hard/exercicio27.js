//Encontrando Conexões || 
const results = []

function findConnections(obj) {
    Object.entries(obj).forEach( ([key, value]) => {
        if(key === 'connection') {
            results.push([value._id, value.label])
        }

        if(key === 'connections') {
            value.forEach(connection => {
                results.push([connection._id, connection.label])
            })
        }

        if(Array.isArray(value)) { //verirfica se é um array
            value.forEach(element => {
                findConnections(element)
            })

        }else if(Object.prototype.toString.call(value) === '[object Object]' ){
            findConnections(value)
        }
    })

}

const data0 = require('./ArquivosDesafio27/data-0.json')
findConnections(data0)
console.log(results)