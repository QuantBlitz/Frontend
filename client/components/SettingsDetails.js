import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import InputField from '../atoms/InputField'

import Style from '../styles/components/SettingsDetails'

const SettingsDetails = (props) => {
  return (
    <form className='col s6-offset-s3' styleName='root'>
      <div className='row'>
        <div className='col s3 offset-s3'>
          <InputField label='First Name' htmlFor='firstName'>
            <input type='text' placeholder={props.firstName}
              name='firstName' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s3'>
          <InputField label='Last Name' htmlFor='lastName'>
            <input type='text' placeholder={props.lastName}
              name='lastName' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='Street Address 1' htmlFor='addressFirst'>
            <input className='validate' type='text' placeholder={props.addressFirst}
              name='addressFirst' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='Street Address 2' htmlFor='addressSecond'>
            <input className='validate' type='text' placeholder={props.addressSecond}
              name='addressSecond' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s3 offset-s3'>
          <InputField label='City' htmlFor='city'>
            <input type='text' placeholder={props.city}
              name='city' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s3'>
          <InputField label='State' htmlFor='state'>
            <input type='text' placeholder={props.state}
              name='state' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s3 offset-s3'>
          <InputField label='Postal Code' htmlFor='postalCode'>
            <input type='text' placeholder={props.postalCode}
              name='postalCode' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s3'>
          <InputField label='Country' htmlFor='country'>
            <input type='text' placeholder={props.country}
              name='country' onChange={props.onChange} />
          </InputField>
        </div>
      </div>
    </form>
  )
}

export default CSSModules(SettingsDetails, Style)
