import { Request, Response, NextFunction } from 'express';

interface IController {
  create(request: Request, response: Response, next: NextFunction): Promise<Response | void >;
  findAll(request: Request, response: Response, next: NextFunction): Promise<Response | void >;
  update(request: Request, response: Response, next: NextFunction): Promise<Response | void >;
  delete(request: Request, response: Response, next: NextFunction): Promise<Response | void >;
}

export default IController;
