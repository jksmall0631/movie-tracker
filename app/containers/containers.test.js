import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'


import mapStateToProps from './App-container'

describe('mapStateToProps', function () {
  it('should be a function', () => {
      assert.isFunction(mapStateToProps)
  })
})
