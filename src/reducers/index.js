import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?

// The dispatcher will pass us an action we created. Respond accordingly.

export default (count = 0, action) => {
  console.log(action)
    switch (action.type) {
        case INCREMENT:
            // Fill in the body of this case
            return ++count;
        case DECREMENT:
            // Fill in the body of this case
            return --count;
        default:
            return count;
    }
};
