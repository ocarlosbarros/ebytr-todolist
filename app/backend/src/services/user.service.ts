import IUser from "src/database/models/interfaces/IUser";
import IUserService from "./interfaces/IUserService";
import IRepository from '../database/models/repositories/IRepository';
import { encryptPassword } from "../helpers";

class UserService implements IUserService  {
    private _userRepository;

    constructor(userRepository: IRepository<IUser>){
        this._userRepository = userRepository;
    }
    
    async create(entity: IUser): Promise<IUser> {
        const { password: passwordWithoutCrypt } = entity;

        const password = await encryptPassword(passwordWithoutCrypt);

        const created = await this._userRepository.create({ ...entity, password })

        return created;
    }
    
    async findAll(): Promise<IUser[]> {
        const allUsers = await this._userRepository.findAll();
        return allUsers;
    }
    
    async findById(id: number): Promise<void | IUser> {
        throw new Error("Method not implemented.");
    }

    async update(entity: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    
    async delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
        
}

export default UserService;