import React, { PropTypes } from 'react'
import { create } from 'guid'
import CSSModules from 'react-css-modules'

import WatchlistItem from '../atoms/WatchlistItem'

import Style from '../styles/components/Watchlist'

const Watchlist = (props) => {
  return (
    <div className='center' styleName='root'>
      { props.data.length < 1 ? <h4>Stocks You're Currently Tracking</h4> : '' }
      <div className='row'>
        { props.data.map(item => <WatchlistItem key={create().value} {...item} />) }
      </div>
    </div>
  )
}

Watchlist.propTypes = {
  data: PropTypes.array.isRequired
}

export default CSSModules(Watchlist, Style)
