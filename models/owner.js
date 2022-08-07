// importing sequelize
const Sequelize = require('sequelize');

// importing sequelize instance with database configurations
const sequelize = require('../util/database');

// Defining owner model by its model name, {attributes: {datatypes: options}
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