import React, { Component } from 'react';
import  classes from './App.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';



class App extends Component {
  state ={
    persons :[
      {id:1, name:"Sunil" , age:26},
      {id:2, name:"Manoj" , age:267},
      {id:3, name:"PJ" , age:28}
    ],
    otherState: "SomeOther Value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //const person =  this.state.persons[personIndex];
    //nut this it will copy pointer so do not mutate state direactly

    //better approch is 
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons =  this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons persons= {this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={(event , id) => this.nameChangedHandler(event, id)}/>
    }

    return (
        <div className={classes.App}>       
          <Cockpit  
            showPersons ={this.state.showPersons}
            persons={this.state.persons}
            togglePersons ={this.togglePersonsHandler}
            />
          { persons}
        </div>
            
    );

  }
}

export default App;