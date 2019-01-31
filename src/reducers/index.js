import { INCREMENT, DECREMENT, ODDINCREMENT } from "../actions";

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: (state.count += 1)
      };
    // Fill in the body of this case
    case DECREMENT:
      return {
        count: (state.count -= 1)
      };
    case ODDINCREMENT:
      if (state.count % 2 !== 0) {
        return { count: (state.count += 1) };
      } else return state;
    // Fill in the body of this case
    default:
      return state;
  }
};
