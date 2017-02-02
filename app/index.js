import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './containers/App-container';
import MovieIndex from './containers/MovieIndex-container';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import allReducers from './reducers/index';
import Login from './components/Login';
import {Provider} from 'react-redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(allReducers, devTools);

const router = (
  <Provider store = {store}>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={MovieIndex} />
        <Route path='/login' component={Login} />
        <Route path='/users/:id/favorites' componenent={MovieIndex} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
