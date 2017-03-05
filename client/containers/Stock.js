import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { getStockHistory } from '../actions/stockActions'

import StockOverview from '../components/StockOverview'
import StockChart from '../components/StockChart'

import Style from '../styles/containers/Stock'

class Stock extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentWillMount() {
    const { dispatch, params } = this.props
    dispatch(getStockHistory(params.symbol, '2017-03-01', '2017-03-04'))
  }
  render() {
    const { params, symbolHistory } = this.props
    return (
      <div className='container' styleName='root'>
        Stock Page
        <StockOverview symbol={params.symbol} />
        <StockChart history={symbolHistory} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { symbolHistory } = state.stock
  return { symbolHistory }
}

export default connect(mapStateToProps)(CSSModules(Stock, Style))
