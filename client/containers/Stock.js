import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getSymbolChart } from '../actions/symbolActions'

import { formatDate } from '../utils/utils'

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

    this.state = {}
  }
  componentDidMount() {
    const { getSymbolChart, match } = this.props
    const today = new Date()
    const newDate = new Date()
    const monthAgo = new Date(newDate.setDate(newDate.getDate() - 30))
    getSymbolChart(match.params.symbol, formatDate(monthAgo), formatDate(today))
  }
  handleClick = (id) => {
    console.log('Comment ID:', id)
  }
  handleSubmit = (e) => {
    const { loggedIn } = this.props
    e.preventDefault()
    console.log('Logged in?', loggedIn)
  }
  render() {
    const { comments, isFetchingChart, match, history } = this.props
    return (
      <Root>
        <div className='container' styleName='root'>
          <StockOverview symbol={match.params.symbol} />
          { isFetchingChart && !history ? <Loader /> : <StockChart history={history} /> }
          <CommentForm onSubmit={this.handleSubmit} />
          <div styleName='comments-container'>
            <CommentField comments={comments} onClick={this.handleClick} />
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
  getSymbolChart
})(CSSModules(Stock, Style))
