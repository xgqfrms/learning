import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoApp from './reducers';
import App from './containers/App';

let store = createStore(todoApp);
let exampleNode = document.getElementById('example');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    exampleNode
);
