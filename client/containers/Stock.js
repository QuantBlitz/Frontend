import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getSymbolChart } from '../actions/symbolActions'

import { formatDate } from '../utils/utils'

import StockOverview from '../components/StockOverview'
import StockChart from '../components/StockChart'

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
  render() {
    const { isFetchingChart, match, history } = this.props
    return (
      <div className='container' styleName='root'>
        <StockOverview symbol={match.params.symbol} />
        { isFetchingChart ? 'Loading...' : <StockChart history={history} /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isFetchingChart, history } = state.symbol
  return { isFetchingChart, history }
}

export default connect(mapStateToProps, {
  getSymbolChart
})(CSSModules(Stock, Style))
