import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import NavItem from '../atoms/NavItem'

const NavLoggedIn = (props) => {
  return (
    <div>
      <NavItem to='/s/AAPL' text='Stock' />
      <NavItem to={'/u/' + props.user} text='Profile' />
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
