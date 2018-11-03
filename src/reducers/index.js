import { INCREMENT, DECREMENT } from "../actions";

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      // if (count < 1 || count % 2 !== 0) {
      return (count = count += action.payload);
    // } else return count;
    case DECREMENT:
      return (count = count -= action.payload);
    default:
      return count;
  }
};




