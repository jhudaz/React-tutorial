import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
//import Test from './test';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log('store', store);

ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
