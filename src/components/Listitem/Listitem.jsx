import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { deleteTodo, changeDoneTodo } from "../../store/todo/todo.actions";

const LI = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	> p {
		font-size: 20px;
		margin: 0 7px 20px;
		padding: 5px;
	}
`;

const Listitem = ({ task, id, completed }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTodo(id));
	};
	const handleDone = () => {
		dispatch(changeDoneTodo(id));
	};

	return (
		<LI>
			<p>{task}</p>
			<div>
				{!completed && (
					<Button type="button" onClick={handleDone}>
						Выполнено
					</Button>
				)}
				<Button type="button" onClick={handleDelete}>
					Удалить
				</Button>
			</div>
		</LI>
	);
};

export default Listitem;
