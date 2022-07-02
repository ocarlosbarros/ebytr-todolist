import { Model, STRING, INTEGER } from 'sequelize';
import db from '..';
import User from './user';

class Task extends Model {
    public name:string;
    public description:string;
    public status: string;
}

Task.init({
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: STRING,
    description: STRING,
    status: STRING,
  }, {
    sequelize: db,
    modelName: 'Task',
  });

User.hasMany(Task)
Task.belongsTo(User, { foreignKey: 'id', as: 'userId'})

export default Task;

