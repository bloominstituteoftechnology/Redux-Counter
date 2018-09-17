import { INCREMENT, DECREMENT, IFODD } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      return ++count;

    case DECREMENT:
      // Fill in the body of this case
      return --count;
    case IFODD:
      // Function that determines if the number is odd
      const isOdd = function(x) { return x % 2; };

      if (isOdd(count)) {
        return ++count;
      }
      else return count;

    default:
      return count;
  }
};
