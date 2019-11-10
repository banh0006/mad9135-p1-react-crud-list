import React from 'react'
import {Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';

class EditAnimalForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            oldAnimalInfo: {},
            newName: "",
            newFamily: "",
            newClass: "",
            newImageLink: ""
        }
    }

    componentDidMount() {
        this.setState({oldAnimalInfo: this.props.targetAnimal})
        this.setState({newName: this.props.targetAnimal.name})
        this.setState({newFamily: this.props.targetAnimal.family})
        this.setState({newClass: this.props.targetAnimal.class})
        this.setState({newImageLink: this.props.targetAnimal.imageLink})
    }

    handleInputChange = (ev) => {
        const target = ev.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleCancelClick = (ev) => {
        let collapseID = ev.target.id
        let collapseButton = document.querySelector(`button#${collapseID}.editButton`)
        collapseButton.click()
    }

    handleSaveClick = (ev) => {
        ev.preventDefault()
        let edittedAnimal = {
            id: ev.target.id,
            name: this.state.newName,
            family: this.state.newFamily,
            class: this.state.newClass,
            imageLink: this.state.newImageLink
        }
        console.log(edittedAnimal)
        this.props.editFunction(edittedAnimal)

    }

    render() {
        return(
            <Form>
                <FormGroup row>
                    <Label for="animalName" sm={2}>Animal Name</Label>
                    <Col sm={10}>
                        <Input type="text" name='newName' id="animalName" value={this.state.newName} onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="animalFamily" sm={2}>Animal Family</Label>
                    <Col sm={10}>
                        <Input type="text" name='newFamily' id="animalFamily" value={this.state.newFamily} onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="animalClass" sm={2}>Animal Class</Label>
                    <Col sm={10}>
                        <Input type="text" name='newClass' id="animalClass" value={this.state.newClass} onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="animalImageLink" sm={2}>Animal Image Link</Label>
                    <Col sm={10}>
                        <Input type="text" name='newImageLink' id="animalImageLink" value={this.state.newImageLink} onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm="8"></Col>
                    <Col sm="2">
                        <Button color="primary" type="submit" id={this.state.oldAnimalInfo.id} onClick={this.handleSaveClick} className="save-change">Save</Button>
                    </Col>
                    <Col sm="2">
                        <Button color="secondary" className='cancel' id={`toggler${this.state.oldAnimalInfo.id}`} onClick={this.handleCancelClick}>Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default EditAnimalForm