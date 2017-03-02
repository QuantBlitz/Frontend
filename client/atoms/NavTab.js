import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/NavTab'

const NavTab = (props) => {
  const isActive = props.isActive ? 'text-darken-2' : 'text-lighten-2'
  return (
    <li className='tab col s4 blue-grey lighten-5'>
      <a className={'blue-grey-text ' + isActive} name={props.name}
        onClick={props.onClick}>
        { props.name }
      </a>
    </li>
  )
}

NavTab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired
}

export default CSSModules(NavTab, Style)
