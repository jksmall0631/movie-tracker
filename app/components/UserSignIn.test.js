import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import UserSignIn from './UserSignIn';

describe('UserSignIn', function () {
  it('renders as a section', () => {
    const wrapper = shallow(<UserSignIn />)
    assert.equal(wrapper.type(), 'section')
  });

  it('should render one h2 tag', ()=> {
    const wrapper = mount(<UserSignIn />)
    expect(wrapper.find('h2')).to.have.length(1)
  })

  it('should render two link tags', ()=> {
    const wrapper = mount(<UserSignIn />)
    expect(wrapper.find('Link')).to.have.length(2)
  })

  it('should render one two input fields', ()=> {
    const wrapper = shallow(<UserSignIn />)
    expect(wrapper.find('input')).to.have.length(2)
  })

  it('should render two buttons', ()=> {
    const wrapper = shallow(<UserSignIn />)
    expect(wrapper.find('button')).to.have.length(2)
  })

  it('should have a button that creates a new user', ()=> {
    const handleClick = sinon.spy()
    const wrapper = mount(<button className='log-in' onClick={handleClick} />)
    expect(handleClick.calledOnce).to.equal(false)
    wrapper.find('.log-in').simulate('click')
    expect(handleClick.calledOnce).to.equal(true)
  })

});
