import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import CommentField from '../components/CommentField'

import Style from '../styles/atoms/Comment'

const Comment = (props) => {
  return (
    <div styleName='root'>
      { props.content }
      <div>
        <span styleName='reply' onClick={() => props.onClick(props.id)}>
          reply &nbsp;
        </span>
        <span styleName='reply' onClick={() => props.onClick(props.id)}>
          permalink
        </span>
      </div>
      <CommentField key={create().value} onClick={props.onClick}
        comments={props.comments} />
    </div>
  )
}

export default CSSModules(Comment, Style)
