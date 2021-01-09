'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.addColumn('Tasks', 'isCompleted',  { type: Sequelize.BOOLEAN , defaultValue: false});
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.removeColumn('Tasks', 'isCompleted');
    
  }
};
