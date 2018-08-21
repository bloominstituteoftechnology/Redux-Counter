//copy and paste to look like this..

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import rootReducer from './reducers'; // only takes what is exported from this directory, which is the entire file

// This line instantiates our central Redux store.
const store = createStore(rootReducer); // The `createStore` function receives the `rootReducer` that is responsible for updating the store, along with any initial state that we may want the store to start out with (which is none in this case).

// Here, we wrap our main React component inside of
// Provider tags, which come from the react-redux package.
// This is needed because the store needs to know where it
// is passing its state to. The Provider component is also
// where the store "lives".


// normally is <App />
ReactDOM.render(
  <Provider store={store}> <Counter /> </Provider>,
  document.getElementById('root')
);


