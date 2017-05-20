import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getUserProfile } from '../actions/userActions'
import { getPortfolio } from '../actions/stockActions'

import Loader from '../atoms/Loader'
import ProfileHeader from '../components/ProfileHeader'
import ProfileBody from '../components/ProfileBody'
import ProfileTrades from '../components/ProfileTrades'

import Style from '../styles/containers/Profile'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    const { getPortfolio } = this.props
    getPortfolio()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        loading: false
      })
    }
  }
  render() {
    const { loading } = this.state
    const { user, trades } = this.props

    return (
      <div className='container' styleName='root'>
        <ProfileHeader username={user.username || ''} />
        <ProfileBody trades={trades} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state.user
  const { trades } = state.stock
  return { user, trades }
}

export default connect(mapStateToProps, {
  getUserProfile,
  getPortfolio
})(CSSModules(Profile, Style))
