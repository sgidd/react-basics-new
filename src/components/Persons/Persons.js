import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps',props);
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons  
        //    || nextProps.changed !== this.props.changed||
        //     nextProps.clicked !== this.props.clicked
            ) {
                return true;
            }
        else {
            return false;
        }
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map( (person, index) => {
            return <Person 
                    key={person.id}
                    name= {person.name} 
                    age={person.age}
                    click={()=> this.props.clicked(index)}
                        // or use click= {this.deletePersonHandler.bind(this,index)}
                    changed={(event) => this.props.changed(event, person.id)}
                        />
          })
    }
    getSnapshotBeforeUpdate(preProps, prevState){
        console.log('[Persons.js] getSnapShotBeforeUpdate')
        return {message :'from snapshot method to comp did update '}
    }

    compoenentWillUpdate() {
        console.log('[Persons.js] componentWillUpdate');
    }
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }
    componentDidUpdate(prevProps, prevState, snapshotObj){
        console.log('[Persons.js] componentDidUpdate', snapshotObj);
    }
}

export default Persons;