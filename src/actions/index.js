export const INCREMENT = 'INCREMENT';  // action types
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (count) => {
  console.log(count)
  const newCount = count + 1;
  return {
    type: INCREMENT,
    payload: newCount
  }
};

export const decrement = (count) => {
  const newCount = count - 1;
  return {
    type: DECREMENT,
    payload: newCount
  }
};
