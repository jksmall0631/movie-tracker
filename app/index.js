import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/app';
import MovieIndex from './components/movieIndex';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = createStore();

const router = (
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={MovieIndex} />
        <Route path='/login' component={Login} />
      </Route>
    </Router>
)

ReactDOM.render(router, document.getElementById('main'))
