import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom'

import NavDesktop from './NavDesktop'
import NavItem from '../atoms/NavItem'
import NavMobile from './NavMobile'

import Logo from '../assets/logo.svg'

import Style from '../styles/components/NavBar'

const NavBar = (props) => {
  return (
    <nav className='blue-grey lighten-4' role='navigation'>
      <div className='nav-wrapper container'>
        <Link id='logo-container' to='/' className='brand-logo'>
          <img src={'/' + Logo} styleName='logo' />
        </Link>
        <NavDesktop loggedIn={props.loggedIn} username={props.username}
          logout={props.logout} onClick={props.onClick} />
        <NavMobile loggedIn={props.loggedIn} username={props.username}
          logout={props.logout} onClick={props.onClick} />
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CSSModules(NavBar, Style)
