import React, { Component } from 'react';
// import { StyledButton } from './StyledComponents/StyledComponents';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: "Martin", age: '24' },
      { id: '002', name: "Maria", age: '23' },
      { id: '003', name: "Andres", age: '23' }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => (p.id === id))
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons }
    )
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  showPersonsFragment = (persons) => (
    this.state.showPersons &&
    <div>
      {persons.map((person, _idx) => (
        <Person
          key={person.id}
          click={() => this.deletePersonHandler(_idx)}
          name={person.name}
          age={person.age}
          changed={(event) => this.nameChangedHandler(event, person.id)}
        />
      ))}
    </div> 
  )

  render() {

    const assignedClasses = []

    if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold);

    const btnClasses = [classes.Button];
    if (this.state.showPersons) btnClasses.push(classes.Red);

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app</h1>
        <p className={assignedClasses.join(' ')}>It's working</p>
        <button
          className={btnClasses.join(' ')}
          // alt={this.state.showPersons} // for styled-components
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {this.showPersonsFragment(this.state.persons)}
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Some text'))
  }
}

export default App;
