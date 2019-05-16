/* eslint-disable no-unused-expressions */
'use strict';

// Assertions
const chai = require('chai');
const expect = chai.expect;
const chaiThings = require('chai-things');
chai.use(chaiThings);

// Component
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import React from 'react';
import DogList from './component';

describe('Challenge 3 - React Component', () => {
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
  // you can use `wrapper` and `doggies`
  // to help make assertions!
  describe('<DogList /> component', () => {
    it('renders a `ul` to hold the dogs', () => {
      const wrapper = shallow(<DogList dogs={doggies} />);

      // your expect assertion here...
      expect(wrapper.find('ul')).to.have.length(1);
    });

    it('there should be an `li` in the `ul` for each dog in the list (dog list is passed in as props)', () => {
      const wrapper = shallow(<DogList dogs={doggies} />);

      // your expect assertion here...
      expect(wrapper.find('li')).to.have.length(2);
        });

    it('each `li` should display the name of each dog', () => {
      const wrapper = shallow(<DogList dogs={doggies} />);

      // your expect assertion here...
      expect(wrapper.find('li').at(0).text()).to.contain('Cody');
      expect(wrapper.find('li').at(1).text()).to.contain('Spike');
    });

    it('there should be no `li` elements in the `ul` if there are no dogs in the list', () => {
      const wrapper = shallow(<DogList dogs={[]} />);

      // your expect assertion here...
      expect(wrapper.find('li')).to.have.length(0);
    });
  });
});
