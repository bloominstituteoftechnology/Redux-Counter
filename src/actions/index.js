export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_IFODD = 'INCREMENT_IFODD';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  return {
    type: INCREMENT,
    payload: 1
  }
};

export const decrement = () => {
  // Fill in this function
  return {
    type: DECREMENT,
    payload: 1
  }
};

export const increment_ifodd = () => {
  return {
    type: INCREMENT_IFODD,
    payload: 1
  }
};

export const increment_async = () => {
  return {
    type: INCREMENT_ASYNC,
    payload: 1
  }
};