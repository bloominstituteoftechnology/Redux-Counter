export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
// ACTION ACTION ACTION
// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).
// ACTION ACTION ACTION
let count = 0;
export const increment = () => {
  // Fill in this function
  // console.log(state);
  return {
    type: INCREMENT,
    payload: ++count
  };

};

export const decrement = () => {
  // Fill in this function
  // console.log(state)
  return {
    type: DECREMENT,
    payload: --count
  };
};
// ACTION ACTION ACTION
