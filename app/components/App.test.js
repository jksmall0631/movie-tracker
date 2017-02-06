import React from 'react';
import { Provider } from 'react-redux'
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import { defaultFakeStore } from '../components/testing-stubs/store-stub'
import { fakeStore } from '../components/testing-stubs/store-stub'
import defaultApiMovies from '../components/testing-stubs/default-movies-api-call-results'

import App from './App'

const path = require('path');


App.prototype.componentWillMount = () => {
  jest.mock(defaultApiMovies)
}

const activeUser = {id: 1, name: 'taylor',}

describe('App', () => {
  it('renders as a div', () => {
    const wrapper = shallow(<App userSignInReducer={activeUser}/>)
    assert.equal(wrapper.type(), 'div')
  });

  it('renders a header', () => {
    const wrapper = shallow(<App userSignInReducer={activeUser}/>)
    expect(wrapper.find('h1')).to.have.length(1)
  });

});
