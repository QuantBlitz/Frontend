import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import InputField from '../atoms/InputField'

import Style from '../styles/components/SettingsForm'

const SettingsForm = (props) => {
  return (
    <form className='col s6 offset-s3' onSubmit={props.onSubmit} styleName='root'>
      <div className='row'>
        <div className='col s6 offset-s3'>
          <InputField label='Username' htmlFor='username'>
            <input className='validate' type='text' placeholder={props.username}
              name='input' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='Current Password' htmlFor='password'>
            <input className='validate' type='password'
              name='password' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='New Password' htmlFor='password'>
            <input className='validate' type='password'
              name='passwordNew' onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='Confirm Password' htmlFor='password'>
            <input className='validate' type='password'
              name='passwordConfirm' onChange={props.onChange} />
          </InputField>
        </div>
      </div>
      <button className='btn-large waves-effect waves-light blue-grey lighten-4'
        styleName='btn'>
        <i className='material-icons'>send</i>
      </button>
    </form>
  )
}

SettingsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func
}

export default CSSModules(SettingsForm, Style)
