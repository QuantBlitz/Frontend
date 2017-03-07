import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'

import WatchlistItem from '../../client/atoms/WatchlistItem'

describe('<WatchlistItem />', () => {
  it('should render stock symbol', () => {
    const wrapper = mount(<WatchlistItem symbol='TSLA' />)
    expect(wrapper.text()).to.equal('TSLA')
  })
  it('should click', () => {
    const handleClick = sinon.spy()
    const wrapper = mount(<WatchlistItem onClick={handleClick} />)
    wrapper.find('.card').simulate('click', { preventDefault: () => {} })
    expect(handleClick.calledOnce).to.equal(true)
  })
})
