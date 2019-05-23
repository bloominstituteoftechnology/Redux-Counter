import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    state.count ++;
      return { count: state.count };
    case DECREMENT:
    state.count --;
      return { count: state.count };
    default:
      return state;
  }
};