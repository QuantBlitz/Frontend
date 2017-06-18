import React, { Component } from 'react'
import { connect } from 'react-redux'

import Root from './Root'
import Dashboard from './Dashboard'
import Welcome from './Welcome'

class IndexRedirect extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { fetchingData, loggedIn } = this.props

    return (
      <Root>
        { fetchingData ? '' : (loggedIn ? <Dashboard /> : <Welcome />) }
      </Root>
    )
  }
}

const mapStateToProps = (state) => {
  const { fetchingData, loggedIn } = state.user
  return { fetchingData, loggedIn }
}

export default connect(mapStateToProps)(IndexRedirect)
