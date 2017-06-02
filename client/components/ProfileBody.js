import React from 'react'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import Loader from '../atoms/Loader'
import StockTrade from '../atoms/StockTrade'

import Style from '../styles/components/ProfileBody'

const ProfileBody = (props) => {
  return (
    <div className='card-panel' styleName='card'>
      <img src='https://puu.sh/w2jcz/711274df02.png' styleName='image' />
      <div>
        <h5 styleName='trades-header'>Latest Trades</h5>
        {
          props.trades.slice(0, 5).map(stock =>
            <StockTrade key={create().value} {...stock} />
          )
        }
      </div>
      {/* <Loader /> */}
    </div>
  )
}

export default CSSModules(ProfileBody, Style)
