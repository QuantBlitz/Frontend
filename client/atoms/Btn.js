import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/Btn'

const Btn = (props) => {
  return (
    <button onClick={props.onClick} name={props.name} value={props.value}>
      { props.text }
    </button>
  )
}

Btn.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default CSSModules(Btn, Style)
