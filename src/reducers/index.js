import { INCREMENT, DECREMENT } from '../actions';
import {RESET} from '../actions/index';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state of our redux store, along with an action created by our action creator. What does the reducer need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
     return Object.assign({}, state, { count: state.count +1})
    case DECREMENT:
      return { count: state.count -1 }
      case RESET:
      return { count: state.count =0 }
    default:
      return state;
  }
};
