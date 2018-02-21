import React from 'react'; // importing react library
import ReactDOM from 'react-dom'; // importing the virtual DOM
import { createStore } from 'redux'; //  destrctuing redux and using creatStore module
import { Provider } from 'react-redux';// using provider from react-redux to wrap the app
import Counter from './components/Counter';// importing the counter component to pass it to the store aka createStore() function
import counter from './reducers';

// This line instantiates our central Redux store.
// The `createStore` function receives the reducer
// that is responsible for updating the store, along
// with any initial state that we may want the store
// to start out with (which is none in this case). 
const store = createStore(counter);

// Here, we wrap our main React component inside of
// Provider tags, which come from the react-redux package.
// This is needed because the store needs to know where it
// is passing its state to. The Provider component is also 
// where the store "lives". 
ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);
