import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/Input'

const Input = (props) => {
  return (
    <input type={props.type} styleName={props.style || 'root'}
      onChange={props.onChange} placeholder={props.placeholder}
      value={props.value} name={props.name} />
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default CSSModules(Input, Style)
