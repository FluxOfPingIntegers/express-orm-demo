const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// todo
const Owner = sequelize.define('owner', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

module.exports = Owner;