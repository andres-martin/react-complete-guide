import React, { Component } from 'react';
// import { StyledButton } from './StyledComponents/StyledComponents';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: '001', name: "Martin", age: '24' },
      { id: '002', name: "Maria", age: '23' },
      { id: '003', name: "Andres", age: '23' }
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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

  showPersonsFragment = () => (
    this.state.showPersons &&
    <div>
      <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    </div>
  )

  render() {
    console.log('[App.js] render');

    return (
      <div className={classes.App}>
        <button
          onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}
        > Mostrar Cokpit
        </button>
        {this.state.showCockpit &&
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />}
        {this.showPersonsFragment()}
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Some text'))
  }
}

export default App;
