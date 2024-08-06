import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import './main.css';
import { useState, useEffect } from 'react';

function App() {
	const [todoList, setTodo] = useState([]);

	useEffect(() => {
		async function fetchTodo() {
			try {
				const res = await fetch('http://localhost:8080/todos');
				const json = await res.json();
				setTodo(json);
			} catch (error) {
				alert(error);
			}
		}
		fetchTodo();
	}, []);

	return (
		<>
			<section className="container">
				<Header />
				<div>
					<CreateTodo todos={todoList} setTodo={setTodo} />
					<ol className="toDoList">
						{todoList &&
							todoList.map((todo) => {
								return (
									<li
										className={todo.completed ? 'todo-completed' : 'todo'}
										key={todo._id}
									>
										<button
											onClick={() => {
												completeTodo(todo._id, setTodo);
											}}
										>
											<p className="todo-desc">{todo.description}</p>
										</button>
									</li>
								);
							})}
					</ol>
				</div>
			</section>
		</>
	);
}

function completeTodo(id, setTodo) {
	try {
		fetch('http://localhost:8080/completed', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id }),
		}).then(() => {
			setTodo((prevTodos) =>
				prevTodos.map((todo) =>
					todo._id === id ? { ...todo, completed: !todo.completed } : todo
				)
			);
		});
	} catch (error) {
		alert('An error occurred while updating the todo');
	}
}

export default App;
