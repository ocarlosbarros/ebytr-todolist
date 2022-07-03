import { Model , STRING } from 'sequelize';
import db from '..';

class User extends Model {
  public username: string;
  public email:string;
  public password: string;
  public role:string;
}
    
User.init({
  username: STRING,
  email: STRING,
  password: STRING,
  role: STRING
}, {
  sequelize: db,
  modelName: 'User',
  timestamps:false,
});

export default User;
