import { INCREMENT, DECREMENT/*, increment, decrement*/ } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export const initialState = {
  count: 0
}

export default (state= initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      return Object.assign({}, state, {state: [...state.count, action.count]});
    case DECREMENT:
    // Fill in the body of this case
      return Object.assign({}, state, {state: [...state.count, action.count]});
    default:
      return state.count;
  }
};
