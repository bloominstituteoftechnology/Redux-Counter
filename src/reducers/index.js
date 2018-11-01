import { INCREMENT, DECREMENT, MULTIPLY_BY_10, CLEAR } from '../actions';    // I added MULTIPLY_BY_10, CLEAR

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
    // Fill in the body of this case
      return Object.assign({}, state, {count: state.count + 1});     // does NOT mutate state
      //  return {count: state.count + 1};     // should do same as above

    case DECREMENT:
    // Fill in the body of this case
      return Object.assign({}, state, {count: state.count - 1});      //

    case MULTIPLY_BY_10:
      return Object.assign({}, state, {count: state.count * 10});

    case CLEAR:
     //  return Object.assign({}, state,t {count: state.count * 0});
      return Object.assign({}, state, {count: state.count = 0});    // this works better

    default:
      return state;
  }
};
