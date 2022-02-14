export const getSlice = (state) => state.todos;

export const getFilteredList = (state) => {
	const { todoList, filterValue, filterStatus, deletedTodoList } = state.todos;

	let filteredList;
	if (filterStatus === "Все") {
		filteredList = todoList;
	}
	if (filterStatus === "Выполненные") {
		const listDone = todoList.filter((status) => status.completed !== false);
		filteredList = listDone;
	}
	if (filterStatus === "Удалённые") {
		filteredList = deletedTodoList;
	}

	if (!filterValue) {
		return filteredList;
	}
	return filteredList.filter((todo) =>
		todo.title.toLowerCase().includes(filterValue.toLowerCase())
	);
};
