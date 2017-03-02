import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import SettingsForm from '../components/SettingsForm'

import Style from '../styles/containers/Settings'

class Settings extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Settings change submission')
  }
  render() {
    const { username } = this.props
    return (
      <div className='container' styleName='root'>
        <SettingsForm onSubmit={this.handleSubmit} username={username} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { username } = state.user
  return { username }
}

export default connect(mapStateToProps)(CSSModules(Settings, Style))
