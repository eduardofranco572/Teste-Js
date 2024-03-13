//Corrida de Pods || 

class Race {
    constructor(...racers) {
        this.racers = racers
    }

    getClassificarion() {
        const classification = {}

        for(let i = 0; i < this.racers.length; i++) {
            classification[`${i + 1}°`] = this.racers[i]
        }    

        return classification
    }

    updateClassification(str) {
        const [racer, action] = str.split(' ')

        if(action.includes('ELIMINATE')) {
            this.eliminateRacer(racer)
        }else {
            this.updateRacer(racer, action)
        }
    }

    updateRacer(racer, action) {
        const eliminated = this.racers.filter(racer => racer.includes('ELIMINATED'))
        const active = this.racers.filter(racer => !racer.includes('ELIMINATED'))

        const currentPosition = active.indexOf(racer)
        const updatedPosition = currentPosition + Number(action) * -1

        if(updatedPosition >= this.racers.length || updatedPosition < 0) {
            console.log('Erro! Atualização inválida.')
            return
        }

        active.splice(currentPosition, 1)

        this.racers = [...active.slice(0, updatedPosition), racer, ...active.slice(updatedPosition), ...eliminated]
    }

    eliminateRacer(racer) {
        const eliminated = this.racers.filter(racer => racer.includes('ELIMINATED'))
        const active = this.racers.filter(racer => !racer.includes('ELIMINATED'))

        active.splice(active.indexOf(racer), 1)

        this.racers = [...active, `${racer} ELIMINATED`, ...eliminated]
    }
}


const racel = new Race("Alfa", "Beta", "Gama", "Delta")

racel.updateClassification("Beta +1")
console.log(racel)
racel.updateClassification("Beta -1")
console.log(racel)
racel.updateClassification("Delta ELIMINATE")
console.log(racel)
racel.updateClassification("Gama +2")
console.log(racel)

console.log(racel.getClassificarion())