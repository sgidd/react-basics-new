import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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
    const style ={
      backgroundColor: 'green',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
      ':hover' : {
        backgroundColor :'lightgreen',
        color: 'grey'
      }
    }
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

      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor : 'salmon',
        color:'white'
      }

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

export default Radium(App);
