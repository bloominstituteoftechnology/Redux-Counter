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
    return state = {...state, count: ++state.count}; //that is so weird. count ++ doesnt work
     
    console.log(state);
    case DECREMENT:
    return state = {...state, count: --state.count};
    
    console.log(state);
    default:
      return state;
  }
};
