import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (count = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return ++count;
        case DECREMENT:
            return --count;
        case INCREMENT_IF_ODD:
            if ( count % 2 === 1) return ++count;
            return count;
        case INCREMENT_ASYNC:
            setTimeout((count) => {
                return ++count;
            }, 2000);
        default:
            return count;
    }
};