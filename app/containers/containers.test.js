import React from 'react';
import { Provider } from 'react-redux'
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import { defaultFakeStore } from '../components/testing-stubs/store-stub'
import { fakeStore } from '../components/testing-stubs/store-stub'
import { stubMovie } from '../components/testing-stubs/store-stub'
import defaultApiMovies from '../components/testing-stubs/default-movies-api-call-results'

import mapDispatchToProps from './App-container'
import mapStateToProps from './App-container'

import App from '../components/App.js'

const path = require('path');

App.prototype.componentWillMount = () => {
  jest.mock(defaultApiMovies)
}

const defaultWrapper = mount(
  <Provider store={defaultFakeStore}>
    <App {...defaultFakeStore} />
  </Provider>
)

const updateWrapper = mount(
  <Provider store={fakeStore}>
    <App {...fakeStore}/>
  </Provider>
)

describe('mapStateToProps', function () {
  it('should be a function', () => {
    assert.isFunction(mapStateToProps)
  })

  it.skip('mapStateToProps should update state in App',() => {
    const buttonText = defaultWrapper.find('.signIn').text()
    expect(buttonText).to.equal(' Sign In ')
// how do we map state to props on the mounted component?  this is not how...
    defaultWrapper.mapStateToProps(fakeStore)
    expect(buttonText).to.not.exist
  })
})

describe('mapDispatchToProps', () => {
  it.skip('App should be able to dispatch add movies', () => {

  })
})

const allMoviesReducer = { finalFaves: {stubMovie}}
