import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  // console.log("reducer", action, state);
  switch (action.type) {
    case INCREMENT:
      console.log("inc", state);
      return {
        ...state,
        count: state.count + 1
      };
    // Fill in the body of this case
    case DECREMENT:
      console.log("dec");
      return {
        // ...state,
        count: state.count - 1
      };
    // Fill in the body of this case
    default:
      return state;
  }
};
//reducer takes a state object, and an action, and returns a new state object

//reducer returns the next state given the current state and an action to handle
