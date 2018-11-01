import { INCREMENT, DECREMENT } from '../actions';


const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

// just return it? say what sort of thing it is?
// ohh, reducer returns now state!
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // case: what we're changing?
      return { count: state.count + 1 }
    // needs to be something 
    case DECREMENT:
        return { count: state.count - 1 }
    default:
      return state;
  }
};
