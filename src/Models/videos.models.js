const db = require('../Utils/database');
const { DataTypes } = require('sequelize');


//Create VIDEOS Model
const Videos = db.define('videos', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  url: {
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

module.exports = Videos; 