import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {BrowserRouter, Route} from 'react-router-dom';

import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './static/css/ionicons.min.css'
import './static/css/typography.css'
import './index.css'

import App from './App'

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const Application = (
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(Application, document.getElementById('root'));