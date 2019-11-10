import React from 'react'
import cuid from 'cuid'
import {Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';


class AddAnimal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            family: "",
            class: "",
            imageLink: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }
    handleFormSubmit(event) {
        event.preventDefault()
        let id = cuid()
        console.log(id)
        const newAnimal = {
            id: id,
            name: this.state.name,
            family: this.state.family,
            class: this.state.class,
            imageLink: this.state.imageLink
        }

       this.props.onSubmit(newAnimal)
    }

    handleInputChange = (ev) => {
        const target = ev.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }
    
    render () {
        return (
           <Form onSubmit={this.handleFormSubmit}>
               <FormGroup className="animalName">
                   <Label for="name" sm={2}>Animal Name</Label>
                   <Col sm={10}>
                        <Input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </Col>
               </FormGroup>
               <FormGroup className="animalFamily">
                   <Label for="family" sm={2}>Animal Family</Label>
                   <Col sm={10}>
                        <Input type="text" name="family" value={this.state.family} onChange={this.handleInputChange} />
                    </Col>
               </FormGroup>
               <FormGroup className="animalClass">
                   <Label for="class" sm={2}>Animal Class</Label>
                   <Col sm={10}>
                        <Input type="text" name="class" value={this.state.class} onChange={this.handleInputChange} />
                    </Col>
               </FormGroup>
               <FormGroup className="animalImageLink">
                   <Label for="imageLink" sm={2}>Animal Image Link</Label>
                   <Col sm={10}>
                        <Input type="text" name="imageLink" value={this.state.imageLink} onChange={this.handleInputChange} />
                    </Col>
               </FormGroup>
               <FormGroup className="submitButton">
                    <Col sm="2">
                        <Button color="primary" type="submit">Add to list</Button>
                    </Col>
               </FormGroup>
           </Form>
        );
    }
}

export default AddAnimal