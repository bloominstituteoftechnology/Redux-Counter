
// Source of truth for the types of action
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENTIFODD = 'INCREMENTIFODD';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

// You do not need to import these in the reducer files, redux automatically connects these actions to the reducer, and sends it the action(type/payload) that you return

export const increment = () => {
  // Fill in this function
  return {
    type: INCREMENT,
    payload: 1
  }
};

// you can do it either or
export const decrement = () => ({
  // Fill in this function
    type: DECREMENT,
    payload: 1
});

export const incrementIfOdd = () => {
  // Fill in this function
  return {
    type: INCREMENTIFODD,
    payload: 1
  }
};
