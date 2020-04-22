import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      font:inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor:pointer;

      &:hover{
        background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: ${props => props.alt ? 'white' : 'grey'};
      }
      `

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
      persons = (
        <div>
          {
            this.state.persons.map( (person, index) => {
              return <Person 
                      key={person.id}
                      name= {person.name} 
                      age={person.age}
                      click={()=> this.deletePersonHandler(index)}
                          // or use click= {this.deletePersonHandler.bind(this,index)}
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                          />
            })
          }    
        </div>
      );

    }

    // let classes = ['red' , 'bold'].join(' '); // "red bold"

    let classes =[];
    if(this.state.persons.length <= 2) {
      classes.push('red') //classes = ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold') // classes = ['red'.'bold']
    }

    return (
        
          <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton  alt={this.state.showPersons}
          onClick = {this.togglePersonsHandler}>
            {this.state.showPersons ? 'Hide' : 'Show'}
          </StyledButton>

        { persons}
        
        </div>
            
    );

  }
}

export default App;
