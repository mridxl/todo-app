import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';
import './main.css';
import { useState } from 'react';

function App() {
	const [todos, setTodo] = useState([
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
	]);
	return (
		<>
			<section className="container">
				<Header />
				<div>
					<CreateTodo />
					<TodoList todos={todos} />
				</div>
			</section>
		</>
	);
}

export default App;
