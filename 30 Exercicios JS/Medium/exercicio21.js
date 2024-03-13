//Sistema de Localização || pegar cordenadas e verifica se é alfa, beta,....

class Location {
    constructor(x, y, z) {
        this.coordinates = [x, y, z]
        
    }

    static sectors = {
        '+++': 'Alfa',
        '++-': 'Beta',
        '+-+': 'Gama',
        '+--': 'Delta',
        '-++': 'Épsilon',
        '-+-': 'Zeta',
        '--+': 'Sigma',
        '---': 'Omega',
    }

    getSector() {
        const signs = this.coordinates.map(coord => coord >= 0 ? '+' : '-').join('')
        return Location.sectors[signs]
    }

    getDistance() {
        return Math.sqrt(this.coordinates.reduce((accum, coord) => accum + (coord ** 2), 0))
    }
}

const point1 = new Location(37, 42, 15)
console.log(point1.getSector(), `\nDistance: ${point1.getDistance()} units`)

