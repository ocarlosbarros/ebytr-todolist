import { QueryInterface } from 'sequelize';
module.exports = {
  async up (queryInterface: QueryInterface) {
    
    await queryInterface.bulkInsert('Tasks', 
    [
      {
        userId:1,
        name:'Reunião',
        description:'Reunião na Wayne Enterprise com Lucius Fox',
        status:'pendente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:1,
        name:'Treinamento',
        description:'Treinamento estilo Keysi, estilo brutal, assim como o Krav Maga',
        status:'pronto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:2,
        name:'Batalha',
        description:'Derrotar Circe e frustrar seus planos',
        status:'andamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:4,
        name:'Missão secreta',
        description:'Sem descrição',
        status:'andamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:3,
        name:'Evento',
        description:'Retornar a Wakanda para liderar o país',
        status:'pendente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
    
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('Tasks', {}, {});
    
  }
};
