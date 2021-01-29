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
        ],
        description: 'this is the description in state'
    };

    changePerson = () => {
        this.setState({
            persons: [
                {
                    name: 'another name 1',
                    age: 81
                },
                {
                    name: 'another name 2',
                    age: 82
                },
                {
                    name: 'another name 3',
                    age: 83
                }
            ],
            anotherDescription: 'this is another description in state'
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={this.changePerson}>Change Name</button>
                <p className="App-intro">
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        myClick={this.changePerson}
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                    >
                        {this.state.description}
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
                </p>
            </div>
        );
    }
}

export default App;
