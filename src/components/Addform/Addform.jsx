import React,{useState} from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Addform = ({ onCreateTodo }) => {

  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const handleCreate = (e) => {
    e.preventDefault();
    onCreateTodo(title);
    setTitle('');
  }

  return (
    <div>
    <section>
      <form>
        <Input value={title} onChange={handleChange} id="form" placeholder="Название" label="Новое задание:"/>
        <div>
          <Button onClick={handleCreate} type="submit">Создать</Button>
        </div>
      </form>
    </section>
  </div>
  )
}

export default Addform;
