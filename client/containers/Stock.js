import React, { Component } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import StockOverview from '../components/StockOverview'

import Style from '../styles/containers/Stock'

class Stock extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentWillMount() {

  }
  render() {
    const { params } = this.props
    return (
      <div className='container' styleName='root'>
        Stock Page
        <StockOverview symbol={params.symbol} />
      </div>
    )
  }
}

export default connect()(CSSModules(Stock, Style))
