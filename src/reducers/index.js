import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export const counterA = (count = 0, action) => {
  console.log("reduce inkoved");
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      // return ++count; // OPTION 1 -> This 'mutate' the `count`argument.
      // return count++; // OPTION 2 -> this dos not works!
      return count + 1; // OPTION 3 -> Works, and do not 'mutates' `count`
    case DECREMENT:
      // Fill in the body of this case
      return count - 1;
    default:
      return count;
  }
};
 