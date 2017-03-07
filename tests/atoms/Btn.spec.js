import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'

import Btn from '../../client/atoms/Btn'

describe('<Btn />', () => {
  it('should render button text', () => {
    const wrapper = mount(<Btn text='Random text' />)
    expect(wrapper.text()).to.equal('Random text')
  })
  it('should click', () => {
    const handleClick = sinon.spy()
    const wrapper = mount(<Btn onClick={handleClick} />)
    wrapper.find('button').simulate('click', { preventDefault: () => {} })
    expect(handleClick.calledOnce).to.equal(true)
  })
})
