export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENTIFODD = 'INCREMENTIFODD';
export const INCREMENTASYNC = 'INCREMENTASYNC';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (count) => {
  // Fill in this function
  return {type: INCREMENT, payload: count};
};

export const decrement = (count) => {
  // Fill in this function
  return {type: DECREMENT, payload: count};
};

export const incrementIfOdd = (count) => {
  return {type: INCREMENTIFODD, payload: count};
};

export const incrementAsync = (count) => {
  return {type: INCREMENTASYNC, payload: count};
};