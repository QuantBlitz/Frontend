import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/NumberInput'

const NumberInput = (props) => {
  return (
    <div className='col s3' styleName='root'>
      <div className='input-field'>
        <input type='number' onChange={props.onChange} value={props.value} />
      </div>
    </div>
  )
}

NumberInput.propTypes = {
  onChange: PropTypes.func
}

export default CSSModules(NumberInput, Style)
