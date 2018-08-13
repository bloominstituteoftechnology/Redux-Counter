import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import CounterContainer from './components/CounterContainer';
import counter from './reducers';

ReactDOM.render(
  <Provider store={createStore(counter)}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);
