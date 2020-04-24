import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = props => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //Http Request

    setTimeout(() => {
      alert('suppose it http req and reccieved resp at this point');
    }, 2000);
  }); // this will run on every render cycle

  //To limit it to only run when persons array is modified and component renderd first time
  useEffect(() => {
    setTimeout(() => {
      alert('This runs only when persons array is changed and compoenent renderd first time');
    }, 2000);
  }, [props.persons]);

  useEffect(() => {
    setTimeout(() => {
      alert('Runs only one time when component is rendered for the first time');
    }, 2000);
  }, []);

    let assignedClasses =[];
    let btnClass ='';
    

    if(props.showPersons)
    {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red) //classes = ['red']
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold) // classes = ['red'.'bold']
    }

    return (
        <div className={classes.Cockpit}>
             <h1>{props.title}</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass}
                onClick = {props.togglePersons}>
                    {props.showPersons ? 'Hide' : 'Show'}
                </button>
        </div>
    );
}

export default cockpit;