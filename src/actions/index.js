export const CREATE = 'CREATE';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

let id = 0;

export const create = () => ({
  type: CREATE,
  payload: {
    count: 0,
    id: ++id
  }
});

export const increment = id => ({
  type: INCREMENT,
  payload: {
    count: 1,
    id
  }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: {
    count: 1,
    id
  }
});
