import React from 'react'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import Loader from '../atoms/Loader'

import Style from '../styles/components/ProfileBody'

const ProfileBody = (props) => {
  return (
    <div className='row'>
      <div className='card-panel' styleName='card'>
        { props.trades.slice(0, 5).map(stock =>
          <StockTrade key={create().value} {...stock} />) }
        <Loader />
      </div>
    </div>
  )
}

export default CSSModules(ProfileBody, Style)
