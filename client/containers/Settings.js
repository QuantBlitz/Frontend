import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import Avatar from '../components/Avatar'
import SettingsForm from '../components/SettingsForm'

import Style from '../styles/containers/Settings'

class Settings extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    const { username, userDetails } = this.props
    return (
      <div className='container' styleName='root'>
        <Avatar avatarURL={'https://puu.sh/u1ct7/bf7536a019.png'} />
        <SettingsForm onSubmit={this.handleSubmit} username={username} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { username, userDetails } = state.user
  return { username, userDetails }
}

export default connect(mapStateToProps)(CSSModules(Settings, Style))
