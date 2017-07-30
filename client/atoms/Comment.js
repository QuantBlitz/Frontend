import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import CommentReply from '../containers/CommentReply'
import CommentField from '../components/CommentField'

import Style from '../styles/atoms/Comment'

const Comment = (props) => {
  const isVisible = props.replyID == props.id
  return (
    <div styleName='root'>
      <div styleName='username'>{ 'someusername' }</div>
      { props.content }
      <div>
        <span styleName='reply' onClick={() => props.onClick(props.id)}>
          reply &nbsp;
        </span>
        <span styleName='reply'>
          permalink
        </span>
      </div>
      { isVisible ? <CommentReply id={props.id} onClick={props.onClick} /> : '' }
      <CommentField key={create().value}
        replyID={props.replyID}
        onClick={props.onClick}
        comments={props.comments} />
    </div>
  )
}

export default CSSModules(Comment, Style)
