function TodoList({ todos }) {
	return (
		<>
			<ol className="toDoList">
				{todos.map((todo) => {
					return (
						<button>
							<li className={todo.completed ? 'todo-completed' : 'todo'}>
								<p className="todo-desc">{todo.description}</p>
							</li>
						</button>
					);
				})}
			</ol>
		</>
	);
}
export default TodoList;
