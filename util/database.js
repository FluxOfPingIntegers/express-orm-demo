// importing dotenv package to share contents of the .env file
require('dotenv').config();

// password for accessing the database which is saved in a private .env file
const password = process.env.CASUAL_PASS;

// importing sequelize package to interact with database
const Sequelize = require('sequelize');

// configuring database connection pool through Sequelize instance
const sequelize = new Sequelize('express_orm_demo', 'root', password, {
  dialect: 'mysql',
  host: 'localhost'
});

// exporting configured Sequelize instance
module.exports = sequelize;