import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import UserSignIn from './UserSignIn';

describe('UserSignIn', function () {
  it('renders as a section', () => {
    const wrapper = shallow(<UserSignIn />)
    assert.equal(wrapper.type(), 'section')
  });
});
