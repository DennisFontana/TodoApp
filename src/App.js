import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Listtodo from './components/Listtodo/Listttodo';
import Addform from './components/Addform/Addform';
import { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';;


function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('Todo')) || []);
  const [deletedTodoList, setDeletedTodoList] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("Все");

// Установка todo в LocalStorage
  useEffect(() => {
    localStorage.setItem('Todo', JSON.stringify(todoList));
  }, [todoList])
  
  useEffect(() => {
    localStorage.setItem('Todo', JSON.stringify(deletedTodoList))
  }, [deletedTodoList])

// стэйт при добавлении и удалении формы
  const handleAddTodo = (title) => {
    if(title === '' || title[0] === ' ') return
    setTodoList(todoList.concat( {title: title, completed: false, id: uuid4()} ));

  }
  const handleDeleteTodo = (id) => {
    const deletedTodoListItem = todoList.filter((elem) => elem.id !== id);
    const deletedTodoStatusList = todoList.filter((elem) => elem.id === id);
    setTodoList(deletedTodoListItem);
    setDeletedTodoList(deletedTodoList.concat(deletedTodoStatusList));
  }
  
  const handleDoneTodo = (id) => {
    setTodoList(todoList.map((todo) => (
      todo.id === id ? {...todo, completed: true} : todo
    )))  
  }
  // стэйт фильтра
  const handleChangeFilterValue = (value) => {
    setFilterValue(value);
  }
  // изменение состояние фильтра статус
  const handleChangeFilterStatus = (status) => {
    setFilterStatus(status);
  }
  // делаю фильтр по статусу
  const handleFilterStatus = () => {
    if(filterStatus === "Все") { 
       return todoList;
    } 
    if(filterStatus === "Выполненные") { 
      const listDone =  todoList.filter((status) => status.completed !== false);
      return listDone;
    }
    if(filterStatus === "Удалённые") {
      return deletedTodoList;
    }
  }

  const newFilterStatusList = handleFilterStatus();

  const getFilteredList = () => {
    if(filterValue === '') {
      return newFilterStatusList || todoList;
    }
    const newFilterList = todoList.filter((todo) => todo.title.toLowerCase().includes(filterValue.toLowerCase()));
    return newFilterList;
  }
  // создаю фильтрованный Todo лист
  const filteredList = getFilteredList();
  
  
  
  return (
    <div className="App">
      <Header showLength={todoList.length}/>
      <Filter onChangeFilterValue={handleChangeFilterValue} filterValue={filterValue} onChangeFilterStatus={handleChangeFilterStatus} />
      <Listtodo list={filteredList} onDelete={handleDeleteTodo} onDone={handleDoneTodo}/>
      <Addform onCreateTodo={handleAddTodo} />
    </div>
  );
}

export default App;
