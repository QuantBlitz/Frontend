import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'boron/FlyModal'
import CSSModules from 'react-css-modules'

import { logoutUser, userAuth } from '../actions/userActions'

import IndexRedirect from './IndexRedirect'
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
    const { userAuth } = this.props
    userAuth()
  }
  handleClick = (e) => {
    this.setState({
      modal: e.target.name
    })
    this.refs.modal.show()
  }
  handleLogout = () => {
    const { logoutUser } = this.props
    logoutUser()
  }
  render() {
    const { loggedIn, user } = this.props
    const { modal } = this.state

    return (
      <div>
        <NavBar loggedIn={loggedIn} onClick={this.handleClick} {...user}
          logout={this.handleLogout} />
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
  const { loggedIn, user } = state.user
  return { loggedIn, user }
}

export default connect(mapStateToProps, {
  logoutUser,
  userAuth
})(CSSModules(Root, Style))
