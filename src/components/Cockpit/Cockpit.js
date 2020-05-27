import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import PropTypes from 'prop-types';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')

    setTimeout(() => { alert('saved data from the cloud') }, 1000)
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')

    return () => console.log('[Cockpit.js] 2nd cleanup work in useEffect')
  })

  const assignedClasses = []

  if (props.personsLength <= 2) assignedClasses.push(classes.red);
  if (props.personsLength <= 1) assignedClasses.push(classes.bold);

  // const btnClasses = [classes.Button]
  // if (props.showPersons) btnClasses.push(classes.Red);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>It's working</p>
      <button
        className={props.showPersons ? classes.Red : ''}
        // alt={this.state.showPersons} // for styled-components
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
}

cockpit.propTypes = {
  personsLength: PropTypes.number,
  showPersons: PropTypes.bool,
  clicked: PropTypes.func,
  title: PropTypes.string
}

export default React.memo(cockpit);
