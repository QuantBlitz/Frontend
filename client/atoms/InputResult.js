import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/InputResult'

const InputResult = (props) => {
  return (
    <a className='collection-item blue-grey-text' styleName='root'
      onClick={props.onClick} name={props.symbol}>
      { props.symbol }
    </a>
  )
}

InputResult.propTypes = {
  symbol: PropTypes.string.isRequired
}

export default CSSModules(InputResult, Style)
