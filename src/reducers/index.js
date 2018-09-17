import { INCREMENT, DECREMENT, CHECKODD } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      action.payload++
      return action.payload;


    case DECREMENT:
    // Fill in the body of this case
      action.payload--
      return action.payload;

    case CHECKODD:
      if (!(action.payload % 2 === 0)) {
        console.log('checking odd')
        action.payload++
        return action.payload;
      }      


    default:
      return count;
  }
};
