const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(
	'mongodb+srv://mridxl:P%40ssw0rd@cluster0.vnzqjfw.mongodb.net/todos'
);
/***
 * todo {
 *      title: string,
 *      description: string,
 *      completed: boolean
 *  }
 */

// create a new schema
const todoSchema = new Schema({
	title: String,
	description: String,
	completed: Boolean,
});

//create a new table with the defined schema
const todos = mongoose.model('todos', todoSchema);

//exporting the todo table
module.exports = {
	todos,
};
