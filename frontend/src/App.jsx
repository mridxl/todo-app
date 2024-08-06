import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import './main.css'

function App() {
	return (
		<>
			<section className="container">
				<div className="heading">
					<img className="heading-img" src='./src/laptop.png'/>
					<h1 className="heading-title">To-Do List</h1>
				</div>

				<div>
					<CreateTodo />
					<TodoList />
				</div>
			</section>
		</>
	);
}

export default App;
