import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. What does the reducer
// need to do the count in each case?
export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            // Fill in the body of this case
        case DECREMENT:
            // Fill in the body of this case
        default:
            return state;
    }
};