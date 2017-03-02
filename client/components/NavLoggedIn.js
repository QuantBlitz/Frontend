import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import NavItem from '../atoms/NavItem'

const NavLoggedIn = (props) => {
  return (
    <div>
      <NavItem to='/settings' text='Settings' />
      <li>
        <a onClick={props.onClick}><i className='material-icons'>power_settings_new</i></a>
      </li>
    </div>
  )
}

NavLoggedIn.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NavLoggedIn
