import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import Style from '../styles/components/CommentField'

import Comment from '../atoms/Comment'

const CommentField = (props) => {
  const { comments } = props
  return (
    <div>
      {
        Object.keys(comments).map(x =>
          <Comment key={create().value} {...comments[x]} />
        )
      }
    </div>
  )
}

export default CSSModules(CommentField, Style)
