import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import InputField from '../atoms/InputField'

import Style from '../styles/components/SettingsAccount'

const SettingsAccount = (props) => {
  const pwClass = props.validPassword === null ? '' :
    (props.validPassword ? 'valid' : 'invalid')
  return (
    <form className='col s6 offset-s3' onSubmit={props.onSubmit} styleName='root'>
      <div className='row'>
        <div className='col s6 offset-s3'>
          <InputField label='Email' htmlFor='email'>
            <input className='validate' type='email' name='email' disabled
              placeholder={props.email || ''}  onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='Username' htmlFor='username'>
            <input className='validate' type='text' name='username' disabled
              placeholder={props.username || ''} onChange={props.onChange} />
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='Current Password' htmlFor='password'>
            <input className='validate' type='password' name='password'
              onChange={props.onChange} value={props.password} />
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='New Password' htmlFor='password'>
            <input className='validate' type='password' name='passwordNew'
                onChange={props.onChange} value={props.passwordNew}/>
          </InputField>
        </div>
        <div className='col s6 offset-s3'>
          <InputField label='Confirm Password' htmlFor='password'>
            <input className={pwClass} type='password' name='passwordConfirm'
              onChange={props.onChange} value={props.passwordConfirm} />
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

SettingsAccount.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func
}

export default CSSModules(SettingsAccount, Style)
