import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0,
  animal: 'dog',
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case  setState({ count: this.state.count + 1 })
    // spread operator
      return {...state, count: state.count + 1}; 
    case DECREMENT:
    // Fill in the body of this case
    // hard coding state change
      return {count: state.count - 1, animal: 'cat'}; 
    default:
      return state;
  }
};


// why does return {count: 1} render, but return ++state does not render?