function CreateTodo() {
	return (
		<>
			<input
				className="input-box"
				id="todo"
				placeholder="~ Today I need to ~"
			/>
			<button className="button">
				<span>Submit</span>
			</button>
		</>
	);
}
export default CreateTodo;
