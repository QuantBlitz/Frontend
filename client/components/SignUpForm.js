import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import InputField from '../atoms/InputField'

import Style from '../styles/components/SignUpForm'

const SignUpForm = (props) => {
  const { hasValidPW, isValidUserName, usernameExists } = props
  const validUsername = isValidUserName && !usernameExists ? 'valid' : 'invalid'
  const unameClass = isValidUserName === null ? '' : validUsername
  const usernameTaken = usernameExists ? 'Username Taken' : 'Not Valid'
  const pwClass = hasValidPW === null ? '' : (hasValidPW ? 'valid' : 'invalid')
  return (
    <div className='row'>
      <form className='col s12' onSubmit={props.onSubmit}>
        <InputField label='Username' htmlFor='username' error={usernameTaken}>
          <input className={unameClass} type='text'
            name='username' onChange={props.onChange} />
        </InputField>
        <InputField label='Email' htmlFor='email'>
          <input className='validate' type='email'
            name='email' onChange={props.onChange} />
        </InputField>
        <InputField label='Password' htmlFor='password'>
          <input className={pwClass} type='password'
            name='password' onChange={props.onChange} />
        </InputField>
        <div className='center'>
          <button className='btn-large waves-effect waves-light blue-grey lighten-4'
            styleName='btn'>
            <i className='material-icons'>send</i>
          </button>
          <div styleName='login'>
            Already have an account?
            <a href='#' onClick={props.onClick} value='login'> Log In</a>
          </div>
        </div>
      </form>
    </div>
  )
}

SignUpForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
}

export default CSSModules(SignUpForm, Style)
