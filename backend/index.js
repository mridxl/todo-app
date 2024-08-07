const express = require('express');
const cors = require('cors');

const { createTodo, updateTodo } = require('./types');
const { todos } = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.post('/todos', async function (req, res) {
	const payload = req.body;
	const parserdPayload = createTodo.safeParse(payload);

	if (!parserdPayload.success) {
		res.status(400).json({
			msg: `Validation error: ${parserdPayload.error}`,
		});
		return;
	}

	//put it in db
	await todos.create({
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
		res.status(400).json({
			msg: `Validation error: ${parserdPayload.error}`,
		});
		return;
	}

	// change todo completed status
	await todos.updateOne({ _id: req.body.id }, { completed: !req.body.completed });

	res.json({
		msg: 'todo updated',
	});
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
