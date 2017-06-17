import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import CommentField from '../components/CommentField'

import Style from '../styles/atoms/Comment'

const Comment = (props) => {
  return (
    <div>
      { props.content }
      <CommentField key={create().value} comments={props.comments} />
    </div>
  )
}

export default CSSModules(Comment, Style)
