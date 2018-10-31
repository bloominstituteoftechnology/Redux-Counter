./components/Counter.js
  * [] render() {
          // Fill in the two button onClick methods
          // Upon clicking these buttons, the count
          // should decrement or increment accordingly

./actions/index.js
  * [] export const increment = () => {
    // Fill in this function
  };

  * []  export const decrement = () => {
    // Fill in this function
  };

./reducers/index.js
* [] switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    case DECREMENT:
    // Fill in the body of this case
    default:
      return state; switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    case DECREMENT:
    // Fill in the body of this case
    default:
      return state;


// Stretch Problems: 

*  [] incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that only increments if the counter value is odd

*  [] incrementAsync = () => {
        // Stretch Problem: Implement an increment function that increments after waiting for one second
Be sure to uncomment lines 29-36


