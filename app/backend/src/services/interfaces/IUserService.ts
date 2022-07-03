import IUser from 'src/database/models/interfaces/IUser';
interface IUserService {
    create(entity: IUser): Promise<IUser>;
    findAll(): Promise<Array<IUser>>;
    findById(id: number):Promise<IUser|void>
    update(entity: IUser): Promise<IUser>;
    delete(id: number): Promise<void>;   
}

export default IUserService;