import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      return { count: state.count + 1 }; // If the type is increment, add one to the counter within the state

    case DECREMENT:
    // Fill in the body of this case
      return { count: state.count - 1 }; // If the type is increment, subtract one to the counter within the state

    default:
      return state;
  }
};
