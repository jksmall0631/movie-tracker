import React from 'react';
import { Provider } from 'react-redux'
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import { fakeStore } from '../components/testing-stubs/store-stub'

import mapDispatchToProps from './App-container'
import mapStateToProps from './App-container'

import
describe('mapStateToProps', function () {
  it('should be a function', () => {
      assert.isFunction(mapStateToProps)
  })
})
