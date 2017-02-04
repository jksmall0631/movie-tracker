import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import MovieIndex from './MovieIndex';

describe('MovieIndex', function () {
  it.skip('renders as a div', () => {
    const wrapper = shallow(<MovieIndex />)
    assert.equal(wrapper.type(), 'div')
  });
});
