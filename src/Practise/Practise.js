import React from 'react';
import './Practise.css';
import Radium from 'radium';
const practise = (props) => {

    const style = {
        '@media(min-width: 500px)':{
            width: '450px'
        }
    };
    return (
    <div className="Practise" style={style}>
        {/* <h1>We are doing practise of React JS and today is {new Date().toLocaleDateString()} and my name is {props.name} </h1>
        <h2>My Degree is {props.children}</h2> */}
        <p onClick= {props.click}>My Position is {props.position} and I'm {props.statistic}</p>

        <input type="text" onChange={props.changed} value={props.position}/>
    </div>

    )};

export default Radium(practise);