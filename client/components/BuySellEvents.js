import React from 'react'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import StockTrade from '../atoms/StockTrade'

import Style from '../styles/components/BuySellEvents'

const BuySellEvents = (props) => {
  return (
    <ul styleName='root'>
      {
        props.transactions.slice(0, 5).map(s =>
          <StockTrade key={create().value} {...s} />)
      }
    </ul>
  )
}

export default CSSModules(BuySellEvents, Style)
