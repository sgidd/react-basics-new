import React from 'react';

import './Person.css';

const person = (props2) => {
    //return <p>I'm a Person and I'am {Math.floor(Math.random() * 30) } years old!</p>
    return (
        <div className="Person">
            <p onClick={() => props2.click('SunilGidd2')}>I'm a {props2.name} and I'am {props2.age } years old!</p>
            <p>{props2.children}</p>
            <input type="text" onChange={props2.changed} value={props2.name}/>
        </div>
    );
}

export default person;