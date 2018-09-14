import { INCREMENT, DECREMENT, IFODD } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    	let num = count;
    	return num + action.payload;
    case DECREMENT:
    // Fill in the body of this case
    	let num2 = count;
    	return num2 - action.payload;
    case IFODD:
    	let num4 = count;
    	let bolv = false;

    	if (num4 % 2 !== 0){
    		bolv = true;
    	}

    	if (bolv === false){
    		return count;
    	} else if (bolv === true){
    		return num4 + action.payload;
    	}
    break;
    default:
      return count;
  }
};
