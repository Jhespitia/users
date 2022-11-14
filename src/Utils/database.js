//get the connection to the database
const { Sequelize } = require('sequelize');

//Import Dotevn
require('dotenv').config();


const db = new Sequelize({
  database: process.env.DB_NAME || 'users',
  username: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || 'Machadito',
  dialect: 'postgres',
});

module.exports = db;