import IRepository from './IRepository';
import User from '../entities/user';
import IUser from 'src/database/models/interfaces/IUser';

class UserRepository implements IRepository<IUser>  {
    private _model;

    constructor(){
        this._model = User;
    }
    
    
    create(entity: IUser): Promise<IUser> {
        throw new Error('Method not implemented.');
    }
    
    async findAll(): Promise<User[]> {
        const allUsers = await this._model.findAll();
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