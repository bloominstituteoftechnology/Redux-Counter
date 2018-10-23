// Reducers are pure functions, i.e. they produce no side
// effects- they will return the same output given a fixed
// input every single time.
// You do not process sideeffect-ridden operations with a reducer, i.e.
// fetching from an API, Math.random functionality, etc.

import { INCREMENT, DECREMENT } from "../actions";

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      return (count = count + action.payload); // AKA count += action.payload

    case DECREMENT:
      // Fill in the body of this case
      return (count = count - action.payload);

    default:
      return count;
  }
};
