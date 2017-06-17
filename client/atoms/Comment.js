import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/Comment'

const Comment = (props) => {
  return (
    <div>
      { props.content }
    </div>
  )
}

export default CSSModules(Comment, Style)
