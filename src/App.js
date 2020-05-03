import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>It's working</p>
        <Person />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Some text'))
  }
}

export default App;