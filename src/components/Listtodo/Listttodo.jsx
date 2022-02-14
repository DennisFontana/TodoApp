import React from "react";
import styled from "styled-components";
import Listitem from "../Listitem/Listitem";
import { getFilteredList } from "../../store/todo";
import { useSelector } from "react-redux";

const UL = styled.ul`
	padding: 0;
`;
const Listtodo = () => {
	const list = useSelector(getFilteredList);

	const todoList = list.map((item) => (
		<Listitem
			key={item.id}
			task={item.title}
			id={item.id}
			completed={item.completed}
		/>
	));

	return (
		<div>
			<UL>{todoList}</UL>
		</div>
	);
};

export default Listtodo;
