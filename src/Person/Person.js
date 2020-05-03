import React from 'react';
import PropTypes from 'prop-types';

const person = (props) => {
  return (
    <div>
      <p>I&apos;m {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  );
};

person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string
};

export default person;
