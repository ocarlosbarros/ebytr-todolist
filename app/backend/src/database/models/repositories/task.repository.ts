import IRepository from './IRepository';
import ITask from '../interfaces/ITask';
import Task from '../entities/task';
import User from '../entities/user';

class TaskRepository implements IRepository<ITask> {
    private _model;
    
    constructor(){
        this._model = Task;
    }

    create(entity: ITask): Promise<ITask> {
        throw new Error('Method not implemented.');
    }
    
    async findAll(): Promise<Array<ITask>> {
        const allTasks = await this._model.findAll({
            include: { model: User, as: 'userId' },
            raw:true,
            nest:true,
        });
        return allTasks;
    }

    findById(id: number): Promise<ITask | null> {
        throw new Error('Method not implemented.');
    }
    update(entity: ITask): Promise<ITask> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}

export default TaskRepository;