/* eslint-disable require-jsdoc */
import React, { PureComponent } from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDereivedStateFromProps');
  //   return state;
  // };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons) return true;
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering ...');
    return this.props.persons.map((person, _idx) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(_idx)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

Persons.propTypes = {
  persons: PropTypes.array,
  clicked: PropTypes.func,
  changed: PropTypes.func,
};

export default Persons;
