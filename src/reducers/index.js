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
  console.log("state", state);
  switch (action.type) {
    case INCREMENT:
      const upCount = ++state.count;
      return {count: upCount};
    case DECREMENT:
      const downCount = --state.count;
      return {count: downCount};
    default:
      return state;
  }
};
