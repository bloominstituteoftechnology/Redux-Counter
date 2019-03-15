// This const is an 'action type';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

// This function is an 'action creator';
export const increment = () => {
  // Fill in this function
  // the object being returned here is an 'action';
  return {
    type: INCREMENT
  }
};
// This function is an 'action creator';
export const decrement = () => {
  // Fill in this function
  // the object being returned here is an 'action';
  return {
    type: DECREMENT
  }
};

// returning an action from an action creator
// will automatically run the dispatch function
// which passes our action to the reducer


// Every action needs a type!
// Type which describes the change we are trying to make. 
// Payload is the data that our reducer will update the state with. 