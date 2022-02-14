export const TODO_ADD = 'TODO_ADD';
export const FILTER_VALUE = 'FILTER_VALUE';
export const FILTER_STATUS = 'FILTER_STATUS';
export const DONE_TODO = 'DONE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (id, title) => {
  return {
    type: TODO_ADD,
    payload: {
      title,
      id
    }
  }
}
export const deleteTodo = (id) => {
  return { 
    type: DELETE_TODO,
    payload: id
  }
}

export const changeFilterValue = (value) => {
  return {
    type: FILTER_VALUE,
    payload: value
  }
}

export const changeFilterStatus = (value) => {
  return {
    type: FILTER_STATUS,
    payload: value
  }
}

export const changeDoneTodo = (id) => {
  return {
    type: DONE_TODO,
    payload: id
  }
}
