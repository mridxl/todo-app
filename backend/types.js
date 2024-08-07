const zod = require('zod');

/* Todo:
 *   {
 *       description : string
 *   }
 *   Complete:
 *   {
 *       id : string
 *   }
 */
const createTodo = zod.object({
	description: zod.string(),
});
const updateTodo = zod.object({
	id: zod.string(),
	completed: zod.boolean(),
});

module.exports = {
	createTodo,
	updateTodo,
};
