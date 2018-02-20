import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (count = 0, action) => {
    let retCount = count;
    switch (action.type) {
        case INCREMENT:
            return retCount + 1;
        case DECREMENT:
            return retCount - 1;
        default:
            return count;
    }
};