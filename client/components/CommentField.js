import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/CommentField'

const CommentField = (props) => {
  return (
    <div>
      <textarea></textarea>
    </div>
  )
}

export default CSSModules(CommentField, Style)
