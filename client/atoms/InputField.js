import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/InputField'

const InputField = (props) => {
  return (
    <div className='row'>
      <div className={'input-field col ' + (props.size || 's12')}>
        { props.children }
        <label htmlFor={props.htmlFor} data-error={props.error || 'Not Valid'}
          data-success='Perfect!'>
          { props.label }
        </label>
      </div>
    </div>
  )
}

InputField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default CSSModules(InputField, Style)
