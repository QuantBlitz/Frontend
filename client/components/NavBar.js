import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import NavDesktop from './NavDesktop'
import NavItem from '../atoms/NavItem'
import NavMobile from './NavMobile'

import Style from '../styles/components/NavBar'

const NavBar = (props) => {
  const home = props.loggedIn ? '/home' : '/'
  return (
    <nav className='blue-grey lighten-4' role='navigation'>
      <div className='nav-wrapper container'>
        <Link id='logo-container' to='/' className='brand-logo'>
          <img src='https://puu.sh/usn2J/7e4c199b13.png' styleName='logo' />
        </Link>
        <NavDesktop loggedIn={props.loggedIn} logout={props.logout} onClick={props.onClick} />
        <NavMobile loggedIn={props.loggedIn} logout={props.logout} onClick={props.onClick} />
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  username: PropTypes.string
}

export default CSSModules(NavBar, Style)
