import styled from 'styled-components';

const StyledDiv = styled.div`
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

const StyledButton = styled.button`
    background-color: ${(props) => !props.alt ? 'green' : 'red'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => !props.alt ? 'lightgreen' : 'salmon'};
      color: black;
    }
`;

export {StyledDiv, StyledButton};
