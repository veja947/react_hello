import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <Person name="Name A" age="18"/>
            <Person name="Name B" age="29"/>
            <Person name="Name C" age="35">Note: This is note for Name C</Person>
        </p>
      </div>
    );
  }
}

export default App;
