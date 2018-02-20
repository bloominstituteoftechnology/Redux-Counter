import { 
  INCREMENT, 
  DECREMENT
} from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (count = 0, action) => {
  let newCount
    switch (action.type) {
        case INCREMENT:
          newCount = count + 1
          return newCount
        case DECREMENT:
          newCount = count - 1
          return newCount
        default:
            return count;
    }
};