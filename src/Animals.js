import React from 'react'
import AnimalCard from './AnimalCard'

class Animals extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            animals: []
        }

        this.deleteAnimal = this.deleteAnimal.bind(this)
        // this.editFunction = this.editFunction.bind(this)
    }
    componentDidMount() {
        console.log(this.props)
        this.setState({animals: this.props.animalList})
    }

    deleteAnimal(targetAnimal) {
        const animals = this.state.animals.filter(animal => animal.id !== targetAnimal.id)
        this.setState({animals})
        localStorage.setItem(this.props.animalListKey, JSON.stringify(animals))
    }
    
    editFunction = (targetAnimal) => {
        let animals = this.state.animals
        let index = animals.findIndex(animal => animal.id == targetAnimal.id)
        animals[index] = targetAnimal
        this.setState({ animals })
        localStorage.setItem(this.props.animalListKey, JSON.stringify(animals))
    }

    render() {
        let animalCards = <div> No Animal on the list</div>
        
        if (this.state.animals.length > 0) {
             animalCards = this.state.animals.map(animal => (<AnimalCard 
                key={animal.id} 
                animal={animal} 
                deleteFunction = {this.deleteAnimal}
                editFunction = {this.editFunction}
                >
                </AnimalCard>))
        }

        return(
            (<React.Fragment>{animalCards}</React.Fragment>)
        );
    }
}

export default Animals