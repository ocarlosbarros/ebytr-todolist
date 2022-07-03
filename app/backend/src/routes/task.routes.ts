import { Router } from 'express';
import TaskService from '../services/task.service';
import TaskController from '../controllers/task.controller';
import TaskRepository from '../database/models/repositories/task.repository';

const taskRouter = Router();

const taskRepository = new TaskRepository()
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

taskRouter.get('/', taskController.findAll);

export default taskRouter;
