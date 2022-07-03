import { Request, Response, NextFunction } from 'express';
import ITaskService from 'src/services/interfaces/ITaskService';
import IController from './interfaces/IController';
class TaskController implements IController {

  private _taskService;

  constructor(taskService: ITaskService) {
    this._taskService = taskService;
  }


  create = async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
    return response.status(200).json({ message: 'create' });
  }

  findAll = async (_request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const allTask = await this._taskService.findAll()
      return response.status(200).json(allTask);
    } catch (error) {
      next(error);      
    }
  }

  update = async (_request: Request, response: Response, _next: NextFunction): Promise<Response | void> => {
    return response.status(200).json({ message: 'create' });
  }

  delete = async (_request: Request, response: Response, _next: NextFunction): Promise<Response | void> => {
    return response.status(204).json({ message: 'create' });
  }
}

export default TaskController;
