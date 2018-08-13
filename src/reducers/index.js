// import { INCREMENT, DECREMENT } from '../actions';
import { handleActions } from 'redux-actions';
import { increment, decrement } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
// export default (count = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//     // Fill in the body of this case
//     case DECREMENT:
//     // Fill in the body of this case
//     default:
//       return count;
//   }
// };
export default handleActions({
  [increment]: count => count + 1,
  [decrement]: count => count - 1
});
