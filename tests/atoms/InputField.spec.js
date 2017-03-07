import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'

import InputField from '../../client/atoms/InputField'

describe('<InputField />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <InputField>
        <input type='text' />
      </InputField>
    )
    expect(wrapper.contains(<input type='text' />)).to.equal(true)
  })
})
