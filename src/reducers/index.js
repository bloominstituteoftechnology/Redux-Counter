import { INCREMENT, DECREMENT } from "../actions";

//this is the first function we write.

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  // action is an object,
  switch (
    action.type // look at the argument we just passed in, an object, it has a key called type- what does it say. its a string "INCREMENT" or "DECREMENT"
  ) {
    case INCREMENT:
      // Fill in the body of this case
      return count + 1;

    case DECREMENT:
      // Fill in the body of this case
      return count - 1;
    default:
      return count;
  }
};
