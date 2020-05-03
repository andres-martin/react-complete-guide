import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Martin", age: 24 },
      { name: "Maria", age: 23 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>It's working</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobies</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobies</Person>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Some text'))
  }
}

export default App;