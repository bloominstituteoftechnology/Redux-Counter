import { INCREMENT, DECREMENT,INCREMENTIFODD,INCREMENTASYNC } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      count++;
      return count;
    case DECREMENT:
    // Fill in the body of this case
      count--;
      return count;
    case INCREMENTIFODD:
      if(count%2!==0)
      {
        count++;
      }
      return count;
    case INCREMENTASYNC: 
      count++;
      return count;
     
    default:
      return count;
  }
};
