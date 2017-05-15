import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/IconBlock'

const IconBlock = (props) => {
  return (
    <div className='col s12 m4'>
      <div className='icon-block'>
        <h3 className='center blue-grey-text text-darken-2'>
          <i className='material-icons medium'>{ props.icon }</i>
        </h3>
        <h5 className='center blue-grey-text text-darken-2'>
          { props.center_text }
        </h5>
        <p className='light blue-grey-text text-darken-2' styleName='block-text'>
          { props.block_text }
        </p>
      </div>
    </div>
  )
}

IconBlock.propTypes = {
  icon: PropTypes.string.isRequired,
  block_text: PropTypes.string.isRequired,
  center_text: PropTypes.string.isRequired
}

export default CSSModules(IconBlock, Style)
