//Hora de Jogar ||

class Explorer {
    constructor(name) {
        this.name = name
        this.level = 1
        this.experience = 0
        this.expToNextLevel = 110
        this.knownPlanests = []
        this.terrainExpertise = {}
        this.alive = true
    }

    get rank() {
        if(this.level < 10) return 'Newbie'
        if(this.level < 30) return 'Explorer'
        if(this.level < 50) return 'Veteran'
        if(this.level < 80) return 'Elite'
        if(this.level < 99) return 'Master'
        return 'Legend'
    }

    static explorationHandler = {
        pacific: (diceResult) => diceResult >= 5 ? 15 : 0,
        neutral: (diceResult) => diceResult >= 7 ? 25 : 0,
        hostile: (diceResult) => diceResult >= 9 ? 50 : 10

    }

    gainExperience(pts) {
        this.experience += pts

        if(this.level === 99) {
            return
        }

        if(pts < this.expToNextLevel) {
            this.expToNextLevel -= pts
            return
        }

        this.level++

        const newExpToNextLevel = 100 + (10 * this.level) - (pts - this.expToNextLevel)

        this.expToNextLevel = this.level !== 99 ? newExpToNextLevel : 0

        console.log(`Level up! You're now level ${this.lavel}. Experience to next level: ${this.expToNextLevel}`)
    }

    explore(planet) {
        if(!this.alive) {
            console.log('You are dead.')
            return
        }

        const { id, hostility, terrain } = planet

        //Thorow dices
        const dice1 = Math.floor(1 + Math.random() * 6)
        const dice2 = Math.floor(1 + Math.random() * 6)

        const bonus = this.terrainExpertise[terrain] > 2 ? 1 : 0
        const dices = dice1 + dice2 + bonus
        
        console.log(`Rolled ${dice1} and ${dice2} ${bonus ? '+1 bonus' : ''}`)

        if(dices === 12) {
            this.terrainExpertise[terrain] = this.terrainExpertise[terrain] + 1 || 1 //abreviar if ternario
        }

        if(dices === 2 && hostility === 'hostile') {
            console.log('You died.')
            this.alive = false
            return
        }

        const handler = Explorer.explorationHandler[hostility]
        const obtainedExp = handler(dices)

        this.gainExperience(obtainedExp)

        if(obtainedExp > 10) {
            const planetAlreadyExplored = this.knownPlanests.find(planet => planet.id === id)

            if(!planetAlreadyExplored) {
                this.knownPlanests.push(planet)
            }

            console.log(`Sucess! Earned ${obtainedExp} pts.`)
        }else {
            console.log(`Failure! Earned ${obtainedExp} pts.`)
        }

    }
}

const john = new Explorer('jonh Doe')

const tatooine = ({ id: 1, name: 'Tatooine', hostility: 'hostile', terrain: 'desert'})
const yavin = ({ id: 2, name: 'Yavin', hostility: 'pacific', terrain: 'forest'})
const hoth = ({ id: 3, name: 'Hoth', hostility: 'neutral', terrain: 'snow'})
const endor = ({ id: 4, name: 'endor', hostility: 'neutral', terrain: 'forest'})

setInterval(() => {
    john.explore(tatooine)
    john.explore(yavin)
    john.explore(hoth)
    john.explore(endor)

    console.log(john)
}, 1000 * 5)


console.log(john)