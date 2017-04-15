import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { validUsername } from '../utils/utils'

import { registerUser } from '../actions/userActions'

import SignUpForm from '../components/SignUpForm'
import SignUpSuccess from '../components/SignUpSuccess'

import Style from '../styles/containers/SignUp'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isValidUserName: null,
      username: '',
      email: '',
      password: '',
      success: false
    }
  }
  handleChange = (e) => {
    if (e.target.name === 'username'
      && !validUsername(e.target.value)) {
      this.setState({
        isValidUserName: false,
        [e.target.name]: e.target.value
      })
    } else {
      this.setState({
        isValidUserName: this.state.username ? true : null,
        [e.target.name]: e.target.value
      })
    }
  }
  handleSubmit = (e) => {
    const { registerUser } = this.props
    e.preventDefault()

    if (this.state.password.length < 8) {
      this.setState({ password: '' })
      return alert('Choose a password at least 8 characters long!')
    }

    if (!validUsername(this.state.username)) {
      return alert('Username can\'t contain spaces or special characters!')
    }

    registerUser(this.state)

    this.setState({
      username: '',
      email: '',
      password: '',
      success: true
    })

    this.props.close()
  }
  render() {
    const { isValidUserName, password, success } = this.state
    const hasValidPW = password.length >= 8 ? true :
      (password.length == 0 ? null : false)

    return (
      <div styleName='root'>
        {
          !success ? <SignUpForm onSubmit={this.handleSubmit} {...this.state}
            hasValidPW={hasValidPW}
            isValidUserName={isValidUserName}
            onClick={this.props.onClick}
            onChange={this.handleChange} />
          : <SignUpSuccess />
        }
      </div>
    )
  }
}

export default connect(null, { registerUser })(CSSModules(SignUp, Style))
