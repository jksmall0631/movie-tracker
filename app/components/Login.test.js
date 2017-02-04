import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import Login from './Login';

describe('Login', function () {
  it('renders as a section', () => {
    const wrapper = shallow(<Login />)
    assert.equal(wrapper.type(), 'section')
  });
});
