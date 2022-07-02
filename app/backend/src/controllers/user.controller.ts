import { Request, Response, NextFunction } from 'express';
import IUserService from 'src/services/interfaces/IUserService';
import IController from './interfaces/IController';
class UserController implements IController {

  private _userService;

  constructor(userService: IUserService) {
    this._userService = userService;
  }


  create = async (request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const { username, email, password, role } = request.body;
      const created = await this._userService.create({ username, email, password, role });
      return response.status(201).json(created);
    } catch (error) {
      next(error);
    }
    
  }

  findAll = async (_request: Request, response: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const allUsers = await this._userService.findAll()
      return response.status(200).json(allUsers);
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

export default UserController;
