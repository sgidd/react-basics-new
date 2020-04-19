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
  }

  swicthNameHandler = () => {
    // console.log("button clicked");
    //this.state.persons[0].name = "SunilG" dont do this
    this.setState({
      persons: [
        {name:"SunilG" , age:26},
        {name:"Manoj" , age:267},
        {name:"PJ" , age:30}
      ]
    })
  }
  render() {
    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={this.swicthNameHandler}>Switch Name</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>

          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.swicthNameHandler}>My Hobbie is : Racing </Person>

          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        
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
