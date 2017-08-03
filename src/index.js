import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reducer from './reducers';
import postData from './application-data';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore(reducer, postData)} >
        <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
