import React from "react";
import styled from "styled-components";

const H1 = styled.h1`

`;
const Head = styled.header`
  width: 40%;
  
  >h1 {
    font-size: 35px;
    border-radius: 10px;
    border: 1px solid rgb(154, 212, 208);
    text-transform: uppercase;
    background-color: rgb(173, 240, 234);
    text-shadow: 2px 1px 8px rgba(142,142,142);
    margin-bottom: 15px;
  }
  >p {
    font-size: 20px;
    color:rgb(57, 85, 83);
    margin-bottom: 15px;
  }
`;

const Header = ({ showLength }) => {
  return (
    <Head>
        <h1>Todo list</h1>
        <p>количество записей: {showLength}</p>
    </Head>
  )
}

export default Header;