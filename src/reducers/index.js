import { INCREMENT, DECREMENT } from '../actions';
import { Object } from 'core-js';

export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    default:
      return count;
  }
};