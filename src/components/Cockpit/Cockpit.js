import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = props => {

  const toggleBtnRef = useRef(null);
  // toggleBtnRef.current.click(); //dont access immdiately as react have not executed the return block yet

  useEffect(() => {
    console.log('[Cockpit.js] 1st useEffect');
    //Http Request
    setTimeout(() => {
      alert('1st');
    }, 2000);
    return ()=>{
      console.log('[cockpit.js] clean up 1st useEffect');
    }
  }); // this will run on every render cycle

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
   
    //will access here as we only need to run click on first load - 
    //this useEffect runs only once afetr first render
    toggleBtnRef.current.click();
    return ()=> {  
      console.log('[cockpit.js] clean up 2nd useEffect');
    }
  }, []);

  //To limit it to only run when persons array is modified and component renderd first time
  // useEffect(() => {
  //   console.log('[Cockpit.js] 3rd useEffect');

  //   setTimeout(() => {
  //     alert('3rd');
  //   }, 2000);
  //     return ()=> {
  //       console.log('[cockpit.js] clean up 3rd useEffect');
  //     }
  //   }, [props.persons]);

    let assignedClasses =[];
    let btnClass ='';
    

    if(props.showPersons)
    {
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red) //classes = ['red']
    }
    if(props.personsLength <=1){
      assignedClasses.push(classes.bold) // classes = ['red'.'bold']
    }

    return (
        <div className={classes.Cockpit}>
             <h1>{props.title}</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass}
                ref={toggleBtnRef}
                onClick = {props.togglePersons}>
                    {props.showPersons ? 'Hide' : 'Show'}
                </button>
        </div>
    );
}

export default React.memo(cockpit);