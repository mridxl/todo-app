import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import './main.css';
import { useState, useEffect } from 'react';

const PORT = 8080;

function App() {
	return (
		<>
			<section className="container">
				<Header />
				<Todos />
			</section>
		</>
	);
}
function Todos() {
	const [todoList, setTodo] = useState();

	useEffect(() => {
		async function fetchTodo() {
			try {
				const res = await fetch(`http://localhost:${PORT}/todos`);
				const json = await res.json();
				setTodo(() => json);
			} catch (error) {
				alert(error);
			}
		}
		fetchTodo();
	}, []);
	return (
		<div>
			<CreateTodo todos={todoList} setTodo={setTodo} />
			<TodoItem todoList={todoList} setTodo={setTodo} />
		</div>
	);
}

function TodoItem({ todoList, setTodo }) {
	console.log(todoList);
	return (
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
									completeTodo(todo, setTodo);
								}}
							>
								<p className="todo-desc">{todo.description}</p>
							</button>
						</li>
					);
				})}
		</ol>
	);
}

function completeTodo(todoItem, setTodo) {
	const reqBody = JSON.stringify({ 
		id: todoItem._id,
		completed: todoItem.completed
	 });
	fetch(`http://localhost:${PORT}/completed`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: reqBody,
	})
		.then((Response) => {
			if (!Response.ok) {
				alert("Todo couldn't be completed");
			}
			return Response.json();
		})
		.then(() => {
			setTodo((prevTodos) =>
				prevTodos.map((todo) =>
					todo._id === todoItem._id ? { ...todo, completed: !todo.completed } : todo
				)
			);
		});
}
export default App;
