export const INCREMENT = 'INCREMENT';//new, must be string, allcaaps indicates that
export const DECREMENT = 'DECREMENT';//new

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => ({//returning an object
  // Fill in this function
  type: INCREMENT,//not optional
});

export const decrement = () => ({
  // Fill in this function
  type: DECREMENT,
});
