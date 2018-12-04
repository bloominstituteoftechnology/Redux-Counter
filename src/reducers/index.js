import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// const CHANGE_COUNTER = 'CHANGE_COUNTER';

const counter = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
    console.log("reducer test")
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };  
      default:
        return state;
  }
}

export default counter;

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//     Fill in the body of this case
//     case DECREMENT:
//     Fill in the body of this case
//     default:
//       return state;
//   }
// };
