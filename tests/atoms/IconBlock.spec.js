import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'

import IconBlock from '../../client/atoms/IconBlock'

describe('<IconBlock />', () => {
  it('should render center text', () => {
    const wrapper = mount(<IconBlock center_text='Test One' />)
    expect(wrapper.text()).to.equal('Test One')
  })
})
