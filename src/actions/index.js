export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = c => {
  return { type: INCREMENT, count: c + 1 };
};

export const decrement = c => {
  return { type: DECREMENT, count: c - 1 };
};
