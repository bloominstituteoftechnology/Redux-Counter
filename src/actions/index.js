export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = count => {
  return {
    type: INCREMENT,
    payload: count + 1,
  };
};

export const decrement = count => {
  return {
    type: DECREMENT,
    payload: count - 1,
  };
};
