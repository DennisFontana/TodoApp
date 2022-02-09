import React from 'react'
import styled from "styled-components";

const StyledInput = styled.div`
   >input {
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    margin: 0 0 15px 15px;
    padding: 5px;
    text-shadow: 2px 1px 6px rgba(142,142,142);
  }
  >label {
    font-size: 20px;
    &:hover {

      transition: ease-out 0.5s;
      padding-right: 7px;
      margin-left: 7px;
    }
  }
`;


const Input = ({id, label, placeholder, value, onChange}) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input onChange={onChange} value={value} id={id} placeholder={placeholder} />
    </StyledInput>
  )
}

export default Input
