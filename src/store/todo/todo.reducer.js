import {
	TODO_ADD,
	DONE_TODO,
	DELETE_TODO,
	FILTER_VALUE,
	FILTER_STATUS,
} from "./todo.actions";

const initialState = {
	todoList: JSON.parse(localStorage.getItem("Todo")) || [],
	deletedTodoList: JSON.parse(localStorage.getItem("deletedTodo")) || [],
	filterValue: "",
	filterStatus: "Все",
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODO_ADD:
			return {
				...state,
				todoList: state.todoList.concat({
					title: action.payload.title,
					completed: false,
					id: action.payload.id,
				}),
			};
		case DONE_TODO:
			return {
				...state,
				todoList: state.todoList.map((todo) => {
					return todo.id === action.payload
						? {
								...todo,
								completed: true,
						  }
						: todo;
				}),
			};
		case DELETE_TODO:
			return {
				...state,
				todoList: state.todoList.filter((todo) => {
					return todo.id !== action.payload;
				}),
				deletedTodoList: state.deletedTodoList.concat(
					state.todoList.filter((todo) => {
						return todo.id === action.payload;
					})
				),
			};
		case FILTER_VALUE:
			return {
				...state,
				filterValue: action.payload,
			};
		case FILTER_STATUS:
			return {
				...state,
				filterStatus: action.payload,
			};
		default:
			return state;
	}
};

export default todoReducer;
