const db = require('../Utils/database');
const { DataTypes } = require('sequelize');


//Create User_Courses Model
const userCourses = db.define('user_courses', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = userCourses;