const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('admin@123', 10);
    await queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: hashedPassword,
        userName: 'Admin Manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'employee@gmail.com',
        password: hashedPassword,
        userName: 'Normal Employee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};