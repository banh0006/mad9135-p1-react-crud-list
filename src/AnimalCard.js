import React from 'react'
import './AnimalCard.css'
import { UncontrolledCollapse, Button, Container, Row, Col} from 'reactstrap';
import EditAnimalForm from './EditAnimalForm'

function AnimalCard(props) {

    const handleSaveClick = (ev) => {

        console.log(ev.target.id)
    }

    return (
        <Container className="animal-row">
            <Row className="animal-card" >
                <Col xs="3" className="animal-image">
                    <img src={props.animal.imageLink} alt="Animal"/>
                </Col>
                <Col xs="6"className="animal-info">
                    <h1 className="animal-name">{props.animal.name}</h1>
                    <h3 className='animal-family'>{props.animal.family}</h3>
                    <h3 className='animal-class'>{props.animal.class}</h3>
                </Col>
                <Col xs="2" className="control">
                    <Button color="primary" className='editButton' id={`toggler${props.animal.id}`} onClick={() => props.editFunction(props.animal)}>Edit</Button>
                    <Button color="secondary" className="delete" onClick={() => props.deleteFunction(props.animal)}>Delete</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="10">
                    <UncontrolledCollapse toggler={`toggler${props.animal.id}`}>
                        <EditAnimalForm
                            key={props.animal.id} 
                            targetAnimal={props.animal} 
                            saveChange = {handleSaveClick}
                            editFunction = {props.editFunction}
                        />
                    </UncontrolledCollapse>
                </Col>
            </Row>
            
        </Container>
    )
}
export default AnimalCard