import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'boron/FlyModal'
import CSSModules from 'react-css-modules'

import { getLatestTrades } from '../actions/stockActions'

import HeroSection from '../components/HeroSection'
import IconSection from '../components/IconSection'
import LiveTrades from '../components/LiveTrades'
import Login from './Login'
import SignUp from './SignUp'

import Logo from '../assets/logo.svg'
import WelcomeLogo from '../assets/welcome_logo.svg'

import Style from '../styles/containers/Welcome'

const ws = new WebSocket('ws://localhost:4040/')

class Welcome extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { getLatestTrades } = this.props
    ws.onmessage = (event) => {
      getLatestTrades(event.data)
    }
  }
  componentWillUnmount() {
    ws.close()
  }
  render() {
    const { loggedIn, latestTrades } = this.props

    return (
      <div styleName='root'>
        <Modal ref='modal'>
          { !loggedIn ? <SignUp close={() => this.refs.modal.hide()} /> : '' }
        </Modal>
        <div className='row center' styleName='hero-container'>
          <div className='col s9'>
            <div className='row'>
              <img src={WelcomeLogo} styleName='logo-svg' />
            </div>
            <HeroSection onClick={() => this.refs.modal.show()} />
          </div>
          <LiveTrades trades={latestTrades} />
        </div>
        <IconSection />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn } = state.user
  const { latestTrades } = state.stock
  return { loggedIn, latestTrades }
}

export default connect(mapStateToProps, {
  getLatestTrades
})(CSSModules(Welcome, Style))
