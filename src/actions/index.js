export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENTIFODD = 'INCREMENTIFODD';
export const INCREMENTASYNC = 'INCREMENTASYNC';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
	return {
		type: INCREMENT
	};
	// Fill in this function
};

export const decrement = () => {
	return {
		type: DECREMENT
	};
	// Fill in this function
};

export const incrementIfOdd = () => {
	return {
		type: INCREMENTIFODD
	};
	// Stretch Problem: Implement an increment function that
	// only increments if the counter value is odd
};

export const incrementAsync = () => {
	return {
		type: INCREMENTASYNC
	};
	// Stretch Problem: Implement an increment function that
	// increments after waiting for one second
};
