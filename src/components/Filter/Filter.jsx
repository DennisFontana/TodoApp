// import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {
	changeFilterValue,
	changeFilterStatus,
} from "../../store/todo/todo.actions";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
	const { filterValue } = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const handleChangeValue = (e) => {
		dispatch(changeFilterValue(e.target.value));
	};

	const handleChangeFilterStatus = (e) => {
		dispatch(changeFilterStatus(e.target.name));
	};

	return (
		<section>
			<form>
				<Input
					id="search"
					placeholder="Начни вводить"
					label="Поиск по названию:"
					onChange={handleChangeValue}
					value={filterValue}
				/>
				<div>
					<Button
						primary
						type="button"
						onClick={handleChangeFilterStatus}
						name="Все"
					>
						Все
					</Button>
					<Button
						type="button"
						onClick={handleChangeFilterStatus}
						name="Выполненные"
					>
						Выполненные
					</Button>
					<Button
						type="button"
						onClick={handleChangeFilterStatus}
						name="Удалённые"
					>
						Удалённые
					</Button>
				</div>
			</form>
		</section>
	);
};
export default Filter;
