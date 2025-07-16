import express from 'express';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from '../controllers/todo.js';
import isAuthentcated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.route('/').post(isAuthentcated, createTodo).get(getAllTodos);
router.route('/:todoId').put(isAuthentcated, updateTodo).delete(isAuthentcated, deleteTodo);

export default router;