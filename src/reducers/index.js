import { INCREMENT, DECREMENT } from '../actions';

export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + action.payload;
    case DECREMENT:
      return count - action.payload;
    default:
      return count;
  }
};
