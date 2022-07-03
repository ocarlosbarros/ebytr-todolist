import { QueryInterface, INTEGER, STRING, DATE } from 'sequelize';
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      userId: {
        type: INTEGER,
        references: { model: 'Users', key: 'id'}
      },
      name: {
        type: STRING
      },
      description: {
        type: STRING
      },
      status: {
        type: STRING
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Tasks');
  }
};