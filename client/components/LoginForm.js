import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import InputField from '../atoms/InputField'

import Style from '../styles/components/LoginForm'

const LoginForm = (props) => {
  return (
    <div className='row'>
      <form className='col s12' onSubmit={props.onSubmit}>
        <InputField label='Email or Username' htmlFor='email'>
          <input className='validate' type='text'
            name='input' onChange={props.onChange} />
        </InputField>
        <InputField label='Password' htmlFor='password'>
          <input className='validate' type='password'
            name='password' onChange={props.onChange} />
        </InputField>
        <div className='center'>
          <button className='btn-large waves-effect waves-light blue-grey lighten-4'
            styleName='btn'>
            <i className='material-icons'>send</i>
          </button>
        </div>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default CSSModules(LoginForm, Style)
