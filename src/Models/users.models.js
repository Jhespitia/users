const db = require('../Utils/database');
const { DataTypes } = require('sequelize')

//Create USER Model
const Users = db.define('users', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Users; 