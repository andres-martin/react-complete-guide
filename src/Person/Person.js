import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import './Person.css'

const Div = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;


    @media (min-width: 500px) {
      width: '450px'
    }
`;

const person = (props) => {

  return (
    <Div>
      <p onClick={props.click}>I&apos;m {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Div>
  );
};

person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string
}

export default person;
