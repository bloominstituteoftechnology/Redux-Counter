import { INCREMENT, INCREMENT_ODD, DECREMENT } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our Redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?

export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++count;
    case INCREMENT_ODD:
      return count % 2 === 0 ? count : ++count;
    case DECREMENT:
      return --count;
    default:
      return count;
  }
};
