import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import Avatar from '../atoms/Avatar'
import SettingsNavbar from '../components/SettingsNavbar'
import SettingsAccount from '../components/SettingsAccount'
import SettingsDetails from '../components/SettingsDetails'
import Root from './Root'

import Style from '../styles/containers/Settings'

class Settings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOption: 'account',
      validPassword: null,
      password: '',
      passwordNew: '',
      passwordConfirm: ''
    }
  }
  handleChange = (e) => {
    const { passwordNew, passwordConfirm } = this.state
    if (e.target.name === 'passwordConfirm') {
      const isValid = passwordNew === e.target.value
        ? true : (passwordConfirm  ? false : null)
      this.setState({
        validPassword: isValid,
        [e.target.name]: e.target.value
      })
    } else {
      if (e.target.name === 'passwordNew') {
        const isValidPW = passwordConfirm === e.target.value
          ? true : (passwordNew ? false : null)
        this.setState({
          validPassword: isValidPW,
          [e.target.name]: e.target.value
        })
      } else {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    }
  }
  handleClick = (option) => {
    this.setState({
      sidebarOption: option
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { password, passwordNew, passwordConfirm } = this.state

    if (!password)
      return alert('Must enter your current password!')

    if (passwordNew !== passwordConfirm)
      return alert('Passwords must match!')

    this.setState({
      password: '',
      passwordNew: '',
      passwordConfirm: ''
    })
  }
  render() {
    const { user } = this.props
    const { sidebarOption, validPassword } = this.state
    return (
      <Root>
        <div className='container' styleName='root'>
          <Avatar />
          {/* <SettingsNavbar onClick={this.handleClick} /> */}
          { sidebarOption == 'account' ?
            <SettingsAccount onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              {...this.state} {...user} /> :
            <SettingsDetails />
          }
        </div>
      </Root>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state.user
  return { user }
}

export default connect(mapStateToProps)(CSSModules(Settings, Style))
