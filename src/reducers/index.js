import { INCREMENT, DECREMENT, INCREMENT_IFODD, INCREMENT_ASYNC } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      return count + action.payload;
      break;
    case DECREMENT:
      // Fill in the body of this case
      return count - action.payload;
      break;
    case INCREMENT_IFODD:
      if (count % 2 !== 0) {
        return count + action.payload;
      }
      else {
        return count;
      }
      break;
    case INCREMENT_ASYNC:
      const async = new Promise(function (resolve, reject) {
        console.log("Initial Count Value", count);
        setTimeout(() => {
          console.log("Count Value in setTimeout", count);
          console.log("PayLoad", action.payload);
          resolve(count + action.payload);
          console.log("Count after setTimout", count + action.payload);
        }, 5000);
      })

      async.then(function (value) {
        this.setState({ count: value });
      });
      break;
    default:
      return count;
  }
};
