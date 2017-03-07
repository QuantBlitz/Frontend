import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'

import InputResult from '../../client/atoms/InputResult'

describe('<InputResult />', () => {
  it('should click', () => {
    const handleClick = sinon.spy()
    const wrapper = mount(<InputResult onClick={handleClick} />)
    wrapper.find('a').simulate('click', { preventDefault: () => {} })
    expect(handleClick.calledOnce).to.equal(true)
  })
  it('should render text', () => {
    const wrapper = mount(<InputResult Symbol='TSLA' />)
    expect(wrapper.text()).to.equal('TSLA')
  })
})
