import express from 'express';
import { createTask } from '../functions/createTask.js';
import { readTasks } from '../functions/readTasks.js'
import { updateTask } from '../functions/updateTask.js';
import { deleteTask } from '../functions/deleteTask.js';

const router = express.Router();

router.post('/tasks', createTask);

router.get('/tasks', readTasks);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

export default router;