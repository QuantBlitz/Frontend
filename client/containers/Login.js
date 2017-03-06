import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { loginUser } from '../actions/userActions'

import LoginForm from '../components/LoginForm'

import Style from '../styles/containers/Login'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      password: ''
    }
  }
  handleSubmit = (e) => {
    const { loginUser } = this.props
    e.preventDefault()

    loginUser(this.state)
    this.props.close()
  }
  render() {
    return (
      <div styleName='root'>
        <LoginForm onSubmit={this.handleSubmit}
          onChange={(e) => this.setState({ [e.target.name]: e.target.value })} />
      </div>
    )
  }
}

export default connect(null, { loginUser })(CSSModules(Login, Style))
