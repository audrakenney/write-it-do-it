'use strict';

const {Op} = require('sequelize');
const {Dog} = require('../app/server/models');

// write your class method here...
// reference on Sequelize Ops:
// http://docs.sequelizejs.com/manual/querying.html#basics
Dog.findPuppies = undefined;

module.exports = Dog;
