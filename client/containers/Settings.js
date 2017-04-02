import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import Avatar from '../components/Avatar'
import SettingsSidebar from '../components/SettingsSidebar'
import SettingsAccount from '../components/SettingsAccount'
import SettingsDetails from '../components/SettingsDetails'

import Style from '../styles/containers/Settings'

class Settings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOption: 'account'
    }
  }
  handleClick = (e) => {
    console.log(e.target.name)
    this.setState({
      sidebarOption: e.target.name
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    const { username, userDetails } = this.props
    const { sidebarOption } = this.state
    return (
      <div className='container' styleName='root'>
        <Avatar />
        <SettingsSidebar onClick={this.handleClick} />
        { sidebarOption == 'account' ?
          <SettingsAccount onSubmit={this.handleSubmit} username={username} /> :
          <SettingsDetails />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { username, userDetails } = state.user
  return { username, userDetails }
}

export default connect(mapStateToProps)(CSSModules(Settings, Style))
