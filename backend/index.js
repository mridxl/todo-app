const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todos } = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.post('/todos', async function (req, res) {
	const payload = req.body;
	const parserdPayload = createTodo.safeParse(payload);

	if (!parserdPayload.success) {
		res.status(411).json({
			msg: `Validation error: ${parserdPayload.error}`,
		});
		return;
	}

	//put it in db
	await todos.create({
		title: payload.title,
		description: payload.description,
		completed: false,
	});

	res.json({
		msg: 'Todo Created',
	});
});

app.get('/todos', async function (req, res) {
	const allTodos = await todos.find();
	res.json(allTodos);
});

app.put('/completed', async function (req, res) {
	const payload = req.body;
	const parserdPayload = updateTodo.safeParse(payload);

	if (!parserdPayload.success) {
		res.status(411).json({
			msg: `Validation error: ${parserdPayload.error}`,
		});
		return;
	}

	// change todo completed status
	await todos.updateOne({ _id: req.body.id }, { completed: true });

	res.json({
		msg: 'todo completed',
	});
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
