const PORT = 8080;

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
						_id: 0,
						description: elem.value,
						completed: false,
					};

					const reqBody = JSON.stringify({
						description: elem.value,
					});
					fetch(`http://localhost:${PORT}/todos`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: reqBody,
					})
						.then((Response) => {
							if (!Response.ok) {
								alert('An error occurred while created the todo');
								throw new Error('Error errored while creating the todo');
							}
						})
						.then(() => {
							const newTodolist = [...todos, newTodo];
							setTodo(() => newTodolist);
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
