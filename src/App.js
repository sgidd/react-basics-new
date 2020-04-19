import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons :[
      {name:"Sunil" , age:26},
      {name:"Manoj" , age:267},
      {name:"PJ" , age:28}
    ],
    otherState: "SomeOther Value",
    showPersons: false
  }

  swicthNameHandler = (newName) => {
    // console.log("button clicked");
    //this.state.persons[0].name = "SunilG" dont do this
    this.setState({
      persons: [
        {name:newName , age:26},
        {name:"Manoj" , age:267},
        {name:"PJ" , age:30}
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {name:'Sunil' , age:26},
        {name:event.target.value , age:267},
        {name:"PJ" , age:30}
      ]
    })
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map( person => {
              return <Person name= {person.name} age={person.age}/>
            })
          }
         
        </div>
      );

    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={this.togglePersonsHandler}
          style={style}>{this.state.showPersons ? 'Hide' : 'Show'}</button>

        { persons}
        
        </div>
    );

    // return React.createElement('div' , null, 'h1', 'Hi, I\'m a React App');
    // first arg is element tag , 2nd is configuration - style , classes , 3rd is the content or child elemnts
    // above statement takes he as content not element
    // h1Hi, I'm a React App
    // so to create child element use createElement 

    //return React.createElement('div' , null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
    //output : Hi, I'm a React App!!!

    // adding classes
    // return React.createElement('div' , {className : 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
