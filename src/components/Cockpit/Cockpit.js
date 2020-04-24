import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = props => {

  useEffect(() => {
    console.log('[Cockpit.js] 1st useEffect');
    //Http Request

    setTimeout(() => {
     // alert('suppose it http req and reccieved resp at this point');
    }, 2000);

    return ()=>{
      console.log('[cockpit.js] clean up 1st useEffect');
    }
  }); // this will run on every render cycle


  useEffect(() => {

    console.log('[Cockpit.js] 2nd useEffect');

    setTimeout(() => {
      //alert('Runs only one time when component is rendered for the first time');
    }, 2000);

    return ()=> {
      console.log('[cockpit.js] clean up 2nd useEffect');
    }

  }, []);

    //To limit it to only run when persons array is modified and component renderd first time
    useEffect(() => {
      console.log('[Cockpit.js] 3rd useEffect');

      return ()=> {
        console.log('[cockpit.js] clean up 3rd useEffect');
      }
    }, [props.persons]);

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