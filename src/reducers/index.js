import { CREATE, INCREMENT, DECREMENT } from '../actions';

export default (counters = [{ count: 0, id: 0 }], action) => {
  const { type, payload = {} } = action;
  const { count, id = 0 } = payload;
  let i = counters.findIndex(c => c.id === id);
  // console.log(id, i);
  let counts = counters.slice(0, i).concat(counters.slice(i + 1, counters.length));
  switch (type) {
    case CREATE:
      return [...counters, payload];
    case INCREMENT:
      return [ ...counts, { ...counters[i], count: counters[i].count + count } ];
    case DECREMENT:
      return [ ...counts, { ...counters[i], count: counters[i].count - count } ];
    default:
      return counters;
  }
};
