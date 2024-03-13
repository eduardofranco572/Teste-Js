//Prisão Intergalática 

function missing(arr) {
    const sorted = arr.slice(0).sort((a, b) => a - b)
    const total = Number(sorted[sorted.length - 1])

    const allPrisoners = []

    for(let i = 0; i < total; i++) {
        const prisoner = i + 1
        allPrisoners.push(prisoner.toString().padStart(4, '0')) //padStart compreta uma string com elemento
    }

    const missingPrisoners = []

    allPrisoners.forEach(prisoner => {
        if (!sorted.includes(prisoner)){
            missingPrisoners.push(prisoner)
        }
    })

    return missingPrisoners
}

console.log(missing(['0020', '0002', '0013', '0004', '0001', '0016', '0015', '0006', '0012', '0007', '0005', '0008', '0011', '0010']))