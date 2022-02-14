import React from 'react'
import styled from "styled-components";


const BUTTON = styled.button`
  background-color: ${props => props.primary ?  "rgb(173, 240, 234);" : "white"};
  border: none;
  border-radius: 10px;
  margin: ${props => props.margin || "0 7px 20px"};
  padding: 8px;
  font-size: 13px;
  font-weight: bold;
  &:hover {
    color: #ac0c0c;
  }
`;

const Button = ({ children, type, onClick, margin, name}) => {
  return (
      <BUTTON onClick={onClick} type={type} margin={margin} name={name}>{children}</BUTTON>
  )
}

export default Button
