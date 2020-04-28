import React, { Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import anotherWithClass from '../../../hoc/anotherWithClass';
// import {Aux} from '../../../hoc/Auxillary';
import PropTypes from 'prop-types';
class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }


    componentDidMount(){
       // document.querySelector('input').focus(); //way 1.1
       //this.inputElement.focus(); //way 1.2
       this.inputElementRef.current.focus(); //way 2
    }

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
           <input 
        //    ref={inputEle => inputEle.focus()} //way 1.1
        //ref = {inputEle => {this.inputElement = inputEle}} //way 1.2
        ref= {this.inputElementRef} //way 2
           type="text" onChange={this.props.changed} value={this.props.name}/>
      
   
       </Aux>
   );


    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default anotherWithClass(Person, classes.Person);