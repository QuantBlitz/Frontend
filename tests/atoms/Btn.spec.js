import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'

import Btn from '../../client/atoms/Btn'

describe('<Btn />', () => {
  it('should render button text', () => {
    const wrapper = mount(<Btn text='Random text' />)
    expect(wrapper.text()).to.equal('Random text')
  })
  it('should click', () => {
    const handleButtonClick = sinon.spy()
    const wrapper = mount(<Btn onClick={handleButtonClick} />)
    wrapper.find('button').simulate('click', { preventDefault: () => {} })
    expect(handleButtonClick.calledOnce).to.equal(true)
  })
})
