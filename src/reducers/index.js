import { INCREMENT, DECREMENT } from '../actions';


// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
const defaultInstance = {
  number:0
}
export default (state, action) => {
  if(typeof state === 'undefined'){
    return defaultInstance;
  }
    switch (action.type) {
        case INCREMENT:
          return Object.assign({},state,{
            number: ++state.number
          });
        case DECREMENT:
          return Object.assign({},state,{
            number: --state.number
          });
        default:
          return state;
    }
};
