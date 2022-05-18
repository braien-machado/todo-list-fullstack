module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Tasks',
    [
      {
        task: 'Fazer teste técnico para Ebyrt',
        status: 'em andamento',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        task: 'Treinar pitch pessoal',
        status: 'pendente',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],
    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};
