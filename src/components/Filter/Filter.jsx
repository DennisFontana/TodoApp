import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Filter = ({ onChangeFilterValue, filterValue, onChangeFilterStatus }) => {
	const handleChangeValue = (e) => {
		onChangeFilterValue(e.target.value);
	};
  const handleChangeFilterStatus = (e) => {
    onChangeFilterStatus(e.target.textContent)
    // console.log(e.target.textContent);
  }
  
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
					<Button primary type="button" onClick={handleChangeFilterStatus} >
						Все
					</Button>
					<Button type="button"onClick={handleChangeFilterStatus} >Выполненные</Button>
					<Button type="button"onClick={handleChangeFilterStatus} >Удалённые</Button>
				</div>
			</form>
		</section>
	);
};
export default Filter;
