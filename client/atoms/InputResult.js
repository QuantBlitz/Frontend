import React, { PropTypes } from 'react'

import Style from '../styles/atoms/InputResult'

const InputResult = (props) => {
  return (
    <a className='collection-item blue-grey-text'
      onClick={props.onClick} name={props.Symbol}>
      { props.Symbol }
    </a>
  )
}

InputResult.propTypes = {
  Symbol: PropTypes.string.isRequired
}

export default InputResult
