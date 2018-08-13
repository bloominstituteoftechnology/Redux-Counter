import { INCREMENT, DECREMENT } from '../actions';
import { Object } from 'core-js';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
const counter = (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      return Object.assign({}, count, {count: count + 1})
    case DECREMENT:
    // Fill in the body of this case
      return Object.assign({}, count, {count: count - 1})
    default:
      return count;
  }
};

export default counter;
