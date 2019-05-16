import {createStore} from 'redux';

// ACTION TYPE
const GOT_DOGS = 'ADD_DOGS';

// ACTION CREATOR
// complete the action creator here!
export const gotDogs = undefined;

// REDUCER
const initialState = {
  dogs: []
};

// complete the reducer here!
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// STORE
export default createStore(reducer);
