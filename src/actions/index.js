export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (count) => {
  return {  
    type: 'INCREMENT',
  }
};

export const decrement = (count) => {
  return {  
    type: 'DECREMENT',
  }
};