import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

import Style from '../styles/atoms/NavItem'

const NavItem = (props) => {
  return (
    <li>
      <Link to={props.to}>{ props.text }</Link>
    </li>
  )
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default CSSModules(NavItem, Style)
