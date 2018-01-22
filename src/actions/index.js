export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the centra Redux store. That
// is left to the reducer(s).

export const increment = () => {
   return {
     type: INCREMENT,
    //  payload:     // not needed in this case
   } 
};


export const decrement = () => {
   return {
     type: DECREMENT,
    // again, no payload needed in this case
   }
};

export const incrementIfOdd = () => {
  return {
    type: INCREMENT_IF_ODD,
  }
}

export const incrementAsync = () => {
  return {
    type: INCREMENT_ASYNC,
  }
}