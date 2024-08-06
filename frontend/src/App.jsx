import CreateTodo from './components/CreateTodo';
import Header from './components/Header';
import './main.css';
import { useState, useEffect } from 'react';

function App() {
	const init = [
		{
			description: 'This is a sample task',
			completed: false,
		},
		{
			description: 'You can click a task to mark it as completed',
			completed: false,
		},
		,
		{
			description: 'This is a completed task',
			completed: true,
		},
	];
	useEffect(() => {
		try {
			async function fetchTodo() {
				const res = await fetch('http://localhost:8080/todos');
				const json = await res.json();
				setTodo(json);
			}
			fetchTodo();
		} catch (error) {
			alert(error);
		}
	});

	const [todoList, setTodo] = useState([]);

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
									<li className={todo.completed ? 'todo-completed' : 'todo'} id={todo._id}>
										<button onClick={completeTodo}>
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

function completeTodo(){

}

export default App;
