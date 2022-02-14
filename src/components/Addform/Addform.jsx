import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { v4 as uuid4 } from "uuid";
import { addTodo } from "../../store/todo/todo.actions";

const Addform = () => {
	const [title, setTitle] = useState("");
	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const dispatch = useDispatch();

	const handleCreate = (e) => {
		e.preventDefault();
		if (!title || title === " ") return;
		dispatch(addTodo(uuid4(), title));
		setTitle("");
	};

	return (
		<div>
			<section>
				<form>
					<Input
						value={title}
						onChange={handleChange}
						id="form"
						placeholder="Название"
						label="Новое задание:"
					/>
					<div>
						<Button onClick={handleCreate} type="submit">
							Создать
						</Button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default Addform;
