import { Request, Response, NextFunction } from 'express';
import IController from './interfaces/IController';

class UserController implements IController {

  async create(_request: Request, response: Response, _next: NextFunction): Promise<Response | void> {
    return response.status(201).json({ message: 'create' });
  }

  async findAll(_request: Request, response: Response, _next: NextFunction): Promise<void | Response> {
    return response.status(200).json({ message: 'create' });
  }

  async update(_request: Request, response: Response, _next: NextFunction): Promise<void | Response> {
    return response.status(200).json({ message: 'create' });
  }

  async delete(_request: Request, response: Response, _next: NextFunction): Promise<void | Response> {
    return response.status(204).json({ message: 'create' });
  }
}

export default UserController;
