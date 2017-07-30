import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getSymbolChart } from '../actions/symbolActions'
import { postComment, postReply } from '../actions/commentsActions'

import Root from './Root'
import StockOverview from '../components/StockOverview'
import StockChart from '../components/StockChart'
import CommentForm from '../components/CommentForm'
import CommentField from '../components/CommentField'
import Loader from '../atoms/Loader'

import Style from '../styles/containers/Stock'

class Stock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: '',
      reply: '',
      replyID: null
    }
  }
  componentDidMount() {
    const { getSymbolChart, match } = this.props
    getSymbolChart(match.params.symbol)
  }
  handleClick = (id = null) => {
    const { loggedIn } = this.props
    // if (!loggedIn) return alert('You must be logged in to reply')
    this.setState({
      replyID: id
    })
  }
  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  handleSubmit = (e) => {
    const { loggedIn, match, postComment } = this.props
    const { symbol } = match.params
    const { comment } = this.state
    e.preventDefault()
    if (!loggedIn) return alert('You must be logged in to comment')
    if (comment.length < 3) return alert('Comment must be at least 3 characters')

    postComment({ symbol, comment })
    this.setState({
      comment: ''
    })
  }
  render() {
    const { comments, isFetchingChart, match, history } = this.props
    const { comment, replyID } = this.state

    return (
      <Root>
        <div className='container' styleName='root'>
          <StockOverview symbol={match.params.symbol} />
          { isFetchingChart && !history ? <Loader /> : <StockChart history={history} /> }
          <CommentForm onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            value={comment} />
          <div styleName='comments-container'>
            <CommentField
              onClick={this.handleClick}
              comments={comments}
              replyID={replyID} />
          </div>
        </div>
      </Root>
    )
  }
}

const mapStateToProps = (state) => {
  const { isFetchingChart, history } = state.symbol
  const { loggedIn } = state.user
  const { comments } = state
  return { comments, isFetchingChart, history, loggedIn }
}

export default connect(mapStateToProps, {
  getSymbolChart,
  postComment,
  postReply
})(CSSModules(Stock, Style))
