import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import AppHeader from './AppHeader';
import AddAnimal from './AddAnimal'
import Animals from './Animals'


class App extends React.Component{
  ANIMAL_LIST_KEY = "AnimalList"
  constructor(){
    super();
    this.state = {
        animals: [],
    }
    
  }

  componentDidMount() {
    // localStorage.clear()
    let animalListFromLocal = localStorage.getItem(this.ANIMAL_LIST_KEY)
    if (animalListFromLocal) {
      let animals = JSON.parse(animalListFromLocal)
      this.setState({
        animals: animals
      })
    } else {
      this.initializeData()
    }
  }

  initializeData() {
    let initializedAnimalList = [
      {
        id: 1,
        name: 'Hamster',
        family: 'Cricetinae',
        class: 'Mammal',
        imageLink: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg'
      },
      {
        id: 2,
        name: 'Lion',
        family: 'Felidae',
        class: 'Mammal',
        imageLink: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/10/lion-face.jpg?w968h681'
      },
      {
        id: 3,
        name: "Tuna",
        family: 'Scombridae',
        class: 'Fish',
        imageLink: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Bluefin-big.jpg'
      }
    ]
    this.setState({animals: initializedAnimalList})
  } 

  addItem = item => {
    const animals = [item, ...this.state.animals]
    this.setState({ animals })
    localStorage.setItem(this.ANIMAL_LIST_KEY, JSON.stringify(animals))
  }


  render() {
    return (
      <div className="App">
        <Router basename="/">
          <AppHeader/>
          <div>
            <Switch>
                <Route path="/add" component={() => <AddAnimal onSubmit={this.addItem} animalListKey={this.ANIMAL_LIST_KEY}/>}/>
                <Route path="/" component={() => <Animals animalList={this.state.animals} animalListKey={this.ANIMAL_LIST_KEY}/>}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
