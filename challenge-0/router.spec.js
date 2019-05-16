/* eslint-disable no-unused-expressions */
'use strict';

// Assertions
const chai = require('chai');
const expect = chai.expect;
const chaiThings = require('chai-things');
chai.use(chaiThings);

// Model
const {Dog} = require('../app/server/models');

// Routes
const app = require('../app/server/app');
const agent = require('supertest')(app);

describe('Challenge 0 - Example', () => {
  // ------------------------------------
  // ---------- TEST SETUP --------------
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
    }
  ];

  beforeEach(async () => {
    const addedDogs = await Dog.bulkCreate(dogData);
    dogsInDb = addedDogs.map(dog => dog.dataValues);
  });

  // ------------------------------------
  // ------- YOUR TESTS HERE ------------
  // ------------------------------------
  // you can use `response` and `dogsInDb` from above
  // to help make your assertions!
  describe('GET /api/dogs', () => {
    xit('response status should be 999', async () => {
      const response = await agent.get('/api/dogs');

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('response should be an object with a message and data field', async () => {
      const response = await agent.get('/api/dogs');

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('response data should be the same length as db data', async () => {
      const response = await agent.get('/api/dogs');

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('response data should match the db data', async () => {
      const response = await agent.get('/api/dogs');

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });
  });
});
