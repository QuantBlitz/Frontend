import React, { PropTypes } from 'react'

import NavItem from '../atoms/NavItem'
import NavLoggedIn from './NavLoggedIn'

const NavDesktop = (props) => {
  return (
    <ul className='right hide-on-med-and-down'>
      {
        props.loggedIn ? <NavLoggedIn user={props.user} onClick={props.logout} /> :
        <div>
          <li><a href='#' onClick={props.onClick} name='login'>Login</a></li>
          <li><a href='#' onClick={props.onClick} name='signup'>Sign Up</a></li>
        </div>
      }
    </ul>
  )
}

NavDesktop.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  user: PropTypes.string
}

export default NavDesktop
