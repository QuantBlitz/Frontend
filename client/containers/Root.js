import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'boron/FlyModal'
import CSSModules from 'react-css-modules'

import { logoutUser, userAuth } from '../actions/userActions'

import Login from './Login'
import SignUp from './SignUp'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Style from '../styles/containers/Root'

class Root extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: ''
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(userAuth())
  }
  handleClick = (e) => {
    this.setState({
      modal: e.target.name
    })
    this.refs.modal.show()
  }
  handleLogout = () => {
    const { dispatch } = this.props

    dispatch(logoutUser())
  }
  render() {
    const { loggedIn, username } = this.props
    const { modal } = this.state

    return (
      <div>
        <NavBar loggedIn={loggedIn} user={username}
          onClick={this.handleClick} logout={this.handleLogout} />
        <Modal ref='modal'>
          { modal && !loggedIn ? (modal === 'login' ?
            <Login close={() => this.refs.modal.hide()} /> :
            <SignUp onClick={() => this.setState({ modal: 'login' })} close={() => this.refs.modal.hide()} />) : '' }
        </Modal>
        { this.props.children }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedIn, username } = state.user
  return { loggedIn, username }
}

export default connect(mapStateToProps)(CSSModules(Root, Style))
