import ITask from "src/database/models/interfaces/ITask";
import IRepository from "src/database/models/repositories/IRepository";
import ITaskService from "./interfaces/ITaskService";

class TaskService implements ITaskService  {
    private _taskRepository;

    constructor(taskRepository: IRepository<ITask>){
        this._taskRepository = taskRepository;
    }
    
    async create(entity: any): Promise<ITask> {
        throw new Error("Method not implemented.");
    }
    
    async findAll(): Promise<Array<ITask>> {
        const allTasks = await this._taskRepository.findAll();
        return allTasks;
    }
    
    async findById(id: number): Promise<void | ITask> {
        throw new Error("Method not implemented.");
    }

    async update(entity: any): Promise<ITask> {
        throw new Error("Method not implemented.");
    }
    
    async delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
        
}

export default TaskService;