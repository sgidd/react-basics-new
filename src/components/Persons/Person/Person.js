import React, { Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';

// import {Aux} from '../../../hoc/Auxillary';

class Person extends Component {

    render(){
        console.log('[person.js] rendering...');
    //     return (   
    //         <div className={classes.Person} >
           
    //            <p onClick={() => this.props.click('SunilGidd2')}>I'm a {this.props.name} and I'am {this.props.age } years old!</p>
    //            <p>{this.props.children}</p>
    //            <input type="text" onChange={this.props.changed} value={this.props.name}/>
          
       
    //        </div>
    //    );

    //return with array of elements with key in each element
    // return  [    
    //        <p onClick={() => this.props.click('SunilGidd2')}
    //             key="1">
    //            I'm a {this.props.name} and I'am {this.props.age } years old!</p>,
    //        <p key="2">{this.props.children}</p>,
    //        <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>, 
    // ];

    //return with hoc
    return (   
        <Aux>
       
           <p onClick={() => this.props.click('SunilGidd2')}>I'm a {this.props.name} and I'am {this.props.age } years old!</p>
           <p>{this.props.children}</p>
           <input type="text" onChange={this.props.changed} value={this.props.name}/>
      
   
       </Aux>
   );


    }
}
export default Person;