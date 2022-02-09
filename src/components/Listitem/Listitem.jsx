import React from 'react'
import styled from "styled-components";
import Button from "../Button/Button"

const LI = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 20px;
    margin:0 7px 20px;
    padding: 5px;
  }
`


const Listitem = ({task, onDeleteClick, id, onDoneClick, completed}) => {
  const handleDelete = () => {
    onDeleteClick(id);
    
  }
  const handleDone = () => {
    onDoneClick(id);
    
  }

  return (
    <LI>
      <p>{task}</p>
      <div>
        {!completed && <Button type="button" onClick={handleDone}>Выполнено</Button>}
        <Button type="button" onClick={handleDelete} >Удалить</Button>
      </div>
    </LI>
  )
}

export default Listitem
