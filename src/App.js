import "./App.css";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Listtodo from "./components/Listtodo/Listttodo";
import Addform from "./components/Addform/Addform";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSlice, getFilteredList } from "./store/todo/todo.selectors";

function App() {
	const { todoList, filterValue, filterStatus, deletedTodoList } =
		useSelector(getSlice);

	// Установка todo в LocalStorage
	useEffect(() => {
		localStorage.setItem("Todo", JSON.stringify(todoList));
	}, [todoList]);

	useEffect(() => {
		localStorage.setItem("deletedTodo", JSON.stringify(deletedTodoList));
	}, [deletedTodoList]);

	const filteredList = useSelector(getFilteredList);

	return (
		<div className="App">
			<Header showLength={filteredList.length} />
			<Filter />
			<Listtodo />
			<Addform />
		</div>
	);
}

export default App;
