/* eslint-disable no-unused-expressions */
'use strict';

// Assertions
const chai = require('chai');
const expect = chai.expect;
const chaiThings = require('chai-things');
chai.use(chaiThings);

// Model
const Dog = require('./modelMethod');

// Routes
const app = require('../app/server/app');
const agent = require('supertest')(app);

describe('Challenge 2 - Sequelize model', () => {
  // ------------------------------------
  // ----------- TEST SETUP -------------
  // ------------------------------------
  let dogsInDb;
  const dogData = [
    {
      name: 'Cody',
      age: 5
    },
    {
      name: 'Spike',
      age: 1
    },
    {
      name: 'BabyPup',
      age: 0
    }
  ];

  beforeEach(async () => {
    const addedDogs = await Dog.bulkCreate(dogData);
    dogsInDb = addedDogs.map(dog => dog.dataValues);
  });

  // ------------------------------------
  // ------- YOUR TESTS HERE ------------
  // ------------------------------------
  // you can use `response` and `dogsInDb`
  // to help make assertions!
  describe('Dog class method `findPuppies` (should return all dogs whose age is <= 1)', () => {
    xit('response should be an array', async () => {
      // to check if something is an array:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
      const response = await Dog.findPuppies();

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('length of response should match how many puppies are in the db', async () => {
      const response = await Dog.findPuppies();

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('data in response should match puppy data in db', async () => {
      const response = await Dog.findPuppies();

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });
  });
});
