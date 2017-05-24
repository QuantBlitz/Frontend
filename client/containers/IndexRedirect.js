import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dashboard from './Dashboard'
import Welcome from './Welcome'

class IndexRedirect extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { fetchingData, loggedIn } = this.props

    return (
      <div>
        { fetchingData ? '' : (loggedIn ? <Dashboard /> : <Welcome />) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { fetchingData, loggedIn } = state.user
  return { fetchingData, loggedIn }
}

export default connect(mapStateToProps)(IndexRedirect)
