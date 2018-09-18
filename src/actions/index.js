export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (payloadAmt) => {
  // Fill in this function
  // console.log(payloadAmt)
  return {type:'INCREMENT', payload: payloadAmt}
};

export const decrement = (payloadAmt) => {
  // Fill in this function
  return {type:'DECREMENT', payload: payloadAmt}
};
