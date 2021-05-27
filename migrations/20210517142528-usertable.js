'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
  return queryInterface.createTable('user_table',{
    id:{
      type:Sequelize.INTEGER,
      unique:true,
      allowNull:false,
      primaryKey:true,
    autoIncrement:true
  },
    user_name:{ 
      type:Sequelize.STRING,
      allowNull:false
    },
    password:{
       type:Sequelize.STRING,
       allowNull:false
      },
    email:{ 
      type:Sequelize.STRING,
      allowNull:false
    },
  },
    {
    modelName:"user_table",
    Sequelize,
    tableName:"user_table",
    timestamps:false 


  })
}, 
   
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
  }
