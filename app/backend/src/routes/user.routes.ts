import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserService from '../services/user.service';
import UserRepository from '../database/models/repositories/user.repository';

const userRouter = Router();

const userRepository = new UserRepository()
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.get('/', userController.findAll);

export default userRouter;
