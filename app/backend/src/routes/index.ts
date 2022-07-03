import { Application as App } from 'express';
import userRouter from './user.routes';
import taskRouter from './task.routes';

const Routes = (app: App) => {
  
  app.get('/', (_request, response,) => {
    return response.status(200).json({ message: 'Bem vindo ao EBYRT Todo List!'})
  });

  app.use('/users', userRouter);
  app.use('/tasks', taskRouter);
};

export default Routes;
