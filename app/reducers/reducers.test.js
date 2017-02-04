import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import allReducers from './index.js'
import movieReducer from './reducer-movie'
import userSignInReducer from './reducer-userSignIn'

describe('userSignInReducer', function () {
  it('should be a function', () => {
      assert.isFunction(userSignInReducer)
  })
})
