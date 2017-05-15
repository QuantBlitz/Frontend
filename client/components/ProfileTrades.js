import React from 'react'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import StockTrade from '../atoms/StockTrade'

import Style from '../styles/components/ProfileTrades'

const ProfileTrades = (props) => {
  return (
    <div className='row'>
      <div className='col s6 offset-s6'>
        { props.trades.slice(0, 5).map(stock =>
          <StockTrade key={create().value} {...stock} />) }
      </div>
    </div>
  )
}

export default CSSModules(ProfileTrades, Style)
