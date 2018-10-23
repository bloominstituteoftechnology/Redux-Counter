// actions have nothing to do with updating any of the logic of the
// redux store- that's a job solely for the reducers.

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// we finna name our declared constant strings as variable names as a naming
// convention in Redux. They're called ACTION TYPES. Why do we do this??
// to prevent you from fuckin up with typos / using intellisense

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

// these action creators will be "binded" with the component, i.e.
// we finna IMPORT them as functions in the dang component and then
// INCLUDE THEM in the connect function.

export const increment = () => {
  // Fill in this function
  return {
    type: INCREMENT,
    payload: 1
  };
};

export const decrement = () => {
  // Fill in this function
  return {
    type: DECREMENT,
    payload: 1
  };
};
