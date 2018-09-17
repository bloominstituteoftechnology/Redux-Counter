export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const IFODD = 'IFODD';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (number) => {
  // Fill in this function
  return { type: 'INCREMENT'}; // returns an action
};

export const decrement = (number) => {
  // Fill in this function
  return { type: 'DECREMENT'}; // returns an action
};

export const ifodd = () => {
  return { type: 'IFODD'};
};
