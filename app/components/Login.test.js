import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import Login from './Login';

describe('Login', function () {

  it('renders as a section', () => {
    const wrapper = shallow(<Login />)
    assert.equal(wrapper.type(), 'section')
  });

  it('renders a CreateUser component', ()=> {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('CreateUser')).to.have.length(1)
  })

  it.skip('renders a UserSignIn component', ()=> {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('UserSignIn')).to.have.length(1)
  })
});
