import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {
                name: 'name 1',
                age: 18
            },
            {
                name: 'name 2',
                age: 28
            },
            {
                name: 'name 3',
                age: 38
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
                        Note: this is person 2
                    </Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </p>
            </div>
        );
    }
}

export default App;
