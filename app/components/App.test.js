import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import App from './App';

describe('App', function () {
  it.skip('renders as a div', () => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.type(), 'div')
  });
});
