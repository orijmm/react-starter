import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore,compose,applyMiddleware} from 'redux';
import reducer from './reducers'
const initialState = {
    preloader : 'ACTIVE',
    page: "", 

}
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhacers(applyMiddleware()));
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
