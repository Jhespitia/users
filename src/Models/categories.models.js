const db = require('../Utils/database');
const { DataTypes } = require('sequelize');


//Create CATEGORIES Model
const Categories = db.define('categories', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Categories; 