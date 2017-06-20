import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getSymbolChart } from '../actions/symbolActions'

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
      comment: ''
    }
  }
  componentDidMount() {
    const { getSymbolChart, match } = this.props
    getSymbolChart(match.params.symbol)
  }
  handleClick = (id) => {
    console.log('Comment ID:', id)
  }
  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  handleSubmit = (e) => {
    const { loggedIn } = this.props
    e.preventDefault()
    this.setState({
      comment: ''
    })
  }
  render() {
    const { comments, isFetchingChart, match, history } = this.props
    const { comment } = this.state

    return (
      <Root>
        <div className='container' styleName='root'>
          <StockOverview symbol={match.params.symbol} />
          { isFetchingChart && !history ? <Loader /> : <StockChart history={history} /> }
          <CommentForm onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            value={comment} />
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
