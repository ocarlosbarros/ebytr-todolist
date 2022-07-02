import { QueryInterface, INTEGER, STRING, DATE } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      username: {
        type: STRING
      },
      email: {
        type: STRING
      },
      password: {
        type: STRING
      },
      role: {
        type: STRING
      },
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Users');
  }
};