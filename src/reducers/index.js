import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 25
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
// export default 
 
//  export default
    export default(state = initialState, action)=>  {
  switch (action.type) {
    case INCREMENT:
      
        return { 
          ...state,
           count: state.count +1
        // count: action.thing
        // newState
      }
    // Fill in the body of this case
    // initialState.count ++;
    case 'DECREMENT':
    // Fill in the body of this case
    return {
      ...state,
           count: state.count -1
    //  count: initialState.count -10
    // count: initialState.count- action.payload
}
    default:
      return state;
  }
};
