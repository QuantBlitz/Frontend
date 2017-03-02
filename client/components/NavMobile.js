import React, { PropTypes } from 'react'

import NavItem from '../atoms/NavItem'
import NavLoggedIn from './NavLoggedIn'

const NavMobile = (props) => {
  return (
    <div>
      <ul id='nav-mobile' className='side-nav'>
        {
          props.loggedIn ? <NavLoggedIn user={props.user} onClick={props.logout} /> :
          <div>
            <li><a href='#' onClick={props.onClick} name='login'>Login</a></li>
            <li><a href='#' onClick={props.onClick} name='signup'>Sign Up</a></li>
          </div>
        }
      </ul>
      <a href='#' data-activates='nav-mobile' className='button-collapse'>
        <i className='material-icons'>menu</i>
      </a>
    </div>
  )
}

NavMobile.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  user: PropTypes.string
}

export default NavMobile
