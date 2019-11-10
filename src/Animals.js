import React from 'react'
import AnimalCard from './AnimalCard'
import {Container, Row} from 'reactstrap';

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
        let animalCards = <Row> No Animal on the list</Row>
        
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
            <React.Fragment>
                <Container>
                    <Row className="justify-content-md-center"><h1 className="list-animal-title">Animal List</h1></Row>
                    {animalCards}
                </Container>
            </React.Fragment>
        );
    }
}

export default Animals