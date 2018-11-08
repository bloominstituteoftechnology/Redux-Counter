export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENTIFODD = 'INCREMENTIFODD';
export const INCREMENTASYNC = 'INCREMENTASYNC';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  console.log('clicked')
  return {type: INCREMENT}
};

export const decrement = () => {
 console.log('clicked as well')
  // Fill in this function
  return {type: DECREMENT}
};

export const incrementIfOdd = () => {
 console.log('also clicked')
 return {type: INCREMENTIFODD}
}

export const incrementAsync = () => {
 console.log('async click')
 return {type: INCREMENTASYNC}
}