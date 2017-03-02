import React, { PropTypes } from 'react'

const InputField = (props) => {
  return (
    <div className='row'>
      <div className='input-field col s12'>
        { props.children }
        <label htmlFor={props.htmlFor} data-error='Not Valid' data-success='Perfect!'>
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

export default InputField
