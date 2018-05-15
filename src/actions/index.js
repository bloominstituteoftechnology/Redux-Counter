export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_FIVE = 'INCREMENT_BY_FIVE'; 

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

export const incrementByFive = () => {
  return {
    type: INCREMENT_BY_FIVE, 
    payload: 5
  }
}; 


