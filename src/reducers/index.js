import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC, incrementAsync } from '../actions/';

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
     return {count: state.count + 1}
    // Fill in the body of this case
    case DECREMENT:
     return {count: state.count - 1}
    // Fill in the body of this case
    case INCREMENTIFODD:
    return {count: state.count % 2 !== 0 ? state.count + 1 : state.count }
    case INCREMENTASYNC:
    // return { count: setTimeout(state.count + 1, 1000)}
    return {count: setInterval(incrementAsync, 4000, state.count + 1)}
    default:
      return state;
  }
};
