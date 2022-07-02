import { QueryInterface } from 'sequelize';

module.exports = {
  async up (queryInterface: QueryInterface) {
    
     await queryInterface.bulkInsert('Users', [
        {
        username: 'Batman',
        email: 'wayne@bruce.com',
        password: '$2a$10$OT6ZfLsedihJPjfl2MzGWOtTg07KAcLmSoJ7Yr7iHefQwW3ZBWkmS',
        role: 'admin'
        },
        {
          username: 'Mulher Maravilha',
          email: 'prince@diana.com',
          password: '$2a$10$4hP0Z.fg6lnZsRXcoEWDKOHyzer2XTsj3eBlGxLGr/OTCc7NH.FUi',
          role: 'user'
        },
        {
          username: 'Pantera Negra',
          email: 'wakanda@tchalla.com',
          password: '$2a$10$meswoUAmO0Z6MeccwnREp.RZlh1gGn2IMxEoDiGISiK2neAeG0mS6',
          role: 'user'
        },
        {
          username: 'Viúva Negra',
          email: 'romanoff@natasha',
          password: '$2a$10$9LxC9Q04QqsBTJcbMXOwUO8zGQXBAmQqb64ewL51CHh6t11i5WlJi',
          role: 'admin'
        },
    ], {});
  },

  async down (queryInterface: QueryInterface) {
     await queryInterface.bulkDelete('Users', {}, {});
  }
};
