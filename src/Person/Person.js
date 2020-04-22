import React from 'react';
import './Person.css';
import styled from 'styled-components';

    const  StyledDiv =  styled.div`
        width:60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        @media (min-width: 500px){
            {
                
                width: 450px;
            }
        `
const person = (props2) => {

    return (   
        // <div className="Person" style={personStyle}>
        <StyledDiv>
            <p onClick={() => props2.click('SunilGidd2')}>I'm a {props2.name} and I'am {props2.age } years old!</p>
            <p>{props2.children}</p>
            <input type="text" onChange={props2.changed} value={props2.name}/>
        </StyledDiv>
        // </div>
    );
}
export default person;