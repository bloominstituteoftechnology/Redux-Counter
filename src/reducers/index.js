import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
const reducer = (state = initialState, action) => {
  console.log("In the reducer ", action);
  switch (action.type) {
    case INCREMENT:
      return {

      }
    case DECREMENT:
      return {
        
      }
    default:
      return state;
  }
};

export default reducer;