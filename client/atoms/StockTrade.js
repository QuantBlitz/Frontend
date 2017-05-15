import React from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/StockTrade'

const StockTrade = (props) => {
  const buySell = props.action.toLowerCase()
  return (
    <li styleName='root'>
      <i className='material-icons' styleName='icon'>
        { buySell == 'buy' ? 'trending_up' : 'trending_down' }
      </i>
      <span styleName={buySell}>{ props.action }</span>
      <span>{ Math.abs(props.shares) }</span>
      <span styleName='symbol'>{ props.symbol }</span>
      <span styleName={buySell + '-amount'}>{ props.price }</span>
    </li>
  )
}

export default CSSModules(StockTrade, Style)
