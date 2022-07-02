import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'ebytr_todolist_database',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone:'Z',
  },
  logging: false,
}

module.exports = config;