import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Martin", age: 24 },
      { name: "Maria", age: 23 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          { name: newName || 'Juan', age: 25 },
          { name: 'Maria', age: 28 }
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Martin', age: 25 },
        { name: event.target.value, age: 28 }
      ]
    }
    )
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  showPersonsFragment = () => (this.state.showPersons &&
    <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} >
        Hobies
      </Person>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Andres')}
        changed={this.nameChangedHandler}
      >
        Hobies
      </Person>
    </div>)

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>It's working</p>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {this.showPersonsFragment()}
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Some text'))
  }
}

export default App;
