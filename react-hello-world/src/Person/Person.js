import React, {Component} from 'react'

const person = (props) => {
    return (
        <div className="person-root">
            <h1>I am {props.name}, and I am {props.age} years old!</h1>
            <p>{props.children}</p>
        </div>
    )
};

export default person;