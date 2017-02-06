import React from 'react';
import {Link} from 'react-router';
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

  it('renders one link route', () => {
    const wrapper = shallow(<App userSignInReducer={activeUser}/>)
    expect(wrapper.find('Link')).to.have.length(1)
  });

  it('renders one button', () => {
    const wrapper = shallow(<App userSignInReducer={activeUser}/>)
    expect(wrapper.find('button')).to.have.length(1)
  });

  it('button should have passed in prop for className', () => {
const wrapper = shallow(<button className='signIn' />)
expect(wrapper.props().className).to.equal('signIn');
})


});
