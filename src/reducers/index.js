import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: action.payload });
    case DECREMENT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
