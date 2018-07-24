import { INCREMENT, DECREMENT, IFODD } from '../actions/index';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + action.payload;
    case DECREMENT:
      return count - action.payload;
    case IFODD:
      if (count % 2 === 1) return count + action.payload;
      break;
    default:
      return count;
  }
};
