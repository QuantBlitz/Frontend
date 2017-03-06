import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getStockHistory } from '../actions/stockActions'

import { formatDate } from '../utils/utils'

import StockOverview from '../components/StockOverview'
import StockChart from '../components/StockChart'

import Style from '../styles/containers/Stock'

class Stock extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentWillMount() {
    const { getStockHistory, params } = this.props
    const today = new Date()
    const newDate = new Date()
    const monthAgo = new Date(newDate.setDate(newDate.getDate() - 30))
    getStockHistory(params.symbol, formatDate(monthAgo), formatDate(today))
  }
  render() {
    const { isFetching, params, symbolHistory } = this.props
    return (
      <div className='container' styleName='root'>
        <StockOverview symbol={params.symbol} />
        { isFetching ? 'LOADING HOLY FUCK' : <StockChart history={symbolHistory} /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isFetching, symbolHistory } = state.stock
  return { isFetching, symbolHistory }
}

export default connect(mapStateToProps, { getStockHistory })(CSSModules(Stock, Style))
