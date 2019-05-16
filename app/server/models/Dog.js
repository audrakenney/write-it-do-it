'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const Dog = db.define('dog', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  breed: Sequelize.STRING
});

module.exports = Dog;
