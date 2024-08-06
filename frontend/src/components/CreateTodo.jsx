function CreateTodo({ todos, setTodo }) {
	return (
		<>
			<input
				className="input-box"
				id="todo"
				placeholder="~ Today I need to ~"
				autoComplete="off"
			/>
			<button
				className="button"
				onClick={() => {
					const elem = document.querySelector('.input-box');
					const newTodo = {
						description: elem.value,
						completed: false,
					};

					const reqBody = JSON.stringify({
						description: elem.value,
					});

					fetch('http://localhost:8080/todos', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: reqBody,
					}).then(() => {
						const newTodolist = [...todos, newTodo];
						setTodo(newTodolist);
					});
					elem.value = '';
				}}
			>
				<span>Submit</span>
			</button>
		</>
	);
}

export default CreateTodo;
