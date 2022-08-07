require('dotenv').config();
const password = process.env.CASUAL_PASS;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('express_orm_demo', 'root', password, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;