import { Application as App } from 'express';
import userRouter from './user.routes';

const Routes = (app: App) => {
  app.use('/users', userRouter);
};

export default Routes;
