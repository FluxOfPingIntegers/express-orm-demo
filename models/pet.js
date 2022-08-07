// importing sequelize
const Sequelize = require('sequelize');

// importing sequelize instance with database configurations
const sequelize = require('../util/database');

// Defining pet model by its model name, {attributes: {datatypes: options}
const Pet = sequelize.define('pet', {
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