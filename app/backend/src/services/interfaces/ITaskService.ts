import ITask from 'src/database/models/interfaces/ITask';
interface IUserService {
    create(entity: ITask): Promise<ITask>;
    findAll(): Promise<Array<ITask>>;
    findById(id: number):Promise<ITask|void>
    update(entity: ITask): Promise<ITask>;
    delete(id: number): Promise<void>;   
}

export default IUserService;