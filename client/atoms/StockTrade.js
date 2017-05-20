import React from 'react'
import CSSModules from 'react-css-modules'

import { formatIntCommas } from '../utils/utils'

import Style from '../styles/atoms/StockTrade'

const StockTrade = (props) => {
  const buySell = props.action.toLowerCase()
  return (
    <div styleName='root'>
      <i className='material-icons' styleName={'icon-' + buySell}>
        { buySell == 'buy' ? 'trending_up' : 'trending_down' }
      </i>
      <span styleName={buySell}>{ props.action }</span>
      <span>{ Math.abs(props.shares) }</span>
      <span styleName='symbol'>{ props.symbol }</span>
      <span styleName={buySell + '-amount'}>{ formatIntCommas(+props.price) }</span>
    </div>
  )
}

export default CSSModules(StockTrade, Style)
