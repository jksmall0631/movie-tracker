import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import CreateUser from './CreateUser';

describe('CreateUser', function () {
  it('renders as a section', () => {
    const wrapper = shallow(<CreateUser />)
    assert.equal(wrapper.type(), 'section')
  });
});
