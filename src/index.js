import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import counter from './reducers';

ReactDOM.render(
  <Provider store={createStore(counter)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
