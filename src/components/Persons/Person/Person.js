import React from 'react';
import PropTypes from 'prop-types';
// import { StyledDiv } from '../StyledComponents/StyledComponents';

import classes from './Person.css'

const person = (props) => {

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I&apos;m {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string
}

export default person;
