import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);

const render = () => {
    ReactDOM.render(
        <Provider store={createStore(counter)}>
            <Counter />
        </Provider>,
        document.getElementById('root'),
    );
};
render();
store.subscribe(render);
