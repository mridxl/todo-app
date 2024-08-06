const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(
	'mongodb+srv://mridxl:P%40ssw0rd@cluster0.vnzqjfw.mongodb.net/todos'
);
/***
 * todo {
 *    
 *      description: string,
 *      completed: boolean
 *  }
 */

// create a new schema
const todoSchema = new Schema({
	description: String,
	completed: Boolean,
});

//create a new table with the defined schema
const todos = mongoose.model('todos', todoSchema);

//exporting the todo table
module.exports = {
	todos,
};
