import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getProfile } from '../actions/profileActions'
import { getPortfolio } from '../actions/portfolioActions'

import Loader from '../atoms/Loader'
import ProfileHeader from '../components/ProfileHeader'
import ProfileBody from '../components/ProfileBody'
import ProfileTrades from '../components/ProfileTrades'
import Root from './Root'

import Style from '../styles/containers/Profile'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    const { getProfile, match } = this.props
    getProfile(match.params.user)
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
    const { match, user, trades } = this.props

    return (
      <Root>
        <div className='container' styleName='root'>
          <ProfileHeader {...match.params} />
          <ProfileBody trades={trades} />
        </div>
      </Root>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state.user
  const { trades } = state.profile
  return { user, trades }
}

export default connect(mapStateToProps, {
  getProfile
})(CSSModules(Profile, Style))
