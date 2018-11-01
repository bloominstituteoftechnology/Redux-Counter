import { INCREMENT, DECREMENT, INCREMENT_ODD } from '../actions';

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
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    // I realize now that the following may have been a mistake  
    case INCREMENT_ODD:
      return (state.count%2 === 1 ? { count: state.count + 1 }: state);
    default:
      return state;
  }
};
