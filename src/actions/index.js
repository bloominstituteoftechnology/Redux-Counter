export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ODD = 'INCREMENT_ODD';
export const RESET = 'RESET'

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

export const incrementOdd = () => {
  return {
    type: INCREMENT_ODD,
    payload: Math.floor(Math.random() * 5)
  }
}

export const reset = () => {
  return {
    type: RESET,
    payload: 0
  }
}