import React from 'react';
import styled from "styled-components";
import Listitem from "../Listitem/Listitem"

const UL = styled.ul`
  padding: 0;
`
const Listtodo = ({ list, onDelete, onDone}) => {

  const todoList = list.map((item) => <Listitem key={item.id} task={item.title}  onDeleteClick={onDelete} id={item.id} completed={item.completed} onDoneClick={onDone}/>)
  
  return (
    <div>
      <UL>
        {todoList}
        
      </UL>
    </div>
  )
}

export default Listtodo;