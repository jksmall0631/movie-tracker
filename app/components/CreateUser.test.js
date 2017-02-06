import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import CreateUser from './CreateUser';

describe('CreateUser', function () {
  it('renders as a section', () => {
    const wrapper = shallow(<CreateUser />)
    assert.equal(wrapper.type(), 'section')
  });

  it('should render one h2 tag', ()=> {
    const wrapper = mount(<CreateUser />)
    expect(wrapper.find('h2')).to.have.length(1)
  })

  it('should render two input fields', ()=> {
    const wrapper = shallow(<CreateUser />)
    expect(wrapper.find('input')).to.have.length(3)
  })

  it('should render one button', ()=> {
    const wrapper = shallow(<CreateUser />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('should have a button that creates a new user', ()=> {
    const handleClick = sinon.spy()
    const wrapper = mount(<button className='new-user' onClick={handleClick} />)
    expect(handleClick.calledOnce).to.equal(false)
    wrapper.find('.new-user').simulate('click')
    expect(handleClick.calledOnce).to.equal(true)
  })

});
