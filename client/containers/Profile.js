import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getUserProfile } from '../actions/userActions'
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
  const { trades } = state.portfolio
  return { user, trades }
}

export default connect(mapStateToProps, {
  getUserProfile,
  getPortfolio
})(CSSModules(Profile, Style))
