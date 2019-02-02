import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++count;
    case DECREMENT:
      return --count;
    default:
      return state;
  }
};
