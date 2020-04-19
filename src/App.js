import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = (props) => {
    const [personsState, setPersonsState] = useState({
      persons :[
        {name:"Sunil" , age:26},
        {name:"Manoj" , age:267},
        {name:"PJ" , age:28}
      ],
      otherState : "some other value"
    })

    const [otherState, setOtherState] = useState({otherState : "some other value"});
    console.log(personsState, otherState);

    const swicthNameHandler = () => {
      setPersonsState({
        persons :[
          {name:"sunilGidd" , age:26},
          {name:"Manoj" , age:267},
          {name:"PJ" , age:29}
        ],
        // otherState: personsState.otherState
      })    
    }
    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={swicthNameHandler}>Switch Name</button>
          <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}/>

          <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={swicthNameHandler}>My Hobbie is : Racing </Person>

          <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}/>      
        </div>
    );  
}
export default app;



// const stateArr = useState({
//   persons :[
//     {name:"Sunil" , age:26},
//     {name:"Manoj" , age:267},
//     {name:"PJ" , age:28}
//   ],
//   otherState : "some other value"
// })
//   const swicthNameHandler = () => {
//     stateArr[1]({
//       persons :[
//         {name:"SunilG" , age:26},
//         {name:"Manoj" , age:267},
//         {name:"PJ" , age:28}
//       ],
//     })    
//   }
