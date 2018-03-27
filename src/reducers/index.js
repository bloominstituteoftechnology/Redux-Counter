import { INCREMENT, DECREMENT } from '../actions';

export default (count = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return ++count;
        case DECREMENT:
            return --count;
        default:
            return count
    }
};