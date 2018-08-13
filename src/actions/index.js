import {store} from '../index.js';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => (
  store.dispatch({
    type:INCREMENT, 
    payload: 1
  })
)
  // Fill in this function


export const decrement = () => (
  // Fill in this function
  store.dispatch({
    type: DECREMENT,
    payload: 1 
  })
);

export const incrementIfOdd = () => {
  // Stretch Problem: Implement an increment function that
  // only increments if the counter value is odd
};

export const incrementAsync = () => {
  // Stretch Problem: Implement an increment function that
  // increments after waiting for one second
};
