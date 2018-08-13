import { INCREMENT, DECREMENT } from '../actions';
import { Object } from 'core-js';
import logger from 'redux-logger'

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => { //action is an object. count = 0 this is conditional for, if nothing is declared previously. will be ignored when populated. 
  switch (action.type) { //kinda like if statment linked with INCREMENT from actions 
    case INCREMENT:
      return count + 1
    // Fill in the body of this case
    case DECREMENT:
      return count - 1
    // Fill in the body of this case
    default:
      return count;
  }
};


// case DECREMENT:
//       return Object.assign({}, count, { //first and 2 argument make a copy
//         count: count - 1
//       })
//wrong because it return an object. so [object object] gets returned. 