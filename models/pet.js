const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// todo
const Pet = sequelize.define('owner', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  age: Sequelize.INTEGER
});

module.exports = Pet;