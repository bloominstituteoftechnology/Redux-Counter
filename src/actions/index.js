export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = c => {
  // Fill in this function
  let counter = c + 1;
  return { type: INCREMENT, payload: { count: counter } };
};

export const decrement = c => {
  // Fill in this function
  let counter = c - 1;
  return { type: DECREMENT, payload: { count: counter } };
};
