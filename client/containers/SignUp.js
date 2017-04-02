import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { registerUser } from '../actions/userActions'

import SignUpForm from '../components/SignUpForm'
import SignUpSuccess from '../components/SignUpSuccess'

import Style from '../styles/containers/SignUp'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      success: false
    }
  }
  handleSubmit = (e) => {
    const { registerUser } = this.props
    e.preventDefault()

    if (this.state.password.length < 8) {
      this.setState({ password: '' })
      return alert('Choose a password longer than 8 characters')
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
    const { success } = this.state

    return (
      <div styleName='root'>
        {
          !success ? <SignUpForm onSubmit={this.handleSubmit} {...this.state}
            onClick={this.props.onClick}
            onChange={(e) => this.setState({ [e.target.name]: e.target.value })} />
          : <SignUpSuccess />
        }
      </div>
    )
  }
}

export default connect(null, { registerUser })(CSSModules(SignUp, Style))
