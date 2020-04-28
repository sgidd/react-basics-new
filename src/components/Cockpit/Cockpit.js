import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {

  const toggleBtnRef = useRef(null);
  // toggleBtnRef.current.click(); //dont access immdiately as react have not executed the return block yet

  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
   
    //will access here as we only need to run click on first load - 
    //this useEffect runs only once afetr first render
    toggleBtnRef.current.click();
    return ()=> {  
      console.log('[cockpit.js] clean up 2nd useEffect');
    }
  }, []);

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
                {/* <AuthContext.Consumer>
                 {(context) => <button onClick={context.login}>Log in</button>}
                </AuthContext.Consumer> */}

              <button onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit);