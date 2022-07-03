import IRepository from './IRepository';
import User from '../entities/user';
import IUser from '../interfaces/IUser';

class UserRepository implements IRepository<IUser>  {
    private _model;

    constructor(){
        this._model = User;
    }
        
    async create(entity: any): Promise<IUser> {
        const created = await this._model.create(entity);

        return created;
    }
    
    async findAll(): Promise<IUser[]> {
        const allUsers = await this._model.findAll({ raw: true });
        return allUsers;
    }

    async findById(id: number): Promise<IUser|null> {
        const founded = await this._model.findByPk(id);

        if(!founded)return null;

        return founded;
    }
    
    async update(entity: IUser): Promise<IUser> {
        const [updated] = await this._model.findAll();
        return updated;
    }

    async delete(id: number): Promise<void> {
        await this._model.destroy({ where: { id }});
    }

    
}

export default UserRepository;