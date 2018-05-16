import { INCREMENT, DECREMENT, RESET } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export const counter = (count = 0, action) => {
  //console.log("reducer props: ", this.props)
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      count += action.payload;
      return count;
    case DECREMENT:
    // Fill in the body of this case
      count -= action.payload;
      return count;
    case RESET:
      return count = action.payload;

    default:
      return count;
  }
};