import { INCREMENT, DECREMENT, INCREMENT_ODD, INCREMENT_ASYNC } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      return count + action.payload;
    case DECREMENT:
    // Fill in the body of this case
      return count - action.payload;
    case INCREMENT_ODD:
      return count + action.payload;
    case INCREMENT_ASYNC:
      return count + action.payload;
    default:
      return count;
  }
};
