const mongoose = require('mongoose');
const { Schema } = mongoose;
const dbConnectionString =
	'<mongodb connection url here>';

mongoose.connect(dbConnectionString);
/***
 * todo {
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
