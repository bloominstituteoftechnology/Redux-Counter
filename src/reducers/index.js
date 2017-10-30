import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?
export default (count = 0, action) => {
    //checking action type 
    switch (action.type) {
        case INCREMENT:
            // Fill in the body of this case
            return ++count;
        case DECREMENT:
            // Fill in the body of this case
            return --count;
        case INCREMENTIFODD: 
            if (count % 2 === 1) {
                return ++count;
            }
            else{
                return count;
            }
        case INCREMENTASYNC:
            if (count % 2 === 0) {
                return ++count;
            }
            else {
                return count;   
            }
        default:
            return count;
    }
};