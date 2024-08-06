const zod = require('zod');

/* Todo:
 *   {
 *       title: string
 *       description : string
 *   }
 *   Delete:
 *   {
 *       id : string
 *   }
 */
const createTodo = zod.object({
	description: zod.string(),
});
const updateTodo = zod.object({
	id: zod.string(),
});

module.exports = {
	createTodo,
	updateTodo,
};
