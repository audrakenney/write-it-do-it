/* eslint-disable no-unused-expressions */
'use strict';

// Assertions
const chai = require('chai');
const expect = chai.expect;
const chaiThings = require('chai-things');
chai.use(chaiThings);

// Redux
import store, { gotDogs } from './redux';

describe('Challenge 4 - Redux Store', () => {
  // ------------------------------------
  // ----------- TEST SETUP -------------
  // -----------------------------------
  const doggies = [
    {
      id: 1,
      name: 'Cody',
      age: 5
    },
    {
      id: 2,
      name: 'Spike',
      age: 1
    }
  ];

  // ------------------------------------
  // ------- YOUR TESTS HERE ------------
  // ------------------------------------
  // you can use `newState` and `doggies`
  // to help make assertions!
  describe('Redux store action creator and reducer', () => {
    xit('has an action creator that returns an object', () => {
      const returnValue = gotDogs(doggies);
      // you may want to make use of typeof:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('the action creator returns an object with `type` and `dogs` fields', () => {
      const returnValue = gotDogs(doggies);

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('the `dogs` field of the action should match the dogs passed in to the action creator', () => {
      const returnValue = gotDogs(doggies);

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });

    xit('the reducer returns a new state with dogs after dispatching `addDogs`', () => {
      store.dispatch(gotDogs(doggies));
      const newState = store.getState();

      // your expect assertion here...
      expect('your test').to.equal('goes here!');
    });
  });
});
