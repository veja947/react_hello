import React, {Component} from 'react'

const person = (props) => {
    return (
        <div className="person-root">
            <h1 onClick={props.myClick}>I am {props.name}, and I am {props.age} years old!</h1>
            <p>{props.children}</p>
            <input onChange={props.editInput} value={props.name}/>
        </div>
    )
};

export default person;