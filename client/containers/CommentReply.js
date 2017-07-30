import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { postReply } from '../actions/commentsActions'

import Style from '../styles/containers/CommentReply'

class CommentReply extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      reply: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      reply: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { id, postReply } = this.props
    const { reply } = this.state

    postReply({ commentID: id, reply })
    this.props.onClick()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea styleName='reply' onChange={this.handleChange} />
        <button styleName='btn'>reply</button>
        <button styleName='btn' onClick={() => this.props.onClick()}>
          cancel
        </button>
      </form>
    )
  }
}

export default connect(null, {
  postReply
})(CSSModules(CommentReply, Style))
