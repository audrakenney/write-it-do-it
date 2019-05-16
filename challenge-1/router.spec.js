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

describe('Challenge 1 - Express route', () => {
  // ------------------------------------
  // ----------- TEST SETUP -------------
  // ------------------------------------
  const dogData = {
    name: 'Cody',
    age: 5
  };

  // ------------------------------------
  // ------- YOUR TESTS HERE ------------
  // ------------------------------------
  // you can use `response` and `dogFromDb`
  // to help make assertions!
  describe('POST /api/dogs', () => {
    xit('response status should be 201', async () => {
      const response = await agent.post('/api/dogs').send(dogData);

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('response should be an object with a message and data field', async () => {
      const response = await agent.post('/api/dogs').send(dogData);

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('message field of response should be `Success`', async () => {
      const response = await agent.post('/api/dogs').send(dogData);

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('response data should match the db data', async () => {
      const response = await agent.post('/api/dogs').send(dogData);
      const dogFromDb = await agent.get(`/api/dogs/${response.body.data.id}`);

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });
  });
});
