//Intervalo de Coordenadas || par ordenados

function intervalo(pair) {
    const result = []

    for(let i = 0; i <= pair[0]; i++){
        for(let j = 0; j <= pair[1]; j++){
            result.push([i, j])
        }
    }

    return result
}


console.log(intervalo([2, 2]))
console.log(intervalo([2, 7]))
console.log(intervalo([-3, -3]))
console.log(intervalo([7, 6]))
