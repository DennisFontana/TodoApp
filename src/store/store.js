import {
  createStore,
  combineReducers
} from 'redux';
import todoReducer from './todo/todo.reducer'

const rootReducers = combineReducers({
  todos: todoReducer
})

export const store = createStore(rootReducers);



// {type: "TODO_ADD", payload: {id,title}}