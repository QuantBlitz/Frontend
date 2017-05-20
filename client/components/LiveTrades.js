import React from 'react'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import StockTrade from '../atoms/StockTrade'

import Style from '../styles/components/LiveTrades'

const LiveTrades = (props) => {
  return (
    <div className='col s3 pull-s2' styleName='root'>
      <h4 styleName='header'>Latest User Trades</h4>
      {
        props.trades.slice(0, 5).map(s =>
          <StockTrade key={create().value} {...s} />)
      }
    </div>
  )
}

export default CSSModules(LiveTrades, Style)
