export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLY_BY_10 = 'MULTIPLY_BY_10';       // added this
export const CLEAR = 'CLEAR';                         // added this

// Our action creators will return
// an action packet that our reducer will receive. What does the action packet look like?
// Note that the action creator is not at all responsible for handling any of the actual
// logic of updating the central Redux store. That is left to the reducer(s).

export const increment = () => {
  // Fill in this function          // type is description of change that takes place, use CAPS!!!!
  return {
    type: 'INCREMENT'
  }
};

export const decrement = () => {
  // Fill in this function        // type is description of change that takes place, use CAPS!!!!
  return {
    type: 'DECREMENT'
  }
};


export const multBy10 = () => {
  return {
    type: 'MULTIPLY_BY_10'
  }
};

export const clear = () => {
  return {
    type: 'CLEAR'
  }
};
