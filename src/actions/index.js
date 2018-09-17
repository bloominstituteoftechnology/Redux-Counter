export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLY_BY_TWO = 'MULTIPLY_BY_TWO';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  console.log('in action');
  return { type: 'INCREMENT' };
};

export const decrement = () => {
  console.log('in action');
  return { type: 'DECREMENT' };
};

export const multiplyByTwo = () => {
  console.log('in action');
  return { type: 'MULTIPLY_BY_TWO' };
};
