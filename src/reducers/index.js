import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      if(count < 5) {
        count = count + 1;
      }
      return count;
    case DECREMENT:
      if(count > 0) {
        count = count - 1;
      }
      // count--; is valid
      return count;
    default:
      return count;
  }
};
